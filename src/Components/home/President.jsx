import { Quote } from "lucide-react";
import presidentImage from "../../assets/testing.png";

function President() {
  return (<section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-fade-up">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated bg-accent">
              <img
                src={presidentImage}
                alt="Dorathy Benson - President of The Writer's Circle"
                className="w-full h-full object-cover"
              />
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <span className="font-display text-4xl text-primary font-bold">DB</span>
                  </div>
                  <p className="font-body text-muted-foreground">Dorathy Benson</p>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-cta/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary/10 rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <span className="inline-block font-body text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Meet Our Leader
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              The Writer's Circle President
            </h2>
            <h3 className="font-display text-xl md:text-2xl font-semibold text-primary mb-6">
              Dorathy Benson
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Transitioning from a spoken word artist, presenter, photographer, and writer, 
              Dorathy Benson is certainly multi-talented with a wealth of experience in crafting 
              content and copies that grab the reader's attention.
            </p>
            <p className="font-body text-muted-foreground mb-6">
              She has worked for several multinational companies where she contributed her skills 
              to the growth and success of the company. Beyond her career, Dorathy has a soft 
              heart for children and people with disabilities which has led her to several 
              initiatives and voluntary services.
            </p>
            <p className="font-body text-muted-foreground">
              Dorathy's passion for helping people has led to the creation of the Writer's Circle, 
              a non-profit organization offering writers a space to elevate their careers while 
              being a part of a supportive community that feels like home.
            </p>
          </div>
        </div>
      </div>
    </section>);
}

export default President;