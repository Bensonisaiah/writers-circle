import { Quote } from "lucide-react";


const testimonials = [
  {
    quote:
      "Writer's Circle has been a game-changer for me as a B2B writer. When I felt lost for inspiration, reaching out to the president was a wholesome experience. It not only helped me craft a blog post but also gave my work enormous visibility.",
    name: "Jennifer Xavier",
    role: "B2B Writer",
  },
  {
    quote:
      "If you're looking for a place to grow while surrounded by a supportive community. This is the place to be!",
    name: "Steve Oyede",
    role: "Content Creator",
  },
  {
    quote:
      "Writer's Circle is more than a learning ground, it's a hangout spot for the few lucky individuals who know how to grab opportunities.",
    name: "Oji Naomi",
    role: "Freelance Writer",
  },
];

function Testimonial() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-body text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What People Say About Us
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-elevated p-8 relative animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <p className="font-body text-muted-foreground mb-6 relative z-10 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display text-lg font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;