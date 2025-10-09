import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Shield, Headset } from "lucide-react";

const projects = [
  {
    title: "Network Setup",
    description: "Small office LAN/Wi-Fi and firewall setup with comprehensive security implementation.",
    icon: Network,
    tags: ["Networking", "Security", "Infrastructure"],
    color: "text-primary",
  },
  {
    title: "Malware Analysis Lab",
    description: "Isolated analysis environment for studying and reverse-engineering malicious software.",
    icon: Shield,
    tags: ["Security", "Analysis", "Virtualization"],
    color: "text-chart-3",
  },
  {
    title: "IT Support Portal",
    description: "Prototype ticketing system for streamlined technical support and issue tracking.",
    icon: Headset,
    tags: ["Web Dev", "Support", "Management"],
    color: "text-accent",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" data-testid="text-projects-heading">
          Portfolio & Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 space-y-4 hover-elevate active-elevate-2 transition-all cursor-pointer group"
              data-testid={`project-card-${index}`}
              onClick={() => console.log(`Clicked project: ${project.title}`)}
            >
              <div className={`${project.color} transition-transform group-hover:scale-110`}>
                <project.icon className="h-12 w-12" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold" data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" data-testid={`project-tag-${index}-${tagIndex}`}>
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
