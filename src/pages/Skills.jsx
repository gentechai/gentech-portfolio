import { useScrollReveal } from "../hooks/useScrollReveal"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function SkillsPage() {
  const skillCategories = [
    {
      title: "Python & Backend Development",
      icon: "fab fa-python",
      skills: [
        { name: "Python", level: 95 },
        { name: "FastAPI", level: 90 },
        { name: "Django", level: 88 },
        { name: "Flask", level: 85 }
      ],
      description: "Expert-level Python programming with modern frameworks for building scalable APIs and backend systems"
    },
    {
      title: "Generative AI & LLMs",
      icon: "fas fa-robot",
      skills: [
        { name: "OpenAI & GPT Models", level: 92 },
        { name: "Anthropic Claude", level: 90 },
        { name: "Hugging Face Transformers", level: 88 },
        { name: "LangChain", level: 87 },
        { name: "Prompt Engineering", level: 92 },
        { name: "RAG Systems", level: 85 }
      ],
      description: "Advanced expertise in building intelligent AI-powered applications with state-of-the-art language models and generative architectures"
    },
    {
      title: "Deep Learning & Neural Networks",
      icon: "fas fa-brain",
      skills: [
        { name: "TensorFlow", level: 88 },
        { name: "PyTorch", level: 90 },
        { name: "Keras", level: 85 },
        { name: "CNNs & RNNs", level: 87 },
        { name: "Transformers", level: 89 }
      ],
      description: "Deep expertise in designing and implementing neural network architectures for complex machine learning tasks"
    },
    {
      title: "Computer Vision",
      icon: "fas fa-eye",
      skills: [
        { name: "OpenCV", level: 88 },
        { name: "YOLO (v5, v8)", level: 90 },
        { name: "Object Detection", level: 89 },
        { name: "Image Segmentation", level: 87 },
        { name: "Facial Recognition", level: 86 }
      ],
      description: "Specialized in building production-ready computer vision systems for real-time processing and analysis"
    },
    {
      title: "Data Science & Analytics",
      icon: "fas fa-chart-line",
      skills: [
        { name: "Pandas", level: 92 },
        { name: "NumPy", level: 90 },
        { name: "Matplotlib & Seaborn", level: 88 },
        { name: "Statistical Modeling", level: 85 },
        { name: "Feature Engineering", level: 88 }
      ],
      description: "Comprehensive data science expertise spanning exploratory analysis, visualization, and advanced statistical techniques"
    },
    {
      title: "Cloud & DevOps",
      icon: "fab fa-docker",
      skills: [
        { name: "AWS", level: 88 },
        { name: "Google Cloud Platform", level: 85 },
        { name: "Azure", level: 83 },
        { name: "Docker & Kubernetes", level: 87 },
        { name: "CI/CD Pipelines", level: 86 },
        { name: "MLOps", level: 85 }
      ],
      description: "Enterprise-grade cloud platform expertise with containerization, orchestration, and CI/CD automation"
    },
    {
      title: "Frontend Development",
      icon: "fab fa-react",
      skills: [
        { name: "React.js", level: 88 },
        { name: "TypeScript", level: 85 },
        { name: "Framer Motion", level: 84 },
        { name: "CSS/Responsive Design", level: 87 },
        { name: "Vite", level: 86 }
      ],
      description: "Modern frontend development with focus on interactive UI, animations, and responsive design"
    },
    {
      title: "API Integration & Automation",
      icon: "fas fa-plug",
      skills: [
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 80 },
        { name: "Webhook Integration", level: 87 },
        { name: "Third-party APIs", level: 89 },
        { name: "API Authentication", level: 88 }
      ],
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
      
      <div className="skills-list">
        {category.skills.map((skill, sidx) => (
          <div key={sidx} className="skill-item">
            <div className="skill-name-level">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsPage
