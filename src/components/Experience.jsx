import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">
        Experience
      </h2>

      <div className="max-w-5xl mx-auto">
        <div className="bg-gray-800 rounded-2xl shadow-lg p-8  transition duration-300">

          <div className="flex items-center gap-4 mb-4">
            <div className="bg-cyan-500 p-3 rounded-full">
              <FaBriefcase className="text-white text-xl" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">
                Software Developer
              </h3>
              <p className="text-cyan-400 text-lg">
                Parmy Technologies
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-400 mb-6">
            <FaCalendarAlt />
            <span>October 2024 – Present • 1 Year 10 Months</span>
          </div>

          <ul className="space-y-3 text-gray-300">
            <li>✔ Developed and maintained backend applications using Java and Python.</li>

            <li>✔ Designed and implemented RESTful APIs for scalable web applications.</li>

            <li>✔ Worked with MySQL and MongoDB for database design and management.</li>

            <li>✔ Collaborated with cross-functional teams to develop, test, and deploy software solutions.</li>

            <li>✔ Debugged, optimized, and enhanced application performance and reliability.</li>

            <li>✔ Used Git for version control and followed software development best practices.</li>

            <li>✔ Gained experience with React while contributing to full-stack application development.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}