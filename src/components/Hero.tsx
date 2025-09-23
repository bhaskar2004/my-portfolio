import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import heroVideo from "@/assets/herobg.mp4";
import ResumeViewer from "./ResumeViewer";

const Hero = () => {
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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-background/1"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30 z-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/10 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center section-padding max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)' }}>
            Hi, I'm <span className="gradient-text" style={{ textShadow: '2px 2px 4px rgba(4, 80, 243, 0.8), 0 0 10px rgba(53, 50, 50, 1)' }}>Bhaskar T</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto font-medium" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7), 0 0 8px rgba(0,0,0,0.4)' }}>
            Computer Science Undergraduate | Aspiring Software Developer
          </p>
          <p className="text-lg text-gray-50 mb-12 max-w-2xl mx-auto" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6), 0 0 6px rgba(0,0,0,0.3)' }}>
            A passionate and self-driven Computer Science undergraduate aiming to transform ideas into impactful solutions with strong fundamentals in Core Java and a commitment to continuous learning.
          </p>
        </div>

        <div className="animate-fade-in-delay mb-16">
          <ResumeViewer />
        </div>

        <div className="animate-fade-in-delay flex justify-center mb-16">
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="btn-secondary flex items-center gap-3 text-lg"
          >
            <Mail size={20} />
            Contact Me
          </Button>
        </div>

        <div className="animate-bounce-in">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-blue-400 transition-colors duration-300 flex flex-col items-center gap-2 mx-auto font-medium"
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6), 0 0 6px rgba(0,0,0,0.3)' }}
            aria-label="Scroll to about section"
          >
            <span className="text-sm font-medium">Learn More About Me</span>
            <ArrowDown size={30} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;