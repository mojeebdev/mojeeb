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
      
      {/* Background Art Layer - Fixed to entire screen */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Existing magic blurs */}
        <div className="magic-blur -top-40 -left-40" />
        <div className="magic-blur -bottom-40 -right-40" />
        
        {/* New artistic elements - more visible grid */}
        <div className="absolute inset-0 bg-grid-pattern-medium opacity-60" />
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="absolute inset-0 bg-scanlines opacity-20" />
        
        {/* Abstract blobs */}
        <div className="bg-blob-1 -top-20 -right-20" />
        <div className="bg-blob-2 -bottom-20 -left-20" />
        <div className="bg-blob-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        
        {/* Optional: Add dots for extra texture */}
        <div className="absolute inset-0 bg-dot-pattern opacity-30 mix-blend-overlay" />
      </div>
      
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