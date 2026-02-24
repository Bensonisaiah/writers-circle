import Button from "../ui/Button";
import { ArrowRight, Feather } from "lucide-react";


function CTASection() {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 animate-float">
          <Feather className="w-20 h-20 text-primary-foreground" />
        </div>
        <div className="absolute bottom-10 right-20 animate-float" style={{ animationDelay: "1s" }}>
          <Feather className="w-16 h-16 text-primary-foreground rotate-45" />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Join Our Circle?
          </h2>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 mb-10">
            Become a part of a supportive community where writers connect, share ideas, 
            and grow together. It's free, it's fun, and it's family!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" className="group">
              Join the Writer's Circle
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;