import React, { useState } from "react";
import BackgroundComponent from "./components/background-snippets-noise-effect11";
import { HeroSection } from "./components/hero-section-dark";
import CountdownTimer from "./components/countdown-timer";
import RegisterPage from "./Register";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  if (currentPage === "register") {
    return <RegisterPage onNavigate={navigateTo} />;
  }

  return (
    <>
      {/* Animated Background */}
      <div className="fixed inset-0 z-10">
        <BackgroundComponent
          borderColor="rgba(255,20,147,0.12)"
          hoverFillColor="rgba(255,20,147,0.03)"
          hoverStrokeColor="rgba(128,0,64,0.10)"
          hoverGlowColor="rgba(255,20,147,0.15)"
          className="opacity-30"
        />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/70 py-2 md:py-4 z-40 backdrop-blur-lg border-b border-pink-500/20 shadow-lg shadow-pink-500/10 px-3 md:px-4">
        {/* Mobile Layout */}
        <div className="flex justify-between items-center md:hidden">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Trace the Race Logo"
              className="h-6 w-auto mr-2 hover:scale-110 transition-transform duration-300"
            />
            <div className="text-pink-400 font-bold text-1xl tracking-wide">TRACE THE RACE</div>
          </div>
          <div className="inline-flex cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
            <button
              onClick={() => navigateTo("register")}
              className="inline-flex rounded-full text-center group items-center justify-center bg-gradient-to-tr from-[#ff1493]/20 via-[#800040]/30 to-transparent text-white border-[#ff1493]/50 border-[1px] hover:bg-gradient-to-tr hover:from-[#ff1493]/30 hover:via-[#800040]/40 hover:to-transparent transition-all py-1.5 px-4">
              START INVESTIGATION
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center h-10">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Trace the Race Logo"
              className="h-12 w-auto mr-2 hover:scale-110 transition-transform duration-300"
            />
            <div className="text-pink-400 font-bold text-2xl tracking-wide">TRACE THE RACE</div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 absolute left-1/2 transform -translate-x-1/2">
            <a
              href="#about"
              className="text-white text-sm hover:text-[#ff1493] transition-all duration-300 hover:scale-110 px-3 py-2 rounded-lg hover:bg-pink-900/20 border border-transparent hover:border-pink-500/30"
            >
              🔍 About
            </a>
            <a
              href="#clues"
              className="text-white text-sm hover:text-[#ff1493] transition-all duration-300 hover:scale-110 px-3 py-2 rounded-lg hover:bg-pink-900/20 border border-transparent hover:border-pink-500/30"
            >
              🧩 Clues
            </a>
            <a
              href="#rules"
              className="text-white text-sm hover:text-[#ff1493] transition-all duration-300 hover:scale-110 px-3 py-2 rounded-lg hover:bg-pink-900/20 border border-transparent hover:border-pink-500/30"
            >
              📋 Rules
            </a>
            <a
              href="#case-details"
              className="text-white text-sm hover:text-[#ff1493] transition-all duration-300 hover:scale-110 px-3 py-2 rounded-lg hover:bg-pink-900/20 border border-transparent hover:border-pink-500/30"
            >
              📅 Case Details
            </a>
            <a
              href="#evidence"
              className="text-white text-sm hover:text-[#ff1493] transition-all duration-300 hover:scale-110 px-3 py-2 rounded-lg hover:bg-pink-900/20 border border-transparent hover:border-pink-500/30"
            >
              🏆 Evidence
            </a>
          </div>
          <div className="inline-flex cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-pink-900/50 to-black/50 border border-pink-500/30 backdrop-blur-sm">
            <button
              onClick={() => navigateTo("register")}
              className="inline-flex rounded-full text-center group items-center justify-center bg-gradient-to-tr from-[#ff1493]/30 via-[#800040]/40 to-transparent text-white border-[#ff1493]/60 border-[1px] hover:bg-gradient-to-tr hover:from-[#ff1493]/40 hover:via-[#800040]/50 hover:to-transparent transition-all py-3 px-8 shadow-lg shadow-pink-500/20 h-10"
            >
              <span className="mr-2">🕵️</span> START INVESTIGATION
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-20">
        <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 md:px-8">
          <div className="space-y-8 max-w-4xl leading-0 lg:leading-5 mx-auto text-center">
            {/* Mission Badge */}
            <h1 className="text-sm text-gray-600 dark:text-gray-400 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/20 via-gray-400/20 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 border-[2px] border-black/5 dark:border-white/5 rounded-3xl w-fit">
              🔍 CASE OPENED: CLASSIFIED
              <svg className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </h1>

            {/* Main Title */}
            <h2 className="text-4xl tracking-tighter font-geist bg-clip-text text-transparent mx-auto md:text-6xl bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
              TRACE - THE - RACE
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1493] to-[#800040]">
                Coding Debugging Event
              </span>
            </h2>

            {/* Description */}
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-sm md:text-base px-4 md:px-0 break-words">
              "Every bug is a clue. Every error tells a story. Join the elite detective force and solve the ultimate debugging mystery."
            </p>

            {/* Countdown Timer in Hero */}
            <div className="bg-gradient-to-br from-black/60 to-pink-900/20 rounded-2xl p-6 md:p-8 border border-pink-500/20 backdrop-blur-sm shadow-xl shadow-pink-500/20 max-w-3xl mx-auto">
              <div className="text-pink-300 text-sm mb-4 font-semibold tracking-wide">
                🕵️‍♂️ INVESTIGATION COUNTDOWN 🔍
              </div>
              <CountdownTimer targetDate="2025-09-25T11:00:00" />
              {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-center">
                <div className="bg-pink-900/30 rounded-lg p-3 border border-pink-500/20">
                  <div className="text-pink-400 text-xs font-semibold">DATE</div>
                  <div className="text-white font-bold text-sm">Sept 25, 2025</div>
                </div>
                <div className="bg-pink-900/30 rounded-lg p-3 border border-pink-500/20">
                  <div className="text-pink-400 text-xs font-semibold">TIME</div>
                  <div className="text-white font-bold text-sm">11:00 AM</div>
                </div>
                <div className="bg-pink-900/30 rounded-lg p-3 border border-pink-500/20">
                  <div className="text-pink-400 text-xs font-semibold">VENUE</div>
                  <div className="text-white font-bold text-sm">Chamber 3</div>
                </div>
                <div className="bg-pink-900/30 rounded-lg p-3 border border-pink-500/20">
                  <div className="text-pink-400 text-xs font-semibold">DURATION</div>
                  <div className="text-white font-bold text-sm">4 Hours</div>
                </div>
              </div> */}
            </div>

            {/* CTA Button */}
            <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff1493_0%,#800040_50%,#ff1493_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                  <button
                    onClick={() => navigateTo("register")}
                    className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-[#ff1493]/30 via-[#800040]/40 to-transparent text-white border-[#ff1493]/60 border-[1px] hover:bg-gradient-to-tr hover:from-[#ff1493]/40 hover:via-[#800040]/50 hover:to-transparent transition-all sm:w-auto py-4 px-10"
                  >
                    🕵️ ACCEPT MISSION
                  </button>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <section
        id="about"
        className="py-16 md:py-24 px-5 max-w-6xl mx-auto text-center animate-fade-in-up relative z-20"
      >
        <div className="bg-gradient-to-br from-black/60 to-pink-900/20 rounded-3xl p-8 md:p-12 border border-pink-500/20 backdrop-blur-sm shadow-2xl shadow-pink-500/10">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full flex items-center justify-center mr-4">
              <span className="text-3xl">🕵️‍♂️</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold hover:text-[#ff1493] transition-colors duration-300">
              CASE FILE: CLASSIFIED
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-pink-400 text-xl mt-1">🔍</span>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Step into the shoes of a code detective and dive into the ultimate debugging adventure!
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-pink-400 text-xl mt-1">⏰</span>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Every puzzle hides a secret, every bug is a clue, and every second counts.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-pink-400 text-xl mt-1">🧩</span>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  From mind-twisting riddles to quirky challenges, your wit and problem-solving skills will be tested.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-pink-400 text-xl mt-1">👁️</span>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Can you spot the errors before they spot you?
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-pink-400 text-xl mt-1">🏆</span>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Outsmart glitches, decode mysteries, and claim victory against time itself.
                </p>
              </div>
              <div className="bg-gradient-to-r from-pink-900/30 to-transparent p-4 rounded-lg border border-pink-500/20">
                <div className="text-pink-300 font-semibold mb-2">🚨 MISSION BRIEFING</div>
                <div className="text-xs text-gray-300">This is not just debugging - it's detective work at its finest.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clues */}
      <section
        id="clues"
        className="py-24 px-5 max-w-6xl mx-auto text-center animate-fade-in-up relative z-20"
      >
        <div className="bg-gradient-to-br from-pink-900/20 to-black/60 rounded-3xl p-8 md:p-12 border border-pink-500/20 backdrop-blur-sm shadow-2xl shadow-pink-500/10">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 hover:text-[#ff1493] transition-colors duration-300">
            🔎 INVESTIGATION PERKS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black/40 p-6 rounded-xl border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-3">🆓</div>
              <h3 className="text-pink-300 font-semibold mb-2">FREE ACCESS</h3>
              <p className="text-xs text-gray-300">No cost to join the investigation</p>
            </div>
            <div className="bg-black/40 p-6 rounded-xl border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-3">☕</div>
              <h3 className="text-pink-300 font-semibold mb-2">DETECTIVE'S FUEL</h3>
              <p className="text-xs text-gray-300">Refreshments to keep you sharp</p>
            </div>
            <div className="bg-black/40 p-6 rounded-xl border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-3">🚌</div>
              <h3 className="text-pink-300 font-semibold mb-2">TRANSPORT</h3>
              <p className="text-xs text-gray-300">Easy access to crime scene</p>
            </div>
            <div className="bg-black/40 p-6 rounded-xl border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-pink-300 font-semibold mb-2">EVIDENCE KIT</h3>
              <p className="text-xs text-gray-300">All investigation tools provided</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rules */}
      <section
        id="rules"
        className="py-24 px-5 max-w-4xl mx-auto text-center animate-fade-in-up relative z-20"
      >
        <h2 className="text-2xl mb-6 hover:text-[#ff1493] transition-colors duration-300">
          Investigation Protocol 📋
        </h2>
        <ul className="text-sm leading-relaxed list-disc list-inside hover:scale-105 transition-transform duration-300">
          <li>Each group must consist of 2-3 members</li>
          <li>Cross-college detective partnerships welcomed</li>
          <li>Students from 1st, 2nd and 3rd year are eligible to participate</li>
          <li>Only approved resources and tools are allowed during the event</li>
          <li>Individual participation is not permitted</li>
          <li>Specific rules and tasks for each round will be announced at the beginning of that round</li>
        </ul>
      </section>


      {/* Evidence */}
      <section
        id="evidence"
        className="py-24 px-5 max-w-4xl mx-auto text-center animate-fade-in-up relative z-20"
      >
        <h2 className="text-2xl mb-6 hover:text-[#ff1493] transition-colors duration-300">
          Case Rewards 🏆
        </h2>
        <ul className="text-sm leading-relaxed list-disc list-inside hover:scale-105 transition-transform duration-300">
          <li>Detective Certificates for all participants 🎖️</li>
          <li>Special recognition for top investigators 🥇</li>
          {/* <li>Mystery prizes for case solvers 🎁</li> */}
          <li>Hall of Fame entry for the best detectives 🌟</li>
        </ul>
      </section>

      {/* Case Details */}
      <section
        id="case-details"
        className="py-24 px-5 max-w-6xl mx-auto text-center animate-fade-in-up relative z-20"
      >
        <div className="bg-gradient-to-br from-black/60 to-pink-900/20 rounded-3xl p-8 md:p-12 border border-pink-500/20 backdrop-blur-sm shadow-2xl shadow-pink-500/10">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 hover:text-[#ff1493] transition-colors duration-300">
            📅 CASE DETAILS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-pink-900/30 to-black/50 p-6 rounded-xl border border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
              <div className="text-3xl mb-3">📅</div>
              <div className="text-pink-300 font-semibold text-sm">DATE</div>
              <div className="text-white font-bold">25th September 2025</div>
            </div>
            <div className="bg-gradient-to-br from-pink-900/30 to-black/50 p-6 rounded-xl border border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
              <div className="text-3xl mb-3">⏰</div>
              <div className="text-pink-300 font-semibold text-sm">TIME</div>
              <div className="text-white font-bold">11:00 AM – 3:00 PM</div>
            </div>
            <div className="bg-gradient-to-br from-pink-900/30 to-black/50 p-6 rounded-xl border border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
              <div className="text-3xl mb-3">🏢</div>
              <div className="text-pink-300 font-semibold text-sm">VENUE</div>
              <div className="text-white font-bold text-sm">Chamber 3, Library Block</div>
            </div>
            <div className="bg-gradient-to-br from-pink-900/30 to-black/50 p-6 rounded-xl border border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
              <div className="text-3xl mb-3">🕰️</div>
              <div className="text-pink-300 font-semibold text-sm">DURATION</div>
              <div className="text-white font-bold text-sm">4 Hours of Investigation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      {/* Contact */}
      <section
        id="contact"
        className="py-24 px-5 max-w-4xl mx-auto text-center animate-fade-in-up relative z-20"
      >
        <h2 className="text-2xl mb-6 hover:text-[#ff1493] transition-colors duration-300">
          Need Backup? 📞
        </h2>
        <p className="text-sm mb-8 hover:scale-105 transition-transform duration-300">
          Mahalakshmi P: +91 9840261279
          <br />
          Rubendra S: +91 8072426629
        </p>
      </section>



    </>
  );

}



