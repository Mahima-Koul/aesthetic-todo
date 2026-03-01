import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md
                    bg-[#14110f]/90
                    border-b border-amber-900/30
                    shadow-[0_8px_30px_rgba(0,0,0,0.6)]">

      <div className="max-w-6xl mx-auto px-8 py-5 flex flex-col items-center">

        <h1 className="font-[Cinzel] text-3xl tracking-[0.2em] text-amber-200">
          Carpe Noctem
        </h1>

        <p className="mt-2 text-xs tracking-[0.3em] uppercase text-amber-400/60 italic">
          seize the quiet hours
        </p>

        <div className="mt-4 w-24 h-px bg-linear-to-r from-transparent via-amber-800/50 to-transparent"></div>

      </div>
    </nav>
  );
};

export default Navbar;