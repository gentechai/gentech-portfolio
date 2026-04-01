import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Footer from "./components/Footer"
import ThemeButton from "./components/ThemeButton"
import ProjectDetail from "./pages/ProjectDetail"
import Contact from "./pages/Contact"
import Career from "./pages/Career"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Team from "./pages/Team"

function App() {
  const [route, setRoute] = useState(window.location.hash || "")

  useEffect(() => {
    // Initialize theme from localStorage on app load
    const savedTheme = localStorage.getItem("theme") || "light-theme"
    document.documentElement.className = savedTheme

    const onHash = () => setRoute(window.location.hash || "")
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])

  // Simple hash-based routing for project details: #/project/{index}
  if (route.startsWith("#/project/")) {
    const parts = route.split("/")
    const idx = parseInt(parts[2], 10)
    return (
      <>
        <ThemeButton />
        <ProjectDetail index={idx} />
      </>
    )
  }

  // Contact page route
  if (route === "#contact") {
    return (
      <>
        <ThemeButton />
        <Navbar />
        <Contact />
        <Footer />
      </>
    )
  }

  // career page route
  if (route === "#career") {
    return (
      <>
        <ThemeButton />
        <Navbar />
        <Career />
        <Footer />
      </>
    )
  }

  // skills page route
  if (route === "#skills") {
    return (
      <>
        <ThemeButton />
        <Skills />
      </>
    )
  }

  // projects page route
  if (route === "#projects") {
    return (
      <>
        <ThemeButton />
        <Projects />
      </>
    )
  }

  // team page route
  if (route === "#team") {
    return (
      <>
        <ThemeButton />
        <Team />
      </>
    )
  }

  return (
    <>
      <ThemeButton />
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </>
  )
}

export default App
