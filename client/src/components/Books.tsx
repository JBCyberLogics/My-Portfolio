import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const books = [
  {
    title: "Meditations",
    author: "Marcus Aurelius",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
  },
  {
    title: "The Obstacle Is the Way",
    author: "Ryan Holiday",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
  },
  {
    title: "Discipline Equals Freedom",
    author: "Jocko Willink",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
  },
  {
    title: "The Daily Stoic",
    author: "Ryan Holiday",
    cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop",
  },
];

export default function Books() {
  return (
    <section id="books" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-12">
          <BookOpen className="h-8 w-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-semibold" data-testid="text-books-heading">
            Books I've Read
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {books.map((book, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate active-elevate-2 transition-all cursor-pointer group"
              data-testid={`book-card-${index}`}
              onClick={() => console.log(`Clicked book: ${book.title}`)}
            >
              <div className="aspect-[2/3] bg-muted relative overflow-hidden">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4 space-y-1">
                <h4 className="font-semibold text-sm line-clamp-2" data-testid={`book-title-${index}`}>
                  {book.title}
                </h4>
                <p className="text-xs text-muted-foreground" data-testid={`book-author-${index}`}>
                  {book.author}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
