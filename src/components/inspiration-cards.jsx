import React, { useState } from "react";

const leaders = [
  {
    name: "Dr. M. Regeena J. Murali",
    title: "Chairman",
    credentials: "B.Tech., M.B.A., Ph.D.",
    photo: "/leaders/Dr. M. Regeena J. Murali.jpeg",
    quote:
      "I appreciate the dedication and achievements of the students and faculty of the Department of Computer Science and Engineering.I wish them continued success and excellence in all their future endeavors.",
  },
  {
    name: "Dr. Shaleesha A. Stanley",
    title: "Dean of Academics",
    credentials: "M.Sc., M.Tech., Ph.D., D.Sc.",
    photo: "/leaders/Dr. Shaleesha A. Stanley.png",
    quote:
      "It is truly gratifying to witness the enthusiasm and dedication of the students and faculty of the Department of Computer Science and Engineering. Their creativity, teamwork, and commitment reflect the vibrant academic spirit and pursuit of excellence within the department.",
  },
  {
    name: "Dr. K. Senthil Kumar",
    title: "Principal",
    credentials: "M.E., Ph.D., FIE, MISHREA",
    photo: "/leaders/Dr. K. Senthil Kumar.png",
    quote:
      "It is inspiring to see the dedication of the students and faculty of the Department of Computer Science and Engineering. Their commitment to learning and innovation reflects the strong academic spirit of Jeppiaar Engineering College.",
  },
  {
    name: "Dr. J. Anitha Gnanaselvi",
    title: "Head of the Department – CSE",
    credentials: "M.E., Ph.D.",
    photo: "/leaders/Dr. J. Anitha Gnanaselvi.png",
    quote:
      "The field of Computer Science continues to shape innovation and solve modern challenges. I take great pride in the dedication of our faculty and students of the Department of Computer Science and Engineering.",
  },
];

const FlipCard = ({ leader }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-full h-80 cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      {/* Inner wrapper — this is what rotates */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.7s ease-in-out",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ── FRONT ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          className="rounded-2xl overflow-hidden border border-pink-500/20 shadow-lg shadow-pink-500/10 flex flex-col bg-black"
        >
          {/* Photo fills the top */}
          <div className="relative flex-1 overflow-hidden">
            <img
              src={leader.photo}
              alt={leader.name}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>

          {/* Name section at BOTTOM */}
          <div className="px-4 py-3 bg-black border-t border-pink-500/20 flex-shrink-0">
            <h3 className="text-white font-bold text-sm leading-tight">{leader.name}</h3>
            <p className="text-pink-300 text-xs font-medium mt-0.5">{leader.title}</p>
            <p className="text-white/40 text-xs mt-0.5">{leader.credentials}</p>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="rounded-2xl bg-gradient-to-br from-black to-pink-950/80 border border-pink-500/30 shadow-lg shadow-pink-500/20 flex flex-col justify-center items-center p-6"
        >
          {/* <div className="text-pink-500 text-5xl font-serif leading-none mb-3 opacity-60">"</div> */}

          <p className="text-white/90 text-sm leading-relaxed text-center italic">
            {leader.quote}
          </p>

          {/* <div className="text-pink-500 text-5xl font-serif leading-none mt-3 opacity-60 self-end">"</div> */}

          <div className="w-12 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent my-4" />

          {/* <p className="text-pink-300 text-xs font-semibold text-center">{leader.name}</p>
          <p className="text-white/40 text-xs text-center mt-0.5">{leader.title}</p> */}
        </div>
      </div>
    </div>
  );
};

export default function InspirationCards() {
  return (
    <section className="py-16 md:py-24 px-5 max-w-6xl mx-auto text-center relative z-20">
      {/* Section header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs mb-4">
          ✨ Leadership Speaks
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white hover:text-pink-400 transition-colors duration-300">
          Words of Inspiration
        </h2>
        <p className="text-white/50 text-sm mt-2">Hover over a card to reveal the message</p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {leaders.map((leader) => (
          <FlipCard key={leader.name} leader={leader} />
        ))}
      </div>
    </section>
  );
}
