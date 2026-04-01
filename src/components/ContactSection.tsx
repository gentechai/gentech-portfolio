import { Mail, MapPin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-muted/50">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Let's Connect
        </h2>
        <p className="text-muted-foreground text-lg font-body">
          Have a project in mind? I'd love to hear from you.
        </p>

        <div className="flex flex-wrap justify-center gap-6 pt-4">
          <a href="mailto:hello@example.com" className="flex items-center gap-2 px-5 py-3 rounded-lg bg-card border border-border text-foreground hover:border-accent/40 transition-colors font-body">
            <Mail className="w-4 h-4 text-accent" />
            hello@example.com
          </a>
          <a href="#" className="flex items-center gap-2 px-5 py-3 rounded-lg bg-card border border-border text-foreground hover:border-accent/40 transition-colors font-body">
            <Github className="w-4 h-4 text-accent" />
            GitHub
          </a>
          <span className="flex items-center gap-2 px-5 py-3 rounded-lg bg-card border border-border text-muted-foreground font-body">
            <MapPin className="w-4 h-4 text-accent" />
            Your City
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
