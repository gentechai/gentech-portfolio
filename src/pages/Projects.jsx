import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import projects from "../data/projects_detail"
import { useScrollReveal } from "../hooks/useScrollReveal"

function ProjectCard({ p, i }) {
  const [ref, visible] = useScrollReveal()


  return (
    <div
      ref={ref}
      className={`project-card-detailed reveal delay-${(i % 3) + 1} ${visible ? "active" : ""}`}
    >
      <div className="project-image">
        <img src={p.image} alt={p.title} />
        <div className="project-overlay">
          <button
            className="btn details-btn"
            onClick={() => (window.location.hash = `#/project/${i}`)}
          >
            View Full Details
          </button>
        </div>
      </div>

      <div className="project-body">
        <h3>{p.title}</h3>
        <p className="project-description">{p.description}</p>

        <div className="project-meta">
          <div className="tech-stack">
            <h4>Tech Stack:</h4>
            <div className="tech-tags">
              {p.technologies.slice(0, 5).map((t, idx) => (
                <span key={idx} className="tech-tag">{t}</span>
              ))}
              {p.technologies.length > 5 && (
                <span className="tech-tag ellipsis">+{p.technologies.length - 5}</span>
              )}
            </div>
          </div>
        </div>

        <div className="project-links">
          {p.live && (
            <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-small live">
              <i className="fas fa-external-link-alt"></i> Live
            </a>
          )}
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-small github">
              <i className="fab fa-github"></i> Code
            </a>
          )}
          {p.video && (
            <a href={p.video} target="_blank" rel="noreferrer" className="btn btn-small demo">
              <i className="fas fa-play"></i> Demo
            </a>
          )}
          <button
            className="btn btn-small details"
            onClick={() => (window.location.hash = `#/project/${i}`)}
          >
            <i className="fas fa-arrow-right"></i> Details
          </button>
        </div>
      </div>
    </div>
  )
}

function ProjectsPage() {
  const [filter, setFilter] = useState("all")

  // Extract unique technologies
  const allTechs = [...new Set(projects.flatMap(p => p.technologies))].sort()
  const techs = ["all", ...allTechs]

  // Filter projects by technology
  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.technologies.includes(filter))

  return (
    <>
      <Navbar />
      <section className="projects-page">
        <div className="container">
          {/* PAGE HEADER */}
          <div className="page-header">
            <h1>Our Work & Projects</h1>
            <p>Showcasing our latest AI-powered solutions, integrations, and innovative systems</p>
          </div>

          {/* STATS */}
          <div className="projects-stats">
            <div className="stat-item">
              <h3>{projects.length}+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="stat-item">
              <h3>{allTechs.length}+</h3>
              <p>Technologies</p>
            </div>
            <div className="stat-item">
              <h3>50M+</h3>
              <p>Data Points Processed</p>
            </div>
          </div>

          {/* FILTER */}
          <div className="filter-section">
            <h3>Filter by Technology</h3>
            <div className="filter-buttons">
              {techs.map((tech, idx) => (
                <button
                  key={idx}
                  className={`filter-btn ${filter === tech ? "active" : ""}`}
                  onClick={() => setFilter(tech)}
                >
                  {tech === "all" ? "All Projects" : tech}
                </button>
              ))}
            </div>
          </div>

          {/* PROJECTS GRID */}
          <div className="projects-grid-detailed">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((p, i) => (
                <ProjectCard key={i} p={p} i={projects.indexOf(p)} />
              ))
            ) : (
              <div className="no-projects">
                <p>No projects found for {filter}</p>
              </div>
            )}
          </div>

          {/* CTA SECTION */}
          <div className="projects-cta">
            <h2>Interested in Working Together?</h2>
            <p>Let's discuss how we can transform your business with AI</p>
            <a href="#contact" className="btn btn-primary">Start Your Project</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ProjectsPage
