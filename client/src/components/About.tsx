import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Network, Shield, Code, Database, Terminal } from "lucide-react";

const skills = [
  { icon: Server, label: "System Administration", color: "text-primary" },
  { icon: Network, label: "Network Management", color: "text-accent" },
  { icon: Shield, label: "Malware Analysis", color: "text-chart-3" },
  { icon: Code, label: "Web Development", color: "text-chart-2" },
  { icon: Database, label: "Database Management", color: "text-chart-4" },
  { icon: Terminal, label: "Linux & Windows", color: "text-chart-5" },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" data-testid="text-about-heading">
          Profile
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <Card className="p-6 md:p-8 space-y-4">
            <h3 className="text-xl font-semibold" data-testid="text-about-subheading">About Me</h3>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-about-description">
              Dedicated IT professional with hands-on experience in system administration, network management, technical support, and IT solutions. Adept in Windows & Linux environments with strong troubleshooting and communication skills.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I bring a comprehensive approach to IT infrastructure, combining technical expertise with a deep understanding of business needs to deliver reliable, scalable solutions.
            </p>
          </Card>

          <Card className="p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-6" data-testid="text-skills-heading">Core Expertise</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg hover-elevate active-elevate-2 transition-all"
                  data-testid={`skill-${index}`}
                >
                  <skill.icon className={`h-5 w-5 ${skill.color}`} />
                  <span className="text-sm font-medium">{skill.label}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
