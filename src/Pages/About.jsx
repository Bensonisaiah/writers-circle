import Header from "../Components/Nav/Nav.jsx";
import Footer from "../Components/Nav/Footer";
import Button from "../Components/ui/Button.jsx";
import { Heart, Globe, Users, BookOpen, ArrowRight } from "lucide-react";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-primary/3">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-primary/10 via-accent/5 to-silver/20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-cta/10 rounded-full blur-3xl" />
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block font-body text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Our Story
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Good Vibes and <span className="text-primary">Great Stories</span>
              </h1>
              <p className="font-body text-lg md:text-xl text-muted-foreground">
                We are a not-for-profit organization bringing writers together from around the world.
              </p>
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="section-padding bg-gradient-to-r from-background via-accent/5 to-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="animate-fade-up">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  How It All Began
                </h2>
                <p className="font-body text-lg text-muted-foreground mb-6">
                  Our story began in a karaoke club where we saw friends singing together 
                  and we thought, why not create a space where writers can dance to the 
                  same tune from all over the world?
                </p>
                <p className="font-body text-muted-foreground mb-6">
                  So, we brought the Writer's Circle to life – a chill space where everyone 
                  and anyone can be a part of.
                </p>
                <p className="font-body text-muted-foreground">
                  This space allows you to connect with writers across all niches, share ideas, 
                  and get creative with your pen. It's all about having fun with words and making 
                  memories with other writers within the circle!
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <div className="card-elevated p-6 bg-gradient-to-br from-background to-primary/5 border border-primary/10">
                  <Heart className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Non-Profit
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    Driven by passion, not profit
                  </p>
                </div>
                <div className="card-elevated p-6 bg-gradient-to-br from-background to-cta/5 border border-cta/10">
                  <Globe className="w-10 h-10 text-cta mb-4" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Global Reach
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    Writers from 50+ countries
                  </p>
                </div>
                <div className="card-elevated p-6 bg-gradient-to-br from-background to-silver/20 border border-silver/20">
                  <Users className="w-10 h-10 text-silver-dark mb-4" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Community
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    More than members, we're family
                  </p>
                </div>
                <div className="card-elevated p-6 bg-gradient-to-br from-background to-accent/20 border border-accent/20">
                  <BookOpen className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Growth
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    Learn and evolve together
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="section-padding bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-cta/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-8">
                To create a supportive, inclusive, and inspiring community where writers 
                from all backgrounds can connect, learn, and grow together. We believe 
                that every voice deserves to be heard and every story deserves to be told.
              </p>
              <Button variant="cta" size="xl" className="group">
                Join Our Community
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default About;