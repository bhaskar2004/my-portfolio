import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/bhaskar2004",
      icon: <Github className="w-5 h-5" />
    },
    {
      name: "LinkedIn", 
      url: "https://linkedin.com/in/bhaskar-t-783aa3331",
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: "Email",
      url: "mailto:bhaskarbhaskar4794@gmail.com", 
      icon: <Mail className="w-5 h-5" />
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Approximate header height  
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const quickLinks = [
    { label: 'About', section: 'about' },
    { label: 'Projects', section: 'projects' },
    { label: 'Education', section: 'education' },
    { label: 'Contact', section: 'contact' }
  ];

  return (
    <footer className="bg-foreground text-background section-padding section-spacing">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Bhaskar T</h3>
            <p className="text-background/80 leading-relaxed">
              Computer Science Undergraduate passionate about creating innovative solutions 
              and building impactful software projects.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary 
                           flex items-center justify-center transition-all duration-300 
                           hover:-translate-y-1"
                  aria-label={`Connect with me on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.section}
                  onClick={() => scrollToSection(link.section)}
                  className="text-left text-background/80 hover:text-background hover:translate-x-1 
                           transition-all duration-300"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:bhaskarbhaskar4794@gmail.com"
                className="block text-background/80 hover:text-background transition-colors duration-300"
              >
                bhaskarbhaskar4794@gmail.com
              </a>
              <p className="text-background/80">2FHX+FM Bengaluru, Karnataka</p>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-background/80">Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/80 text-sm flex items-center gap-2">
              © {currentYear} Bhaskar T | Made with <Heart className="w-4 h-4 text-red-400" fill="currentColor" /> using React & Tailwind
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm text-background/80 hover:text-background transition-colors duration-300"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;