import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "Test everything, hold on to what is good. Even from the book of devils.",
    author: "Franz Kafka",
  },
  {
    text: "Pain and suffering are always inevitable for a large intelligence and a deep heart. The really great men must, I think, have great sadness on earth.",
    author: "Fyodor Dostoevsky",
  },
  {
    text: "Everyone sees what you appear to be, few experience what you really are.",
    author: "Niccolò Machiavelli",
  },
  {
    text: "It is better to be feared than loved, if you cannot be both.",
    author: "Niccolò Machiavelli",
  },
  {
    text: "Man is what he believes.",
    author: "Fyodor Dostoevsky",
  },
  {
    text: "Youth is happy because it has the capacity to see beauty. Anyone who keeps the ability to see beauty never grows old.",
    author: "Franz Kafka",
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
