import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContactFormData {
  name: string;
  email: string;
  project?: string;
  message: string;
  collaborationTypes?: string[];
  honeypot?: string; 
}


const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; 
const MAX_REQUESTS_PER_WINDOW = 5; 

function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  
  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  
  record.count++;
  return false;
}


function sanitizeInput(input: string, maxLength: number): string {
  if (typeof input !== 'string') return '';
  return input.trim().slice(0, maxLength);
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
}


function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char] || char);
}

serve(async (req) => {
  
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     req.headers.get('cf-connecting-ip') || 
                     'unknown';
    
    console.log(`Contact form submission attempt from IP: ${clientIP}`);
    
    if (isRateLimited(clientIP)) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        { 
          status: 429, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    const formData: ContactFormData = await req.json()
    
    
    if (formData.honeypot && formData.honeypot.length > 0) {
      console.warn(`Honeypot triggered from IP: ${clientIP}`);
      
      return new Response(
        JSON.stringify({ success: true, message: 'Message sent successfully' }),
        { 
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    
    const name = sanitizeInput(formData.name || '', 100);
    const email = sanitizeInput(formData.email || '', 255);
    const project = sanitizeInput(formData.project || '', 200);
    const message = sanitizeInput(formData.message || '', 2000);
    const collaborationTypes = Array.isArray(formData.collaborationTypes) 
      ? formData.collaborationTypes.slice(0, 10).map(t => sanitizeInput(String(t), 50))
      : [];

    
    if (!name || name.length < 2) {
      return new Response(
        JSON.stringify({ error: 'Name must be at least 2 characters' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: 'Please provide a valid email address' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    if (!message || message.length < 10) {
      return new Response(
        JSON.stringify({ error: 'Message must be at least 10 characters' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not found in environment variables')
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeProject = escapeHtml(project);
    const safeMessage = escapeHtml(message);
    const safeCollaborationTypes = collaborationTypes.map(escapeHtml);

    
    const emailSubject = `New Contact Form Submission from ${safeName}`
    const emailBody = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      ${safeProject ? `<p><strong>Project/Company:</strong> ${safeProject}</p>` : ''}
      ${safeCollaborationTypes.length > 0 ? 
        `<p><strong>Collaboration Types:</strong> ${safeCollaborationTypes.join(', ')}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${safeMessage.replace(/\n/g, '<br>')}</p>
      
      <hr>
      <p><small>This message was sent from your portfolio contact form.</small></p>
      <p><small>Client IP: ${escapeHtml(clientIP)}</small></p>
    `

    
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <noreply@resend.dev>',
        to: ['mojeeb.eth@gmail.com'],
        reply_to: email,
        subject: emailSubject,
        html: emailBody,
      }),
    })

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text()
      console.error('Failed to send email:', errorText)
      throw new Error('Failed to send email')
    }
    const emailResult = await emailResponse.json()
    console.log('Email sent successfully:', emailResult)
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Contact form submitted and email sent successfully' 
      }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Error processing contact form:', error)
    
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})