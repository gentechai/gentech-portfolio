import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Subtle decorative circles */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <div className="space-y-6 animate-fade-in-up">
          <p className="text-primary-foreground/60 font-body text-sm tracking-widest uppercase">
            Welcome
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
            Hi, I'm <span className="text-gradient">Your Name</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-md leading-relaxed font-body">
            A passionate developer crafting beautiful digital experiences with clean code and creative design.
          </p>
          <div className="flex gap-4 pt-4">
            <a
              href="#about"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium font-body hover:opacity-90 transition-opacity"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-primary-foreground/20 text-primary-foreground font-medium font-body hover:bg-primary-foreground/5 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden glow-border rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src={profileImg}
                alt="Profile photo"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 md:w-80 md:h-80 rounded-2xl border-2 border-accent/30 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
