export default function Projects() {
  const projects = {
    frontend: [
      {
        title: "Banana Club Clone",
        desc: "Personal project built with Html, Css and Javascript",
        image: "/projects/Banana.png",
        github: "https://github.com/buddasreelatha57/Banana-club",
        live: "#",
      },
      {
        title: "Kpop",
        desc: "Personal project built with Html, Css and Javascript",
        image: "/projects/Kpop.png",
        github: "https://github.com/yourusername/portfolio",
        live: "#",
      },
      {
        title: "portfolio",
        desc: "Personal portfolio built with React",
        image: "/projects/portfolio.png",
        github: "https://portfolio-peach-xi-858ambkyku.vercel.app/",
        live: "#",
      },
    ],
    fullstack: [
      {
        title: "DL Connect Web Aplication",
        desc: "part time work job portal for Daily Labour built with java and React",
        image: "/projects/DLConnect.png",
        github: "https://github.com/yourusername/pastebin",
        live: "#",
      },
      {
        title: "FoodTech",
        desc: "Academic project built with Python and Block chain",
        image: "/projects/foodtech.png",
        github: "https://github.com/buddasreelatha57/FoodTech",
        live: "#",
      },
      {
        title: "Designing Secure and Efficient Bio-metric",
        desc: "Academic project built with Python and ML",
        image: "/projects/Secure.png",
        github: "https://github.com/buddasreelatha57/FoodTech",
        live: "#",
      },
    ],
  };

  const renderProjects = (list) => (
    <div className="grid md:grid-cols-2 gap-6 mb-10">
      {list.map((p, i) => (
        <div
          key={i}
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
            <a href={p.github} target="_blank">
              <button className="bg-blue-500 hover:bg-blue-600 transition px-3 py-1 rounded shadow hover:shadow-blue-500/40">
                GitHub
              </button>
            </a>

            <a href={p.live} target="_blank">
              <button className="border border-white px-3 py-1 rounded transition hover:bg-white hover:text-black">
                Live
              </button>
            </a>
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

        {/* 🎨 Frontend */}
        <h3 className="text-2xl font-semibold mb-4 text-blue-400">
          Frontend
        </h3>
        {renderProjects(projects.frontend)}

        {/* 🚀 Full Stack */}
        <h3 className="text-2xl font-semibold mb-4 text-green-400">
          Full Stack
        </h3>
        {renderProjects(projects.fullstack)}

      </div>
    </section>
  );
}