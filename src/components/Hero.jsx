import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";


export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 p-10 overflow-hidden">

      {/* 🌌 Particles Background */}
     

      {/* 🔥 Background Glow */}
      <div className="absolute w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full bottom-10 right-10"></div>

      {/* 🖼️ Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        {/* Glow ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-2xl opacity-40"></div>

        <img
          src="/profile.jpg"
          alt="profile"
          className="relative w-60 h-60 md:w-72 md:h-72 object-cover rounded-full border-4 border-white shadow-xl transition duration-300 hover:scale-110"
        />
      </motion.div>

      {/* ✨ Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          Hi, I'm <span className="text-blue-500">B Sreelatha</span>
        </h1>

        {/* 🔥 Typing Animation */}
        <h2 className="text-xl md:text-2xl text-gray-400 mb-4">
          <TypeAnimation
            sequence={[
              "Java Developer", 2000,
              "Web Developer", 2000,
              "Full Stack Developer", 2000,
              "Problem Solver", 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p className="text-gray-400 mb-6 max-w-md">
          I build scalable web applications and solve real-world problems.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center md:justify-start">
          <a href="/resume.pdf" download>
             <button className="bg-blue-500 hover:bg-blue-600 transition px-5 py-2 rounded shadow-lg hover:shadow-blue-500/40">
                  Download Resume
             </button>
          </a>

          <a href="#projects">
            <button className="border border-white px-5 py-2 rounded hover:bg-white hover:text-black transition">
              View Projects
            </button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}