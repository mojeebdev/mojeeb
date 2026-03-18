import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AI from "./pages/AI";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Simple background div with direct style attribute */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(to right, #5B2BFF 1px, transparent 1px),
            linear-gradient(to bottom, #5B2BFF 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          opacity: 0.15
        }}
      />
      
      {/* Magic blurs as separate divs */}
      <div
        style={{
          position: 'fixed',
          top: -160,
          left: -160,
          width: '400px',
          height: '400px',
          background: '#5B2BFF',
          opacity: 0.03,
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'fixed',
          bottom: -160,
          right: -160,
          width: '400px',
          height: '400px',
          background: '#5B2BFF',
          opacity: 0.03,
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ai" element={<AI />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;