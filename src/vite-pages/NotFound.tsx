import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F6F2]">
      {/* Subtle background glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#5B2BFF]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#4E24CF]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Animated 404 with gradient */}
        <div className="mb-8 relative">
          <h1 className="text-[120px] md:text-[160px] font-black leading-none tracking-[-0.05em] bg-gradient-to-r from-[#5B2BFF] to-[#4E24CF] bg-clip-text text-transparent animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <AlertCircle size={80} className="text-[#5B2BFF]" />
          </div>
        </div>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
          <br />
          <span className="text-[10px] font-mono text-gray-400 mt-2 block">
            {location.pathname}
          </span>
        </p>

        {/* Back Home Button */}
        <a 
          href="/" 
          className="inline-flex items-center gap-3 bg-gradient-to-r from-[#5B2BFF] to-[#4E24CF] text-white px-8 py-4 rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group"
        >
          <Home size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          Return Home
        </a>

        {/* Optional: Back to previous page */}
        <button
          onClick={() => window.history.back()}
          className="block mt-6 mx-auto text-[9px] text-gray-400 hover:text-[#5B2BFF] uppercase tracking-[0.3em] transition-colors"
        >
          ← Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
