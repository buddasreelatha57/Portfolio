import {
  FaJava,
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";

import { SiJavascript, SiMysql, SiMongodb, SiAnthropic, SiGithubcopilot } from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-6xl" /> },
      { name: "React", icon: <FaReact className="text-cyan-400 text-6xl" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Java", icon: <FaJava className="text-red-500 text-6xl" /> },
      { name: "Python", icon: <FaPython className="text-yellow-500 text-6xl" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-6xl" /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-blue-600 text-6xl" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-6xl" /> },
    ],
  },
{
  title: "AI Tools",
  skills: [
    {
      name: "ChatGPT",
      icon: <TbBrandOpenai className="text-green-500 text-6xl" />,
    },
    {
      name: "Claude",
      icon: <SiAnthropic className="text-orange-400 text-6xl" />,
    },
    {
      name: "GitHub Copilot",
      icon: <SiGithubcopilot className="text-gray-100 text-6xl" />,
    },
  ],
},
];


export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">
        My Skills
      </h2>

      <div className="max-w-6xl mx-auto space-y-12">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold mb-6 border-b border-gray-600 pb-2">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="bg-gray-800 rounded-xl p-6 flex flex-col items-center justify-center hover:scale-105 transition duration-300 shadow-lg"
                >
                  {/* Show image if available, otherwise show React icon */}
                  {skill.image ? (
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-16 h-16 object-contain"
                    />
                  ) : (
                    skill.icon
                  )}

                  <p className="mt-4 text-lg font-medium text-center">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}