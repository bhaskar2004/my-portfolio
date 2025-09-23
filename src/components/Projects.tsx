import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Vehicle Registration Management System",
      description: "Developed Java application with CRUD operations using JDBC for MySQL database connectivity, featuring GUI interfaces for vehicle data management.",
      githubUrl: "https://github.com/bhaskar2004/vehicle-registration-management-system",
      technologies: ["Java", "MySQL", "JDBC", "GUI"]
    },
    {
      title: "Smart Navigation System for the Visually Impaired",
      description: "Engineered assistive technology solution using real-time object detection and audio feedback for obstacle detection with voice-based navigation instructions and proximity alerts.",
      githubUrl: "https://github.com/bhaskar2004/Smart-Navigation-Systems",
      technologies: ["Python", "Audio Processing", "Object Detection"]
    },
    {
      title: "Weather Forecast Bot",
      description: "Built real-time weather information system integrating OpenWeatherMap API with JSON parsing for location-based forecasting, supporting multiple cities and formatted data display.",
      githubUrl: "https://github.com/bhaskar2004/weather-bot",
      technologies: ["BotPress","OpenWeatherMap","APIs"]
    },
    {
      title: "Better Trips - Tourism Web Application",
      description: "Developed responsive web application integrating Geoapify API to display 20 nearby tourist attractions with filtering, sorting, and integrated Google Maps for routing based on user location.",
      githubUrl: "https://github.com/bhaskar2004/better-trips",
      technologies: ["HTML", "CSS", "JavaScript", "Geoapify API"]
    }
  ];

  return (
    <section id="projects" className="section-spacing section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            A showcase of my software development projects that demonstrate practical problem-solving and technical implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-elevated hover-lift group p-8 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="btn-secondary flex items-center gap-2"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github size={16} />
                  View Code
                </Button>
              
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button
            variant="outline"
            className="btn-secondary"
            onClick={() => window.open('https://github.com/bhaskar2004', '_blank')}
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;