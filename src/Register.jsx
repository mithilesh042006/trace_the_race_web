import React from "react";
import BackgroundComponent from "./components/background-snippets-noise-effect11";

export default function RegisterPage({ onNavigate }) {
  return (
    <>
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <BackgroundComponent
          borderColor="rgba(255,20,147,0.12)"
          hoverFillColor="rgba(255,20,147,0.03)"
          hoverStrokeColor="rgba(128,0,64,0.10)"
          hoverGlowColor="rgba(255,20,147,0.15)"
          className="opacity-30"
        />
      </div>

      {/* Gradient overlays */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-purple-900/10 via-transparent to-pink-900/10 pointer-events-none"></div>
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/70 py-2 md:py-4 z-40 backdrop-blur-lg border-b border-pink-500/20 shadow-lg shadow-pink-500/10 px-3 md:px-4">
        {/* Mobile Layout */}
        <div className="flex justify-between items-center md:hidden">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="The After Effect Logo"
              className="h-6 w-auto mr-2 hover:scale-110 transition-transform duration-300"
            />
            <div className="text-pink-400 font-bold text-1xl tracking-wide">THE AFTER EFFECT</div>
          </div>
          <div className="inline-flex cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
            <button
              onClick={() => onNavigate?.("home")}
              className="inline-flex rounded-full text-center group items-center justify-center bg-gradient-to-tr from-[#ff1493]/20 via-[#800040]/30 to-transparent text-white border-[#ff1493]/50 border-[1px] hover:bg-gradient-to-tr hover:from-[#ff1493]/30 hover:via-[#800040]/40 hover:to-transparent transition-all py-1.5 px-4"
            >
              ← BACK TO HOME
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center h-10">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="The After Effect Logo"
              className="h-8 w-auto mr-3 hover:scale-110 transition-transform duration-300"
            />
            <div className="text-pink-400 font-bold text-xl tracking-wide">THE AFTER EFFECT</div>
          </div>
          <div className="inline-flex cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
            <button
              onClick={() => onNavigate?.("home")}
              className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-[#ff1493]/20 via-[#800040]/30 to-transparent text-white border-[#ff1493]/50 border-[1px] hover:bg-gradient-to-tr hover:from-[#ff1493]/30 hover:via-[#800040]/40 hover:to-transparent transition-all py-2 px-6"
            >
              ← BACK TO HOME
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content — Registration Closed */}
      <div className="min-h-screen pt-24 md:pt-28 pb-12 px-4 relative z-10 flex items-center justify-center">
        <div className="max-w-lg w-full mx-auto text-center">

          {/* Closed badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 text-xs mb-8">
            <span className="w-2 h-2 rounded-full bg-red-400"></span>
            Registrations Closed
          </div>

          {/* Lock icon */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-900/40 to-pink-900/30 border border-red-500/20 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-500/10">
            <span className="text-5xl">🔒</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">
            Registration is Closed
          </h1>

          <p className="text-white/50 text-sm md:text-base mb-8 leading-relaxed">
            Thank you for your interest in{" "}
            <span className="text-pink-300 font-medium">THE AFTER EFFECT</span>.<br />
            Registrations are no longer being accepted.
          </p>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent mb-8" />

          {/* Event info cards */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 text-center">
              <div className="text-2xl mb-2">📅</div>
              <div className="text-xs text-white/60">Date</div>
              <div className="text-sm font-semibold text-white">Feb 24, 2026</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 text-center">
              <div className="text-2xl mb-2">⏰</div>
              <div className="text-xs text-white/60">Time</div>
              <div className="text-sm font-semibold text-white">9:00 AM</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 text-center">
              <div className="text-2xl mb-2">📍</div>
              <div className="text-xs text-white/60">Venue</div>
              <div className="text-sm font-semibold text-white">Chamber 3, Library Block</div>
            </div>
          </div>

          {/* Back button */}
          <button
            onClick={() => onNavigate?.("home")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-tr from-[#ff1493]/20 via-[#800040]/30 to-transparent text-white border border-[#ff1493]/50 hover:from-[#ff1493]/30 hover:via-[#800040]/40 transition-all duration-300 text-sm font-medium"
          >
            ← Back to Home
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-20 border-t border-pink-500/15 mt-8">
        <div className="max-w-6xl mx-auto px-5 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-sm">
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="logo" className="h-8 w-auto" />
                <span className="text-pink-400 font-bold text-lg tracking-wide">THE AFTER EFFECT</span>
              </div>
              <p className="text-white/40 text-xs text-center md:text-left">Where logic is inherited, not erased.</p>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <span className="text-pink-300 font-semibold text-xs uppercase tracking-widest mb-2">📍 Venue</span>
              <span className="text-white/80 font-medium">Jeppiaar Engineering College</span>
              <span className="text-white/50 text-xs">Old Mahabalipuram Road</span>
              <span className="text-white/50 text-xs">Chennai – 600 119, Tamil Nadu, India</span>
            </div>
            <div className="flex flex-col items-center md:items-end gap-1 text-center md:text-right">
              <span className="text-pink-300 font-semibold text-xs uppercase tracking-widest mb-2">📞 Contact</span>
              <span className="text-white/80 text-xs">Mahalakshmi P: +91 9840261279</span>
              <span className="text-white/80 text-xs">Rubendra S: +91 8072426629</span>
            </div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent mb-6" />
          <p className="text-center text-white/30 text-xs">
            © 2026 THE-AFTER-EFFECT. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
