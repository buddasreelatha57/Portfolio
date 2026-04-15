import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav className="fixed w-full z-50 overflow-hidden">

      {/* 🔥 Background Ellipses */}
      <div className="absolute w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full -top-20 -left-20"></div>
      <div className="absolute w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full -top-20 -right-20"></div>

      {/* Navbar Content */}
      <div className="relative bg-white/10 dark:bg-black/40 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

          {/* Profile + Name */}
          <div className="flex items-center gap-3">
            <img
              src="/profile.jpg"
              alt="profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-white"
            />
            <h1 className="text-lg font-bold text-black dark:text-white">
              B Sreelatha
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-black dark:text-white">
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#skills" className="hover:text-blue-500">Skills</a>
            <a href="#certifications" className="hover:text-blue-500">Certifications</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="px-3 py-1 rounded bg-gray-300 dark:bg-gray-700 text-sm"
            >
              {dark ? "☀️" : "🌙"}
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-black dark:text-white text-xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 pb-4 text-black dark:text-white">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}