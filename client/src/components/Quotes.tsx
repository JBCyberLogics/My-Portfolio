import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "I write to discover what I think.",
    author: "Joan Didion",
  },
  {
    text: "The unexamined life is not worth living.",
    author: "Socrates",
  },
  {
    text: "Freedom is secured not by the fulfilment of one's desires, but by the removal of desire.",
    author: "Epictetus",
  },
];

export default function Quotes() {
  return (
    <section id="quotes" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" data-testid="text-quotes-heading">
          Favorite Quotes
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {quotes.map((quote, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 space-y-4 hover-elevate active-elevate-2 transition-all"
              data-testid={`quote-card-${index}`}
            >
              <Quote className="h-8 w-8 text-primary/30" />
              <blockquote className="text-lg md:text-xl font-light italic leading-relaxed" data-testid={`quote-text-${index}`}>
                "{quote.text}"
              </blockquote>
              <p className="text-sm text-muted-foreground text-right" data-testid={`quote-author-${index}`}>
                — {quote.author}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
