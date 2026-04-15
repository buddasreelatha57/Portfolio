export default function Certifications() {
  const certs = [
    {
      title: "Java Full Stack Development",
      org: "Jspiders",
      year: "2025",
    },
    {
      title: "Web Development Intern",
      org: "System Tron",
      year: "2023",
    },
    
  ];

  return (
    <section id="certifications" className="py-10 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {certs.map((c, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-lg p-4 rounded-lg border border-white/20 transition hover:scale-105 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">
                {c.title}
              </h3>

              <p className="text-gray-400">
                {c.org}
              </p>

              <p className="text-sm text-gray-500">
                {c.year}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}