import { Code, Palette, Zap } from "lucide-react";

const skills = [
  { icon: Code, title: "Development", description: "Building robust applications with modern technologies and best practices." },
  { icon: Palette, title: "Design", description: "Creating intuitive and visually appealing user interfaces." },
  { icon: Zap, title: "Performance", description: "Optimizing for speed and delivering seamless user experiences." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What I Do
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-body">
            I specialize in building digital products that are both functional and beautiful.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group p-8 rounded-xl bg-card border border-border hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <skill.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 font-heading">
                {skill.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
