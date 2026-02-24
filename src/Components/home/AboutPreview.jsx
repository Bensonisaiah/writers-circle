import Button from "../ui/Button";
import { Heart, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function AboutPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <span className="inline-block font-body text-sm font-medium text-primary uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Good Vibes and{" "}
              <span className="text-primary">Great Stories</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-6">
              Our Writer's Circle is all about good vibes and great stories. We are a 
              not-for-profit organization that brings writers together from all over the world.
            </p>
            <p className="font-body text-muted-foreground mb-8">
              Our story began in a karaoke club where we saw friends singing together 
              and thought, why not create a space where writers can dance to the same tune? 
              So, we brought the Writer's Circle to life – a chill space where everyone 
              and anyone can be a part of.
            </p>
            <Link to="/about">
              <Button variant="outline" size="lg">
                Read Our Full Story
              </Button>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card-elevated p-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Non-Profit
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                We're driven by passion, not profit. Your growth is our success.
              </p>
            </div>

            <div className="card-elevated p-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Global Family
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Connect with writers across all niches from around the world.
              </p>
            </div>

            <div className="card-elevated p-6 sm:col-span-2 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Creative Freedom
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Share ideas, get creative with your pen. It's all about having fun with words 
                and making memories with other writers within the circle!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section className="py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
    //   <div className="container-custom text-center">
    //     <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-up">
    //       About Writer's Circle
    //     </h2>
    //     <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: "0.1s" }}>
    //       Writer's Circle is a vibrant community of writers dedicated to helping each other grow and succeed. Whether you're a beginner or a seasoned pro, you'll find support, resources, and inspiration here.
    //     </p>
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
    //       <div className="flex flex-col items-center gap-4">
    //         <Heart className="w-10 h-10 text-primary" />
    //         <h3 className="font-display text-xl font-semibold text-primary">Supportive Community</h3>
    //         <p className="font-body text-sm text-muted-foreground text-center">
    //           Connect with fellow writers who understand your journey and are here to help.
    //         </p>
    //       </div>
    //       <div className="flex flex-col items-center gap-4">
    //         <Users className="w-10 h-10 text-primary" />
    //         <h3 className="font-display text-xl font-semibold text-primary">Collaborative Learning</h3>
    //         <p className="font-body text-sm text-muted-foreground text-center">
    //           Share your work, get feedback, and learn from others in a collaborative environment.
    //         </p>
    //       </div>
    //       <div className="flex flex-col items-center gap-4">
    //         <Sparkles className="w-10 h-10 text-primary" />
    //         <h3 className="font-display text-xl font-semibold text-primary">Inspiration & Growth</h3>
    //         <p className="font-body text-sm text-muted-foreground text-center">
    //           Access resources, workshops, and events designed to inspire and help you grow as a writer.
    //         </p>
    //       </div>
    //     </div>
    //     <Link to="/about" className="inline-block mt-12">
    //       <Button variant="cta" size="lg">
    //         Learn More
    //       </Button>
    //     </Link>
    //   </div>
    // </section>
  );
}
export default AboutPreview;