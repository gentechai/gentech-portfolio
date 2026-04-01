import { useScrollReveal } from "../hooks/useScrollReveal"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function TeamPage() {
  const teamMembers = [
    {
      name: "Ayush Tiwari",
      role: "Founder & CEO",
      image: "/Ayush_Tiwari.png",
      bio: "Passionate about leveraging data-driven insights, machine learning models, and applied AI research to solve real-world challenges. Leads product vision and technical development, designing and deploying scalable AI solutions including Generative AI, LLM applications, and intelligent systems while driving innovation, architecture decisions, and overall company growth.",
      specialties: ["Generative AI", "LLM Architecture", "Product Strategy", "ML Systems Design"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Paras Sonare",
      role: "Co-Founder & Sales Manager",
      image: "/paras.jpeg",
      bio: "Strategic business leader focused on driving company growth through partnerships, client acquisition, and revenue strategy. Combines market insight with strong relationship management to position AI/ML and Generative AI solutions effectively, ensuring customer value, business expansion, and sustainable sales performance.",
      specialties: ["Business Strategy", "Client Relations", "Market Analysis", "Growth Strategy"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Naveen Patidar",
      role: "CTO & DevOps Engineer with AI/ML Expertise",
      image: "/naveen sir.png",
      bio: "Leads the company's technology strategy and infrastructure architecture, ensuring scalable, secure, and high-performance systems. Specialized in DevOps practices including automation, CI/CD pipelines, cloud infrastructure, and deployment optimization, while integrating AI/ML and Generative AI solutions to enhance product capabilities, operational efficiency, and innovation.",
      specialties: ["Cloud Architecture", "DevOps", "MLOps", "System Design", "CI/CD"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Sohail Pathan",
      role: "Sr. Project Manager & AI/ML Expertise",
      image: "/sohail.jpeg",
      bio: "Manages end-to-end execution of AI/ML and software projects, coordinating teams, timelines, and resources to ensure successful delivery. Drives agile processes, stakeholder communication, and quality assurance for scalable, intelligent solutions.",
      specialties: ["Project Management", "Agile Methodology", "Team Coordination", "AI/ML"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Shashikant Pal",
      role: "Deep Learning & Computer Vision Specialist",
      image: "/shashikant.jpeg",
      bio: "Expert in computer vision and deep learning architectures, specializing in object detection, image segmentation, and real-time video processing. Skilled with PyTorch, OpenCV, and YOLO for building production-ready vision systems.",
      specialties: ["Computer Vision", "Deep Learning", "Object Detection", "Image Segmentation", "PyTorch"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ]

  return (
    <>
      <Navbar />
      <section className="team-page">
        <div className="container">
          {/* PAGE HEADER */}
          <div className="page-header">
            <h1>Meet Our Team</h1>
            <p>Expert professionals driving innovation in AI and technology</p>
          </div>

          {/* TEAM INTRO */}
          <div className="team-intro">
            <p>
              At GenTech AI, our success is built on the expertise, dedication, and passion of our talented team. 
              Each member brings years of experience in their respective domains, from cutting-edge AI research 
              to enterprise cloud infrastructure, enabling us to deliver world-class solutions.
            </p>
          </div>

          {/* TEAM GRID */}
          <div className="team-grid-page">
            {teamMembers.map((member, idx) => (
              <TeamMemberCard key={idx} member={member} idx={idx} />
            ))}
          </div>

          {/* TEAM VALUES */}
          <div className="team-values">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <i className="fas fa-lightbulb"></i>
                <h3>Innovation</h3>
                <p>Constantly pushing boundaries to deliver cutting-edge AI solutions</p>
              </div>
              <div className="value-item">
                <i className="fas fa-handshake"></i>
                <h3>Collaboration</h3>
                <p>Working closely with clients to understand and exceed their expectations</p>
              </div>
              <div className="value-item">
                <i className="fas fa-shield-alt"></i>
                <h3>Reliability</h3>
                <p>Building robust, scalable systems you can depend on</p>
              </div>
              <div className="value-item">
                <i className="fas fa-rocket"></i>
                <h3>Excellence</h3>
                <p>Committed to highest standards in every project we undertake</p>
              </div>
            </div>
          </div>

          {/* JOIN TEAM CTA */}
          <div className="team-cta">
            <h2>Join Our Growing Team</h2>
            <p>We're always looking for talented individuals to join GenTech AI. If you're passionate about AI and want to make an impact, we'd love to hear from you.</p>
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

function TeamMemberCard({ member, idx }) {
  const [ref, visible] = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`team-member-card reveal delay-${(idx % 2) + 1} ${visible ? "active" : ""}`}
    >
      <div className="member-image-wrapper">
        <img src={member.image} alt={member.name} className="member-image" />
        <div className="member-overlay">
          <div className="social-icons">
            <a href={member.social.linkedin} className="social-icon" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href={member.social.twitter} className="social-icon" title="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="member-info">
        <h3>{member.name}</h3>
        <p className="member-role">{member.role}</p>
        <p className="member-bio">{member.bio}</p>

        <div className="specialties">
          <h4>Specialties</h4>
          <div className="specialty-tags">
            {member.specialties.map((spec, sidx) => (
              <span key={sidx} className="specialty-tag">{spec}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamPage
