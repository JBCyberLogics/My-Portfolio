import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Books from "@/components/Books";
import Quotes from "@/components/Quotes";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Portfolio() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation onContactClick={scrollToContact} />
      <main>
        <Hero onContactClick={scrollToContact} />
        <About />
        <Projects />
        <Books />
        <Quotes />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
