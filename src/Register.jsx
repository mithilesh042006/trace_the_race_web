import React, { useState } from "react";
import BackgroundComponent from "./components/background-snippets-noise-effect11";
import { Button } from "./components/ui/button";

export default function RegisterPage({ onNavigate }) {
  const [teamSize, setTeamSize] = useState("1");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({ teamSize: "1" });

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

    if (!teamSize) {
      newErrors.teamSize = "Please select team size";
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
          className="member-section border border-dashed border-white p-2 md:p-3 lg:p-4 mb-3 md:mb-4 lg:mb-5 rounded-lg"
        >
          <h3 className="text-xs md:text-sm mb-2 md:mb-3 lg:mb-4 text-center text-pink-300">
            Detective {i}
          </h3>

          {/* Name */}
          <label htmlFor={`memberName${i}`} className="block text-xs mb-2">
            Name
          </label>
          <input
            type="text"
            id={`memberName${i}`}
            name={`memberName${i}`}
            required
            value={formData[`memberName${i}`] || ""}
            onChange={handleInputChange}
            className={`w-full p-2 md:p-3 mb-2 bg-white/10 border rounded-lg text-xs md:text-sm text-white placeholder-white/60 outline-none transition-colors ${
              errors[`memberName${i}`]
                ? "border-red-500 focus:border-red-500"
                : "border-white/20 focus:border-[#ff1493] focus:ring-1 focus:ring-[#ff1493]"
            }`}
            placeholder="Enter full name"
          />
          {errors[`memberName${i}`] && (
            <p className="text-red-400 text-xs mb-4">
              {errors[`memberName${i}`]}
            </p>
          )}

          {/* Contact */}
          <label htmlFor={`memberContact${i}`} className="block text-xs mb-2">
            Contact Number
          </label>
          <input
            type="text"
            id={`memberContact${i}`}
            name={`memberContact${i}`}
            required
            value={formData[`memberContact${i}`] || ""}
            onChange={handleInputChange}
            className={`w-full p-2 md:p-3 mb-2 bg-white/10 border rounded-lg text-xs md:text-sm text-white placeholder-white/60 outline-none transition-colors ${
              errors[`memberContact${i}`]
                ? "border-red-500 focus:border-red-500"
                : "border-white/20 focus:border-[#ff1493] focus:ring-1 focus:ring-[#ff1493]"
            }`}
            placeholder="Enter contact number"
          />
          {errors[`memberContact${i}`] && (
            <p className="text-red-400 text-xs mb-4">
              {errors[`memberContact${i}`]}
            </p>
          )}

          {/* Email */}
          <label htmlFor={`memberEmail${i}`} className="block text-xs mb-2">
            Email ID
          </label>
          <input
            type="email"
            id={`memberEmail${i}`}
            name={`memberEmail${i}`}
            required
            value={formData[`memberEmail${i}`] || ""}
            onChange={handleInputChange}
            className={`w-full p-2 md:p-3 mb-2 bg-white/10 border rounded-lg text-xs md:text-sm text-white placeholder-white/60 outline-none transition-colors ${
              errors[`memberEmail${i}`]
                ? "border-red-500 focus:border-red-500"
                : "border-white/20 focus:border-[#ff1493] focus:ring-1 focus:ring-[#ff1493]"
            }`}
            placeholder="Enter email address"
          />
          {errors[`memberEmail${i}`] && (
            <p className="text-red-400 text-xs mb-4">
              {errors[`memberEmail${i}`]}
            </p>
          )}

          {/* College */}
          <label htmlFor={`memberCollege${i}`} className="block text-xs mb-2">
            College Name
          </label>
          <input
            type="text"
            id={`memberCollege${i}`}
            name={`memberCollege${i}`}
            required
            value={formData[`memberCollege${i}`] || ""}
            onChange={handleInputChange}
            className={`w-full p-2 md:p-3 mb-2 bg-white/10 border rounded-lg text-xs md:text-sm text-white placeholder-white/60 outline-none transition-colors ${
              errors[`memberCollege${i}`]
                ? "border-red-500 focus:border-red-500"
                : "border-white/20 focus:border-[#ff1493] focus:ring-1 focus:ring-[#ff1493]"
            }`}
            placeholder="Enter college name"
          />
          {errors[`memberCollege${i}`] && (
            <p className="text-red-400 text-xs mb-4">
              {errors[`memberCollege${i}`]}
            </p>
          )}
        </div>
      );
    }
    return members;
  };

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
      <nav className="fixed top-0 w-full bg-black/70 flex justify-between items-center py-2 md:py-4 z-40 backdrop-blur-lg border-b border-pink-500/20 shadow-lg shadow-pink-500/10 px-3 md:px-4">
        <div className="flex items-center h-10">
          <div className="w-8 md:w-12 h-8 md:h-12 bg-gradient-to-br from-pink-500 to-pink-700 rounded-xl flex items-center justify-center mr-3 md:mr-4 shadow-lg shadow-pink-500/30">
            <img
              src="/logo.png"
              alt="Trace the Race Logo"
              className="h-12 w-auto mr-2 hover:scale-110 transition-transform duration-300 ml-2"
            />
          </div>
          <div className="text-pink-400 font-bold text-lg md:text-2xl tracking-wide">TRACE THE RACE</div>
        </div>
        <div className="flex gap-1 md:gap-5">
          <button
            onClick={() => onNavigate?.("home")}
            className="text-white text-xs md:text-sm px-3 md:px-4 py-2 md:py-2 hover:text-[#ff1493] transition-all duration-300 hover:scale-105 bg-gradient-to-r from-pink-900/30 to-transparent border border-pink-500/20 rounded-lg backdrop-blur-sm"
          >
            🏠 HOME
          </button>
        </div>
      </nav>

      {/* Register Form */}
      <div
        className="form-container max-w-5xl mx-auto mt-20 md:mt-24 lg:mt-28 mb-8 md:mb-12 bg-gradient-to-br from-black/80 to-pink-900/20 p-6 md:p-8 lg:p-12 rounded-3xl shadow-2xl shadow-pink-500/20 border border-pink-500/20 backdrop-blur-sm relative z-20 mx-3 md:mx-auto"
        id="register"
      >
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-500/30">
            <span className="text-4xl">🕵️‍♂️</span>
          </div>
          <h1 className="text-lg md:text-xl lg:text-3xl font-bold mb-4 text-shadow-lg">
            🔍 DETECTIVE RECRUITMENT FORM
          </h1>
          <p className="text-pink-300 text-sm md:text-base mb-6">
            Join the elite debugging task force. Your mission awaits.
          </p>
        </div>

        {/* REAL FORM (Netlify will process this) */}
        <form
          name="register"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/success.html"
          className="space-y-4 md:space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            if (validateForm()) {
              // If validation passes, submit the form manually
              const form = e.target;
              const formData = new FormData(form);
              
              fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
              })
              .then(() => {
                // Redirect to success page
                window.location.href = '/success.html';
              })
              .catch((error) => {
                console.error('Form submission error:', error);
                alert('There was an error submitting your registration. Please try again.');
              });
            }
          }}
        netlify>
          {/* Required hidden fields */}
          <input type="hidden" name="form-name" value="register" />
          <input type="hidden" name="bot-field" />

          {/* Team Name */}
          <div>
            <label htmlFor="teamName" className="block text-xs mb-2">
              Detective Team Name
            </label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              required
              value={formData.teamName || ""}
              onChange={handleInputChange}
              className={`w-full p-3 md:p-4 bg-white/10 border rounded-lg text-xs md:text-sm text-white placeholder-white/60 outline-none transition-colors ${
                errors.teamName
                  ? "border-red-500 focus:border-red-500"
                  : "border-white/20 focus:border-[#ff1493] focus:ring-1 focus:ring-[#ff1493]"
              }`}
              placeholder="Enter detective team name"
            />
            {errors.teamName && (
              <p className="text-red-400 text-xs mt-1">{errors.teamName}</p>
            )}
          </div>

          {/* Team Size */}
          <div>
            <label htmlFor="teamSize" className="block text-xs mb-2">
              Detective Team Size
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
              className={`w-full p-3 md:p-4 bg-white/10 border rounded-lg text-xs md:text-sm text-white outline-none transition-colors ${
                errors.teamSize
                  ? "border-red-500 focus:border-red-500"
                  : "border-white/20 focus:border-[#ff1493] focus:ring-1 focus:ring-[#ff1493]"
              }`}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            {errors.teamSize && (
              <p className="text-red-400 text-xs mt-1">{errors.teamSize}</p>
            )}
          </div>

          <div id="membersContainer">{renderMemberFields()}</div>

          <Button
            type="submit"
            className="w-full py-4 md:py-5 bg-gradient-to-r from-[#ff1493] to-[#800040] hover:from-[#800040] hover:to-[#ff1493] text-white font-bold rounded-xl transition-all duration-300 text-sm md:text-base shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105 border border-pink-500/30"
          >
            <span className="mr-2">🕵️</span> SUBMIT INVESTIGATION REQUEST
          </Button>
        </form>
      </div>
    </>
  );
}
