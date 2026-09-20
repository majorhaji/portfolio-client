const projects = [
  { name: "NC News", description: "A full-stack discussion platform for exploring articles, joining conversations and voting on what matters.", stack: ["React", "Node.js", "Express", "PostgreSQL"], live: "https://fakeddit-nc-news.netlify.app", code: "https://github.com/majorhaji/nc-news" },
  { name: "Family Youth", description: "A community-focused wellbeing website built to support families and young people.", stack: ["Angular", "TypeScript", "SCSS"], code: "https://github.com/majorhaji/family-youth" },
  { name: "Stock Portfolio", description: "A personal finance app for tracking holdings and keeping up with the market.", stack: ["Python", "Flask", "React"], live: "https://pynance.netlify.app/" },
];

const Projects = () => (
  <section id="projects">
    <div className="section-heading">
      <p className="kicker">Selected work</p>
      <h2>Built with care, not just code.</h2>
      <p>Projects where product thinking, clean interfaces and reliable behaviour meet.</p>
    </div>
    <div className="project-grid">
      {projects.map((project, index) => <article className="project-card" key={project.name}>
        <span className="project-number">0{index + 1}</span>
        <h3>{project.name}</h3><p>{project.description}</p>
        <ul className="stack">{project.stack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
        <div className="project-links">{project.live && <a href={project.live} target="_blank" rel="noreferrer">Visit site ↗</a>}{project.code && <a href={project.code} target="_blank" rel="noreferrer">View code ↗</a>}</div>
      </article>)}
    </div>
  </section>
);

export default Projects;
