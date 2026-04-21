import { useScrollReveal } from "../hooks/useScrollReveal"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function SkillsPage() {
  const skillCategories = [
    {
      title: "Python & Backend Development",
      icon: "fab fa-python",
      skills: ["Python", "FastAPI", "Django", "Flask"],
      description: "Expert-level Python programming with modern frameworks for building scalable APIs and backend systems"
    },
    {
      title: "Generative AI & LLMs",
      icon: "fas fa-robot",
      skills: ["OpenAI & GPT Models", "Anthropic Claude", "Hugging Face Transformers", "LangChain", "Prompt Engineering", "RAG Systems"],
      description: "Advanced expertise in building intelligent AI-powered applications with state-of-the-art language models and generative architectures"
    },
    {
      title: "Deep Learning & Neural Networks",
      icon: "fas fa-brain",
      skills: ["TensorFlow", "PyTorch", "Keras", "CNNs & RNNs", "Transformers"],
      description: "Deep expertise in designing and implementing neural network architectures for complex machine learning tasks"
    },
    {
      title: "Computer Vision",
      icon: "fas fa-eye",
      skills: ["OpenCV", "YOLO (v5, v8)", "Object Detection", "Image Segmentation", "Facial Recognition"],
      description: "Specialized in building production-ready computer vision systems for real-time processing and analysis"
    },
    {
      title: "Data Science & Analytics",
      icon: "fas fa-chart-line",
      skills: ["Pandas", "NumPy", "Matplotlib & Seaborn", "Statistical Modeling", "Feature Engineering"],
      description: "Comprehensive data science expertise spanning exploratory analysis, visualization, and advanced statistical techniques"
    },
    {
      title: "Cloud & DevOps",
      icon: "fab fa-docker",
      skills: ["AWS", "Google Cloud Platform", "Azure", "Docker & Kubernetes", "CI/CD Pipelines", "MLOps"],
      description: "Enterprise-grade cloud platform expertise with containerization, orchestration, and CI/CD automation"
    },
    {
      title: "Frontend Development",
      icon: "fab fa-react",
      skills: ["React.js", "TypeScript", "Framer Motion", "CSS/Responsive Design", "Vite"],
      description: "Modern frontend development with focus on interactive UI, animations, and responsive design"
    },
    {
      title: "API Integration & Automation",
      icon: "fas fa-plug",
      skills: ["REST APIs", "GraphQL", "Webhook Integration", "Third-party APIs", "API Authentication"],
      description: "Expert in integrating complex systems through well-designed APIs and automation workflows"
    }
  ]

  return (
    <>
      <Navbar />
      <section className="skills-page">
        <div className="container">
          {/* PAGE HEADER */}
          <div className="page-header">
            <h1>Our Technical Expertise</h1>
            <p>Comprehensive skillset spanning Generative AI, Machine Learning, Cloud Infrastructure, and Full-Stack Development</p>
          </div>

          {/* SKILLS GRID */}
          <div className="skills-categories">
            {skillCategories.map((category, idx) => (
              <SkillCategoryCard key={idx} category={category} idx={idx} />
            ))}
          </div>

          {/* CTA SECTION */}
          <div className="skills-cta">
            <h2>Ready to Bring Your AI Vision to Life?</h2>
            <p>Leverage our expertise to build intelligent, scalable solutions</p>
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

function SkillCategoryCard({ category, idx }) {
  const [ref, visible] = useScrollReveal()

  return (
    <div ref={ref} className={`skill-category reveal delay-${(idx % 3) + 1} ${visible ? "active" : ""}`}>
      <div className="category-header">
        <i className={category.icon}></i>
        <h3>{category.title}</h3>
      </div>
      <p className="category-description">{category.description}</p>
      
      <div className="skills-badges">
        {category.skills.map((skill, sidx) => (
          <div key={sidx} className="skill-badge">{skill}</div>
        ))}
      </div>
    </div>
  )
}

export default SkillsPage
