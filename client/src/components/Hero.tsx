import { Mail, Phone, Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SiWhatsapp } from "react-icons/si";
import profileImage from "@assets/WhatsApp Image 2025-10-09 at 15.03.48_92a61b85_1760011508093.jpg";

interface HeroProps {
  onContactClick?: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section id="hero" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          <div className="md:col-span-2 flex justify-center md:justify-start">
            <Avatar className="h-64 w-64 md:h-80 md:w-80 shadow-2xl border-4 border-card">
              <AvatarImage src={profileImage} alt="Johnbithon Muchiri Wanjama" />
              <AvatarFallback className="text-6xl">JW</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="md:col-span-3 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight" data-testid="text-hero-name">
                Johnbithon Muchiri Wanjama
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold" data-testid="text-hero-title">
                Network & Systems Administrator
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl" data-testid="text-hero-description">
                Expert in system administration, network management, malware analysis, and front-end web development. Delivering robust IT solutions with precision and expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button onClick={onContactClick} size="lg" data-testid="button-hero-contact">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
              <Button variant="outline" size="lg" asChild data-testid="button-hero-github">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>

            <div className="pt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm md:text-base">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:muchiribithon@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-email">
                  muchiribithon@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href="tel:+254741222877" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-phone">
                  +254-741-222-877
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
