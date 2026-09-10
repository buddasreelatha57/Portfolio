export default function Projects() {
  const projects = {
    frontend: [
      {
        title: "Luxury Beauty Brand",
        desc: "A responsive beauty artist frontend built based on a Figma design.",
        image: "/projects/FigmaMakeApp.png",
        github: "https://github.com/buddasreelatha57/luxury_beauty_brand",
        live: "https://luxurybeautybrands.vercel.app/",
      },
      {
        title: "Banana Club Clone",
        desc: "A responsive landing page built with HTML, CSS, and JavaScript.",
        image: "/projects/Banana.png",
        github: "https://github.com/buddasreelatha57/Banana-club",
        live: null,
      },
      {
        title: "Kpop",
        desc: "A music-focused frontend project built with HTML, CSS, and JavaScript.",
        image: "/projects/Kpop.png",
        github: null,
        live: null,
      },
      {
        title: "Portfolio",
        desc: "This portfolio website built with React and Tailwind CSS.",
        image: "/projects/portfolio.png",
        github: null,
        live: "https://portfolio-peach-xi-858ambkyku.vercel.app/",
      },
    ],
    fullstack: [
      {
        title: "Job Hunt",
        desc: "An AI-assisted job search platform with resume screening and ChatGPT API integration.",
        image: "/projects/job_hunt.png",
        github: "https://github.com/buddasreelatha57/Job_Hunt",
        live: "https://job-hunt-mu-one.vercel.app/",
      },
      {
        title: "FoodTech",
        desc: "An academic project exploring Python and blockchain technologies.",
        image: "/projects/foodtech.png",
        github: "https://github.com/buddasreelatha57/FoodTech",
        live: "#",
      },
      {
        title: "Designing Secure and Efficient Bio-metric",
        desc: "An academic machine-learning project focused on secure biometric systems.",
        image: "/projects/Secure.png",
        github: "https://github.com/buddasreelatha57/Designing-Secure-and-Efficient-Bio-metric",
        live: "https://designing-secure-and-efficient-bio-metric.onrender.com/",
      },
      {
        title: "Parmy Technologies",
        desc: "A company website built with React and Java.",
        image: "/projects/parmy.png",
        live: "https://parmytechnologies.com/",
      },
      {
        title: "Kindbridge",
        desc: "A donations platform built with React and Node.js.",
        image: "/projects/DLConnect.png",
        github: "https://github.com/buddasreelatha57/donations",
        live: "https://kindbridgepage.vercel.app/",
      },
    ],
  };

  const renderProjects = (list) => (
    <div className="grid md:grid-cols-2 gap-6 mb-10">
      {list.map((p) => (
        <div
          key={p.title}
          className="bg-white/10 backdrop-blur-lg p-4 rounded-lg border border-white/20 transition hover:scale-105 hover:shadow-lg"
        >
          <img
            src={p.image}
            alt={p.title}
            className="rounded mb-4 w-full h-40 object-cover"
          />

          <h3 className="text-xl font-semibold">{p.title}</h3>
          <p className="text-gray-400 mb-3">{p.desc}</p>

          <div className="flex gap-3">
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-500 hover:bg-blue-600 transition px-3 py-1 rounded shadow hover:shadow-blue-500/40"
              >
                GitHub
              </a>
            )}

            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="border border-white px-3 py-1 rounded transition hover:bg-white hover:text-black"
              >
                Live
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="projects" className="py-10 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-8 text-center">
          Projects
        </h2>

        <h3 className="text-2xl font-semibold mb-4 text-blue-400">
          Frontend
        </h3>
        {renderProjects(projects.frontend)}

        <h3 className="text-2xl font-semibold mb-4 text-green-400">
          Full Stack
        </h3>
        {renderProjects(projects.fullstack)}

      </div>
    </section>
  );
}