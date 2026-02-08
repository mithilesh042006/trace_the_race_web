import React, { useState } from "react";
import BackgroundComponent from "./components/background-snippets-noise-effect11";
import { HeroSection } from "./components/hero-section-dark";
import CountdownTimer from "./components/countdown-timer";
import RegistrationProgress from "./components/registration-progress";
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
              alt="The After Effect Logo"
              className="h-6 w-auto mr-2 hover:scale-110 transition-transform duration-300"
            />
            <div className="text-pink-400 font-bold text-1xl tracking-wide">THE AFTER EFFECT</div>
          </div>
          <div className="inline-flex cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
            <button
              onClick={() => navigateTo("register")}
              className="inline-flex rounded-full text-center group items-center justify-center bg-gradient-to-tr from-[#ff1493]/20 via-[#800040]/30 to-transparent text-white border-[#ff1493]/50 border-[1px] hover:bg-gradient-to-tr hover:from-[#ff1493]/30 hover:via-[#800040]/40 hover:to-transparent transition-all py-1.5 px-4">
              JOIN NOW
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center h-10">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="The After Effect Logo"
              className="h-12 w-auto mr-2 hover:scale-110 transition-transform duration-300"
            />
            <div className="text-pink-400 font-bold text-2xl tracking-wide">THE AFTER EFFECT</div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 absolute left-1/2 transform -translate-x-1/2">
            <a
              href="#about"
              className="text-white text-sm hover:text-[#ff1493] transition-all duration-300 hover:scale-110 px-3 py-2 rounded-lg hover:bg-pink-900/20 border border-transparent hover:border-pink-500/30"
            >
              ⚡ About
            </a>
            <a
              href="#perks"
              className="text-white text-sm hover:text-[#ff1493] transition-all duration-300 hover:scale-110 px-3 py-2 rounded-lg hover:bg-pink-900/20 border border-transparent hover:border-pink-500/30"
            >
              🎁 Perks
            </a>
            <a
              href="#rules"
              className="text-white text-sm hover:text-[#ff1493] transition-all duration-300 hover:scale-110 px-3 py-2 rounded-lg hover:bg-pink-900/20 border border-transparent hover:border-pink-500/30"
            >
              📋 Protocol
            </a>
            <a
              href="#details"
              className="text-white text-sm hover:text-[#ff1493] transition-all duration-300 hover:scale-110 px-3 py-2 rounded-lg hover:bg-pink-900/20 border border-transparent hover:border-pink-500/30"
            >
              📅 Details
            </a>
            <a
              href="#rewards"
              className="text-white text-sm hover:text-[#ff1493] transition-all duration-300 hover:scale-110 px-3 py-2 rounded-lg hover:bg-pink-900/20 border border-transparent hover:border-pink-500/30"
            >
              🏆 Rewards
            </a>
          </div>
          <div className="inline-flex cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-pink-900/50 to-black/50 border border-pink-500/30 backdrop-blur-sm">
            <button
              onClick={() => navigateTo("register")}
              className="inline-flex rounded-full text-center group items-center justify-center bg-gradient-to-tr from-[#ff1493]/30 via-[#800040]/40 to-transparent text-white border-[#ff1493]/60 border-[1px] hover:bg-gradient-to-tr hover:from-[#ff1493]/40 hover:via-[#800040]/50 hover:to-transparent transition-all py-3 px-8 shadow-lg shadow-pink-500/20 h-10"
            >
              <span className="mr-2">⚡</span> JOIN THE EFFECT
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
              ⚡ Every decision has an after effect…
              <svg className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </h1>

            {/* Main Title */}
            <h2 className="text-2xl tracking-tighter font-geist bg-clip-text text-transparent mx-auto md:text-6xl bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
              <span className="whitespace-nowrap">THE AFTER EFFECT</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1493] to-[#800040]">
                Where Logic is Inherited
              </span>
            </h2>

            {/* Description */}
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-sm md:text-base px-4 md:px-0 break-words">
              "No instructions. No walkthroughs. Just your decisions… and the echoes they leave behind."
            </p>

            {/* Countdown Timer in Hero */}
            <div className="bg-gradient-to-br from-black/60 to-pink-900/20 rounded-2xl p-6 md:p-8 border border-pink-500/20 backdrop-blur-sm shadow-xl shadow-pink-500/20 max-w-3xl mx-auto">
              <div className="text-pink-300 text-sm mb-4 font-semibold tracking-wide">
                ⏰ THE COUNTDOWN BEGINS ⚡
              </div>
              <CountdownTimer targetDate="2026-02-24T10:00:00" />
            </div>

            {/* Registration Progress Slider - Fetches real-time count from Netlify API */}
            <RegistrationProgress maxRegistrations={30} refreshInterval={30000} />

            {/* CTA Button */}
            <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff1493_0%,#800040_50%,#ff1493_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                  <button
                    onClick={() => navigateTo("register")}
                    className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-[#ff1493]/30 via-[#800040]/40 to-transparent text-white border-[#ff1493]/60 border-[1px] hover:bg-gradient-to-tr hover:from-[#ff1493]/40 hover:via-[#800040]/50 hover:to-transparent transition-all sm:w-auto py-4 px-10"
                  >
                    ⚡ LEAVE YOUR MARK
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
              <span className="text-3xl">⚡</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold hover:text-[#ff1493] transition-colors duration-300">
              MISSION BRIEFING
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-pink-400 text-xl mt-1">🕵️‍♂️</span>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  You think you're building something. But here's the twist — it's not really yours. Your work will be picked up, examined, and carried forward by someone else.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-pink-400 text-xl mt-1">🔍</span>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Will your logic survive? Will your ideas make sense in another team's hands? That's the real challenge.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-pink-400 text-xl mt-1">🧩</span>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Brainstorm, design, document, debate. Chaos sneaks in. Ideas collide. Brains buzz.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-pink-400 text-xl mt-1">👁️</span>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Your decisions echo. Your impact travels. Every thought, every design, every line of logic could be the clue someone else follows… or misses.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-pink-400 text-xl mt-1">🌶️</span>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Real IT vibes: teamwork, design thinking, logic, collaboration… with a dash of mystery.
                </p>
              </div>
              <div className="bg-gradient-to-r from-pink-900/30 to-transparent p-4 rounded-lg border border-pink-500/20">
                <div className="text-pink-300 font-semibold mb-2">⚡ THE TWIST</div>
                <div className="text-xs text-gray-300">Build. Leave it. Watch it evolve. Fail. Surprise yourself. Your decisions don't disappear — they echo beyond you.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge at a Glance */}
      <section
        id="challenge"
        className="py-24 px-5 max-w-4xl mx-auto text-center animate-fade-in-up relative z-20"
      >
        <h2 className="text-2xl mb-6 hover:text-[#ff1493] transition-colors duration-300">
          🧩 Challenge at a Glance
        </h2>
        <div className="bg-gradient-to-br from-black/40 to-pink-900/10 rounded-2xl p-6 md:p-8 border border-pink-500/20 backdrop-blur-sm">
          <ul className="text-sm md:text-base leading-relaxed space-y-3 text-left max-w-2xl mx-auto">
            <li className="flex items-center gap-3"><span>🧠</span> Brainstorm, design, document, debate</li>
            <li className="flex items-center gap-3"><span>🌀</span> Chaos sneaks in. Ideas collide. Brains buzz.</li>
            <li className="flex items-center gap-3"><span>💼</span> Real IT vibes: teamwork, design thinking, logic, collaboration</li>
            <li className="flex items-center gap-3"><span>🔒</span> No instructions. No spoilers. Just your decisions… and the echoes they leave behind.</li>
          </ul>
        </div>
      </section>

      {/* Perks */}
      <section
        id="perks"
        className="py-24 px-5 max-w-6xl mx-auto text-center animate-fade-in-up relative z-20"
      >
        <div className="bg-gradient-to-br from-pink-900/20 to-black/60 rounded-3xl p-8 md:p-12 border border-pink-500/20 backdrop-blur-sm shadow-2xl shadow-pink-500/10">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 hover:text-[#ff1493] transition-colors duration-300">
            🎁 INVESTIGATION PERKS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black/40 p-6 rounded-xl border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-3">🆓</div>
              <h3 className="text-pink-300 font-semibold mb-2">FREE ACCESS</h3>
              <p className="text-xs text-gray-300">No cost to join the event</p>
            </div>
            <div className="bg-black/40 p-6 rounded-xl border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-3">☕</div>
              <h3 className="text-pink-300 font-semibold mb-2">REFRESHMENTS</h3>
              <p className="text-xs text-gray-300">Detective's fuel to keep you sharp</p>
            </div>
            <div className="bg-black/40 p-6 rounded-xl border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-3">🚌</div>
              <h3 className="text-pink-300 font-semibold mb-2">EASY ACCESS</h3>
              <p className="text-xs text-gray-300">Convenient transport available</p>
            </div>
            <div className="bg-black/40 p-6 rounded-xl border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-pink-300 font-semibold mb-2">EVIDENCE KIT</h3>
              <p className="text-xs text-gray-300">All tools you need provided</p>
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
          👥 Investigation Protocol 📋
        </h2>
        <ul className="text-sm leading-relaxed list-disc list-inside hover:scale-105 transition-transform duration-300 text-left max-w-xl mx-auto space-y-2">
          <li>Teams of 2-4 members required</li>
          <li>Cross-year & cross-college teams welcome</li>
          <li>Individual participation not allowed</li>
          <li>Only approved tools/resources permitted</li>
          <li>Specific tasks revealed during the event — no spoilers 🔒</li>
        </ul>
      </section>

      {/* Rewards */}
      <section
        id="rewards"
        className="py-24 px-5 max-w-4xl mx-auto text-center animate-fade-in-up relative z-20"
      >
        <h2 className="text-2xl mb-6 hover:text-[#ff1493] transition-colors duration-300">
          🏆 Case Rewards
        </h2>
        <ul className="text-sm leading-relaxed list-disc list-inside hover:scale-105 transition-transform duration-300 text-left max-w-xl mx-auto space-y-2">
          <li>Impact Certificates for all participants 🎖️</li>
          <li>Special recognition for teams whose work survives the handover 🥇</li>
          <li>Hall of Fame entry for the most resilient, clear, and clever teams 🌟</li>
        </ul>
      </section>

      {/* Details */}
      <section
        id="details"
        className="py-24 px-5 max-w-6xl mx-auto text-center animate-fade-in-up relative z-20"
      >
        <div className="bg-gradient-to-br from-black/60 to-pink-900/20 rounded-3xl p-8 md:p-12 border border-pink-500/20 backdrop-blur-sm shadow-2xl shadow-pink-500/10">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 hover:text-[#ff1493] transition-colors duration-300">
            📅 EVENT DETAILS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-pink-900/30 to-black/50 p-6 rounded-xl border border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
              <div className="text-3xl mb-3">📅</div>
              <div className="text-pink-300 font-semibold text-sm">DATE</div>
              <div className="text-white font-bold">24th February 2026</div>
            </div>
            <div className="bg-gradient-to-br from-pink-900/30 to-black/50 p-6 rounded-xl border border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
              <div className="text-3xl mb-3">⏰</div>
              <div className="text-pink-300 font-semibold text-sm">TIME</div>
              <div className="text-white font-bold">10:00 AM – 3:00 PM</div>
            </div>
            <div className="bg-gradient-to-br from-pink-900/30 to-black/50 p-6 rounded-xl border border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
              <div className="text-3xl mb-3">🏢</div>
              <div className="text-pink-300 font-semibold text-sm">VENUE</div>
              <div className="text-white font-bold text-sm">Chamber 3, Library Block</div>
            </div>
            <div className="bg-gradient-to-br from-pink-900/30 to-black/50 p-6 rounded-xl border border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
              <div className="text-3xl mb-3">⚡</div>
              <div className="text-pink-300 font-semibold text-sm">DURATION</div>
              <div className="text-white font-bold text-sm">5 Hours of Impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Message */}
      <section className="py-16 px-5 max-w-4xl mx-auto text-center animate-fade-in-up relative z-20">
        <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 rounded-2xl p-8 border border-pink-500/20">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-pink-300">👁️ CAN YOU LEAVE AN IMPACT?</h3>
          <p className="text-gray-300 text-sm md:text-base">
            Your work will be inherited. Your ideas will travel.<br />
            Will it thrive? Fail? Surprise? Only the next team knows.
          </p>
        </div>
      </section>

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
