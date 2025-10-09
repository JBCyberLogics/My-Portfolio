import { Github, Instagram } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold" data-testid="text-footer-brand">
              Johnbithon Wanjama
            </h3>
            <p className="text-sm text-muted-foreground">
              Network & Systems Administrator
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {["About", "Projects", "Books", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                  data-testid={`link-footer-${link.toLowerCase()}`}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://wa.me/+254741222877"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover-elevate active-elevate-2 transition-all"
                data-testid="link-footer-whatsapp"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/JBCyberLogics"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover-elevate active-elevate-2 transition-all"
                data-testid="link-footer-github"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/018ga_zer/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover-elevate active-elevate-2 transition-all"
                data-testid="link-footer-instagram"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground" data-testid="text-footer-copyright">
          © {currentYear} Johnbithon Muchiri Wanjama. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
