import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import logoImage from "@assets/a-modern-logo-design-featuring-the-text-_oEzBGbY2Q36Ao4k6FvDVMA_ax6UxWEETZuicz1wC_mHhA_1760011715663.jpeg";

interface NavigationProps {
  onContactClick?: () => void;
}

export default function Navigation({ onContactClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Books", id: "books" },
    { label: "Quotes", id: "quotes" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors"
            data-testid="link-home"
          >
            <img src={logoImage} alt="Logo" className="h-10 w-10 md:h-12 md:w-12 rounded-md object-cover" />
            <span className="text-lg md:text-xl font-semibold">M.Wanjama</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 px-3 py-2 rounded-md"
                  data-testid={`link-${link.id}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Button
                onClick={() => {
                  scrollToSection("contact");
                  onContactClick?.();
                }}
                data-testid="button-contact"
              >
                Contact
              </Button>
              <ThemeToggle />
            </div>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover-elevate active-elevate-2 transition-colors"
                data-testid={`link-mobile-${link.id}`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => {
                scrollToSection("contact");
                setMobileMenuOpen(false);
                onContactClick?.();
              }}
              className="w-full"
              data-testid="button-mobile-contact"
            >
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
