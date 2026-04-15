import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center p-10">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>

        <p className="text-gray-300">
          I am a passionate developer skilled in Java, Python and React. I enjoy building
          scalable applications and solving real-world problems. Currently focused
          on improving my full-stack development skills and building impactful projects.
        </p>
      </motion.div>

    </section>
  );
}