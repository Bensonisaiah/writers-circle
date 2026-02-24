import Button from "../ui/Button";
import { ArrowRight, Feather, BookOpen } from "lucide-react";

function HeroSection() {


  return (
    // <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
    //   <div className="container-custom text-center">
    //     <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
    //       Welcome to the Writer's Circle
    //     </h1>
    //     <p className="text-xl md:text-2xl font-body text-muted-foreground max-w-2xl mx-auto mb-8">
    //       A community for writers to connect, learn, and grow together.
    //     </p>
    //     <div className="flex justify-center gap-4">
    //       <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
    //         Join Now
    //       </button>
    //       <button className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors">
    //         Learn More
    //       </button>
    //     </div>
    //   </div>
    // </section>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/85">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <Feather className="w-16 h-16 text-primary-foreground" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "1s" }}>
          <BookOpen className="w-20 h-20 text-primary-foreground" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float" style={{ animationDelay: "2s" }}>
          <Feather className="w-12 h-12 text-primary-foreground rotate-45" />
        </div>
        <div className="absolute bottom-20 right-1/3 animate-float" style={{ animationDelay: "0.5s" }}>
          <BookOpen className="w-14 h-14 text-primary-foreground" />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />

      <div className="container-custom relative z-10 px-4 pt-20 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm mb-8 animate-fade-up mt-4">
            <span className="font-body text-sm text-primary-foreground/90">
              Write. Learn. Connect.
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Discover How to Get Better as a{" "}
            <span className="relative">
              Writer
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C50 2 150 2 198 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-cta"/>
              </svg>
            </span>
          </h1>

          {/* Subheading */}
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Join our community of like minds. More than a writer's community, we are family!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="cta" size="xl" className="group">
              Join Our Community
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-primary-foreground/20 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">500+</p>
              <p className="font-body text-sm text-primary-foreground/70 mt-1">Active Writers</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">50+</p>
              <p className="font-body text-sm text-primary-foreground/70 mt-1">Countries</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">Free</p>
              <p className="font-body text-sm text-primary-foreground/70 mt-1">Forever</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="-mb-1 absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full">
          <path d="M0 50C240 100 480 0 720 50C960 100 1200 0 1440 50V100H0V50Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;