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
         I am a Software Developer with 1 year and 10 months of professional experiencenat Parmy Technologies , specializing in Java Full Stack development and Python. I have experience designing, developing, and maintaining scalable applications, building RESTful APIs, integrating databases, and delivering reliable software solutions. I enjoy solving complex technical challenges, writing clean and efficient code, and collaborating with teams to deliver high-quality products. Alongside my backend expertise, I continue to strengthen my full-stack development skills with **React**, while building impactful and user-focused applications.

        </p>
      </motion.div>

    </section>
  );
}