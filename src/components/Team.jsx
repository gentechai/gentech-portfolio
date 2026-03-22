import { useScrollReveal } from "../hooks/useScrollReveal"

function Team() {
  const [ref, visible] = useScrollReveal()

  return (
    <section 
      id="team" 
      ref={ref}
      className={`team reveal ${visible ? "active" : ""}`}
    >
      <div className="container">
        <div className="section-header">
          <h2><i className="fas fa-user-friends"></i> Meet Our Team</h2>
          <p>The people behind GenTech AI</p>
        </div>
        <div className="team-grid">
          <div className={`team-card reveal delay-1 ${visible ? "active" : ""}`}>
            <img src="/Ayush_Tiwari.png" alt="Ayush Tiwari" className="team-photo" />
            <h3>Ayush Tiwari</h3>
            <p className="role">Founder & AI/ML Developer</p>
            <p className="description">Passionate about leveraging data-driven insights, machine learning models, and applied AI research to solve real-world challenges. Leads product vision and technical development, designing and deploying scalable AI solutions including Generative AI, LLM applications, and intelligent systems while driving innovation, architecture decisions, and overall company growth.</p>
            {/* <p className="email"><a href="mailto:ayushtiwari@gentech.in">ayushtiwari@gentech.in</a></p> */}
          </div>

          <div className={`team-card reveal delay-2 ${visible ? "active" : ""}`}>
            <img src="/paras.jpeg" alt="Paras Sonare" className="team-photo" />
            <h3>Paras Sonare</h3>
            <p className="role">Co-Founder & Sales Manager</p>
            <p className="description">Strategic business leader focused on driving company growth through partnerships, client acquisition, and revenue strategy. Combines market insight with strong relationship management to position AI/ML and Generative AI solutions effectively, ensuring customer value, business expansion, and sustainable sales performance.</p>
            {/* <p className="email"><a href="mailto:psonare56@gentech.in">psonare56@gentech.in</a></p> */}
          </div>

          <div className={`team-card reveal delay-3 ${visible ? "active" : ""}`}>
            <img src="/naveen sir.png" alt="Naveen Patidar" className="team-photo" />
            <h3>Naveen Patidar</h3>
            <p className="role">CTO & DevOps Engineer with AI/ML Expertise</p>
            <p className="description">Leads the company’s technology strategy and infrastructure architecture, ensuring scalable, secure, and high-performance systems. Specialized in DevOps practices including automation, CI/CD pipelines, cloud infrastructure, and deployment optimization, while integrating AI/ML and Generative AI solutions to enhance product capabilities, operational efficiency, and innovation.</p>
            {/* <p className="email"><a href="mailto:naveenpatidar@gentech.in">naveenpatidar@gentech.in</a></p> */}
          </div>

          {/* <div className={`team-card reveal delay-4 ${visible ? "active" : ""}`}>
            <img src="/harsh sir.png" alt="Harsh Jaiswal" className="team-photo" />
            <h3>Harsh Jaiswal</h3>
            <p className="role">Developer - Generative AI & Django Expert</p>
            <p className="description">Passionate about Python, Django, and Generative AI — building intelligent, scalable solutions that blend web development with cutting-edge AI innovation.</p>
            <p className="email"><a href="mailto:harshjaiswal@gentech.in">harshjaiswal@gentech.in</a></p>
          </div> */}

          <div className={`team-card reveal delay-1 ${visible ? "active" : ""}`}>
            <img src="/sohail.jpeg" alt="Sohail Pathan" className="team-photo" />
            <h3>Sohail Pathan</h3>
            <p className="role">CEO & Sr. Project Manager</p>
            <p className="description">Manages end-to-end execution of AI/ML and software projects, coordinating teams, timelines, and resources to ensure successful delivery. Drives agile processes, stakeholder communication, and quality assurance for scalable, intelligent solutions</p>
            {/* <p className="email"><a href="mailto:sohailpathan@gentech.in">sohailpathan@gentech.in</a></p> */}
          </div>

          <div className={`team-card reveal delay-2 ${visible ? "active" : ""}`}>
            <img src="/shashikant.jpeg" alt="Shashikant Pal" className="team-photo" />
            <h3>Shashikant Pal</h3>
            <p className="role">Deep Learning & Computer Vision Specialist</p>
            <p className="description">Expert in computer vision and deep learning architectures, specializing in object detection, image segmentation, and real-time video processing. Skilled with PyTorch, OpenCV, and YOLO for building production-ready vision systems.</p>
            {/* <p className="email"><a href="mailto:shashikantpal@gentech.in">shashikantpal@gentech.in</a></p> */}
          </div>

          <div className={`team-card reveal delay-3 ${visible ? "active" : ""}`}>
            <img src="/harsh_jatav.png" alt="Harsh Jatav" className="team-photo" />
            <h3>Harsh Jatav</h3>
            <p className="role">Full-Stack ML & Backend Developer</p>
            <p className="description">Proficient in building end-to-end machine learning systems with strong backend expertise in FastAPI, Django, and database optimization. Experienced in MLOps, model deployment, and creating scalable data pipelines for production environments.</p>
            {/* <p className="email"><a href="mailto:harshjatav@gentech.in">harshjatav@gentech.in</a></p> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team