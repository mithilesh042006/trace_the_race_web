import React, { useState } from "react";
import BackgroundComponent from "./components/background-snippets-noise-effect11";
import { Button } from "./components/ui/button";

export default function RegisterPage({ onNavigate }) {
  const [teamSize, setTeamSize] = useState("2");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({ teamSize: "2" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTeamSizeChange = (e) => {
    setTeamSize(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.teamName?.trim()) {
      newErrors.teamName = "Team name is required";
    } else if (formData.teamName.trim().length < 3) {
      newErrors.teamName = "Team name must be at least 3 characters";
    }

    if (!teamSize || parseInt(teamSize, 10) < 2 || parseInt(teamSize, 10) > 3) {
      newErrors.teamSize = "Team must have 2-3 members";
    }

    for (let i = 1; i <= parseInt(teamSize, 10); i++) {
      const name = formData[`memberName${i}`];
      const contact = formData[`memberContact${i}`];
      const email = formData[`memberEmail${i}`];
      const college = formData[`memberCollege${i}`];

      if (!name?.trim()) {
        newErrors[`memberName${i}`] = "Name is required";
      }
      if (!contact?.trim()) {
        newErrors[`memberContact${i}`] = "Contact number is required";
      } else if (!/^[6-9]\d{9}$/.test(contact.trim())) {
        newErrors[`memberContact${i}`] = "Enter valid 10-digit mobile number";
      }
      if (!email?.trim()) {
        newErrors[`memberEmail${i}`] = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        newErrors[`memberEmail${i}`] = "Enter valid email address";
      }
      if (!college?.trim()) {
        newErrors[`memberCollege${i}`] = "College name is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const renderMemberFields = () => {
    const members = [];
    for (let i = 1; i <= parseInt(teamSize, 10); i++) {
      members.push(
        <div
          key={i}
          className="relative group"
        >
          {/* Glowing border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600/50 to-purple-600/50 rounded-2xl blur opacity-15 group-hover:opacity-25 transition duration-500"></div>

          <div className="relative bg-black/60 backdrop-blur-xl p-5 md:p-6 rounded-2xl border border-white/10">
            {/* Member badge */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500/80 to-purple-600/80 flex items-center justify-center text-lg font-bold shadow-md shadow-pink-500/15">
                {i}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Detective #{i}</h3>
                <p className="text-xs text-pink-300/70">Team Member Details</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor={`memberName${i}`} className="text-xs font-medium text-pink-200/80 flex items-center gap-1.5">
                  <span>👤</span> Full Name
                </label>
                <input
                  type="text"
                  id={`memberName${i}`}
                  name={`memberName${i}`}
                  required
                  value={formData[`memberName${i}`] || ""}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/5 border-2 rounded-xl text-sm text-white placeholder-white/40 outline-none transition-all duration-300 hover:bg-white/10 ${errors[`memberName${i}`]
                    ? "border-red-500/50 focus:border-red-500"
                    : "border-white/10 focus:border-pink-500 focus:shadow-lg focus:shadow-pink-500/20"
                    }`}
                  placeholder="Enter full name"
                />
                {errors[`memberName${i}`] && (
                  <p className="text-red-400 text-xs flex items-center gap-1">
                    <span>⚠️</span> {errors[`memberName${i}`]}
                  </p>
                )}
              </div>

              {/* Contact */}
              <div className="space-y-1.5">
                <label htmlFor={`memberContact${i}`} className="text-xs font-medium text-pink-200/80 flex items-center gap-1.5">
                  <span>📱</span> Contact Number
                </label>
                <input
                  type="text"
                  id={`memberContact${i}`}
                  name={`memberContact${i}`}
                  required
                  value={formData[`memberContact${i}`] || ""}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/5 border-2 rounded-xl text-sm text-white placeholder-white/40 outline-none transition-all duration-300 hover:bg-white/10 ${errors[`memberContact${i}`]
                    ? "border-red-500/50 focus:border-red-500"
                    : "border-white/10 focus:border-pink-500 focus:shadow-lg focus:shadow-pink-500/20"
                    }`}
                  placeholder="10-digit mobile number"
                />
                {errors[`memberContact${i}`] && (
                  <p className="text-red-400 text-xs flex items-center gap-1">
                    <span>⚠️</span> {errors[`memberContact${i}`]}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor={`memberEmail${i}`} className="text-xs font-medium text-pink-200/80 flex items-center gap-1.5">
                  <span>✉️</span> Email Address
                </label>
                <input
                  type="email"
                  id={`memberEmail${i}`}
                  name={`memberEmail${i}`}
                  required
                  value={formData[`memberEmail${i}`] || ""}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/5 border-2 rounded-xl text-sm text-white placeholder-white/40 outline-none transition-all duration-300 hover:bg-white/10 ${errors[`memberEmail${i}`]
                    ? "border-red-500/50 focus:border-red-500"
                    : "border-white/10 focus:border-pink-500 focus:shadow-lg focus:shadow-pink-500/20"
                    }`}
                  placeholder="your@email.com"
                />
                {errors[`memberEmail${i}`] && (
                  <p className="text-red-400 text-xs flex items-center gap-1">
                    <span>⚠️</span> {errors[`memberEmail${i}`]}
                  </p>
                )}
              </div>

              {/* College */}
              <div className="space-y-1.5">
                <label htmlFor={`memberCollege${i}`} className="text-xs font-medium text-pink-200/80 flex items-center gap-1.5">
                  <span>🎓</span> College Name
                </label>
                <input
                  type="text"
                  id={`memberCollege${i}`}
                  name={`memberCollege${i}`}
                  required
                  value={formData[`memberCollege${i}`] || ""}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/5 border-2 rounded-xl text-sm text-white placeholder-white/40 outline-none transition-all duration-300 hover:bg-white/10 ${errors[`memberCollege${i}`]
                    ? "border-red-500/50 focus:border-red-500"
                    : "border-white/10 focus:border-pink-500 focus:shadow-lg focus:shadow-pink-500/20"
                    }`}
                  placeholder="Your college name"
                />
                {errors[`memberCollege${i}`] && (
                  <p className="text-red-400 text-xs flex items-center gap-1">
                    <span>⚠️</span> {errors[`memberCollege${i}`]}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return members;
  };

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

      {/* Navbar - Same as Home Page */}
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
              alt="Trace the Race Logo"
              className="h-12 w-auto mr-2 hover:scale-110 transition-transform duration-300"
            />
            <div className="text-pink-400 font-bold text-2xl tracking-wide">TRACE THE RACE</div>
          </div>
          <div className="inline-flex cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-pink-900/50 to-black/50 border border-pink-500/30 backdrop-blur-sm">
            <button
              onClick={() => onNavigate?.("home")}
              className="inline-flex rounded-full text-center group items-center justify-center bg-gradient-to-tr from-[#ff1493]/30 via-[#800040]/40 to-transparent text-white border-[#ff1493]/60 border-[1px] hover:bg-gradient-to-tr hover:from-[#ff1493]/40 hover:via-[#800040]/50 hover:to-transparent transition-all py-3 px-8 shadow-lg shadow-pink-500/20 h-10"
            >
              <span className="mr-2">🏠</span> BACK TO HOME
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="min-h-screen pt-24 md:pt-28 pb-12 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/5 border border-pink-500/15 text-pink-300/80 text-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
              Registration Open
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">
              Join The Investigation
            </h1>
            <p className="text-white/60 text-sm md:text-base max-w-lg mx-auto">
              Assemble your detective squad and register for the ultimate debugging challenge
            </p>
          </div>

          {/* Main Card */}
          <div className="relative">
            {/* Card glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600/40 via-purple-600/40 to-pink-600/40 rounded-3xl blur-xl opacity-10"></div>

            <div className="relative bg-black/40 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden">
              {/* Card header */}
              <div className="bg-gradient-to-r from-pink-900/20 via-purple-900/20 to-pink-900/20 px-6 md:px-10 py-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/70 to-purple-600/70 flex items-center justify-center shadow-lg shadow-pink-500/15">
                    <span className="text-2xl">🕵️</span>
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white">Detective Recruitment Form</h2>
                    <p className="text-pink-300/60 text-sm">Complete all fields to join the mission</p>
                  </div>
                </div>
              </div>

              {/* Form content */}
              <div className="p-6 md:p-10">
                <form
                  name="register"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  action="/success.html"
                  className="space-y-8"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (validateForm()) {
                      setIsSubmitting(true);
                      const form = e.target;
                      const formDataObj = new FormData(form);

                      fetch('/', {
                        method: 'POST',
                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                        body: new URLSearchParams(formDataObj).toString()
                      })
                        .then(() => {
                          window.location.href = '/success.html';
                        })
                        .catch((error) => {
                          console.error('Form submission error:', error);
                          setIsSubmitting(false);
                          alert('There was an error submitting your registration. Please try again.');
                        });
                    }
                  }}
                  netlify
                >
                  {/* Required hidden fields */}
                  <input type="hidden" name="form-name" value="register" />
                  <input type="hidden" name="bot-field" />

                  {/* Team Info Section */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center">
                        <span>📋</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white">Team Information</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Team Name */}
                      <div className="space-y-2">
                        <label htmlFor="teamName" className="text-sm font-medium text-pink-200/80 flex items-center gap-2">
                          <span>🏷️</span> Team Name
                        </label>
                        <input
                          type="text"
                          id="teamName"
                          name="teamName"
                          required
                          value={formData.teamName || ""}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3.5 bg-white/5 border-2 rounded-xl text-sm text-white placeholder-white/40 outline-none transition-all duration-300 hover:bg-white/10 ${errors.teamName
                            ? "border-red-500/50 focus:border-red-500"
                            : "border-white/10 focus:border-pink-500 focus:shadow-lg focus:shadow-pink-500/20"
                            }`}
                          placeholder="Enter your detective squad name"
                        />
                        {errors.teamName && (
                          <p className="text-red-400 text-xs flex items-center gap-1">
                            <span>⚠️</span> {errors.teamName}
                          </p>
                        )}
                      </div>

                      {/* Team Size */}
                      <div className="space-y-2">
                        <label htmlFor="teamSize" className="text-sm font-medium text-pink-200/80 flex items-center gap-2">
                          <span>👥</span> Team Size
                        </label>
                        <select
                          id="teamSize"
                          name="teamSize"
                          required
                          value={teamSize}
                          onChange={(e) => {
                            handleTeamSizeChange(e);
                            handleInputChange(e);
                          }}
                          className={`w-full px-4 py-3.5 bg-white/5 border-2 rounded-xl text-sm text-white outline-none transition-all duration-300 hover:bg-white/10 cursor-pointer ${errors.teamSize
                            ? "border-red-500/50 focus:border-red-500"
                            : "border-white/10 focus:border-pink-500 focus:shadow-lg focus:shadow-pink-500/20"
                            }`}
                        >
                          <option value="2" className="bg-gray-900">2 Detectives</option>
                          <option value="3" className="bg-gray-900">3 Detectives</option>
                        </select>
                        {errors.teamSize && (
                          <p className="text-red-400 text-xs flex items-center gap-1">
                            <span>⚠️</span> {errors.teamSize}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    <span className="text-white/40 text-xs">TEAM MEMBERS</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>

                  {/* Member Cards */}
                  <div className="space-y-6">
                    {renderMemberFields()}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-gradient-to-r from-pink-600/90 via-purple-600/90 to-pink-600/90 hover:from-pink-500 hover:via-purple-500 hover:to-pink-500 text-white font-bold rounded-2xl transition-all duration-500 text-base shadow-lg shadow-pink-500/15 hover:shadow-pink-500/25 hover:scale-[1.02] border-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                          Submitting...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <span>�</span> Submit Registration
                        </span>
                      )}
                    </Button>
                  </div>

                  {/* Footer note */}
                  <p className="text-center text-white/40 text-xs">
                    By registering, you agree to participate in the Trace The Race debugging competition
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom info cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 text-center">
              <div className="text-2xl mb-2">📅</div>
              <div className="text-xs text-white/60">Date</div>
              <div className="text-sm font-semibold text-white">Sept 25, 2025</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 text-center">
              <div className="text-2xl mb-2">⏰</div>
              <div className="text-xs text-white/60">Time</div>
              <div className="text-sm font-semibold text-white">11:00 AM</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 text-center">
              <div className="text-2xl mb-2">📍</div>
              <div className="text-xs text-white/60">Venue</div>
              <div className="text-sm font-semibold text-white">Chamber 3</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 text-center">
              <div className="text-2xl mb-2">🎫</div>
              <div className="text-xs text-white/60">Entry</div>
              <div className="text-sm font-semibold text-green-400">FREE</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
