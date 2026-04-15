const skills = [
  { name: "Java", level: "80%" },
  { name: "React", level: "75%" },
  { name: "JavaScript", level: "85%" },
  { name: "HTML/CSS", level: "90%" },
];

export default function Skills() {
  return (
    <section className="min-h-screen p-10" id="skills">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {skills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>

            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-blue-500 h-3 rounded-full transition-all duration-500"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}