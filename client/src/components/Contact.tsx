import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" data-testid="text-contact-heading">
          Get in Touch
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="md:col-span-1 space-y-4">
            <Card className="p-6 space-y-3 hover-elevate transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a
                    href="mailto:muchiribithon@gmail.com"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="link-contact-email"
                  >
                    muchiribithon@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-3 hover-elevate transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <a
                    href="tel:+254741222877"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="link-contact-phone"
                  >
                    +254-741-222-877
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <Card className="md:col-span-2 p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  data-testid="input-name"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Your Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  data-testid="input-email"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  data-testid="input-message"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <Button type="submit" className="w-full" size="lg" data-testid="button-submit">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
