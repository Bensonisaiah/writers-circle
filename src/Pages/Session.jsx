import Header from "../Components/Nav/Nav.jsx";
import Footer from "../Components/Nav/Footer";
import Button from "../Components/ui/Button.jsx";
import { Heart, Cpu, Sparkles, Film, Lightbulb, ArrowRight } from "lucide-react";

const sessions = [
  {
    icon: Heart,
    title: "Lifestyle",
    description:
      "Explore writing topics around health, wellness, and parenting. Connect with writers who share your passion for lifestyle content and learn how to create engaging articles that resonate with readers.",
    topics: ["Health & Wellness", "Parenting", "Self-Care", "Lifestyle Tips"],
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    icon: Cpu,
    title: "Tech",
    description:
      "Dive into the world of technology writing. From software reviews to tech tutorials, learn how to break down complex topics and make them accessible to your audience.",
    topics: ["Tech Reviews", "How-To Guides", "Industry News", "Digital Trends"],
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Sparkles,
    title: "Writer's Spotlight",
    description:
      "Get featured and feature others! This session celebrates exceptional writers in our community, sharing their journeys, tips, and inspiring stories.",
    topics: ["Success Stories", "Writer Interviews", "Tips & Tricks", "Career Journeys"],
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Film,
    title: "Behind-the-Scene",
    description:
      "Ever wondered what goes into creating great content? This session gives you an inside look at the writing process, from ideation to publication.",
    topics: ["Writing Process", "Content Strategy", "Editorial Workflow", "Case Studies"],
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Lightbulb,
    title: "Inspiration Hub",
    description:
      "Need a creative boost? The Inspiration Hub is your go-to for fresh ideas, writing prompts, and motivation to keep your creative juices flowing.",
    topics: ["Writing Prompts", "Creative Ideas", "Motivation", "Overcoming Blocks"],
    color: "bg-emerald-500/10 text-emerald-600",
  },
];

function Session() {

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/10">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block font-body text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Our Sessions
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Explore <span className="text-primary">What We Cover</span>
              </h1>
              <p className="font-body text-lg md:text-xl text-muted-foreground">
                Dive into diverse topics that fuel your creativity and expand your writing horizons.
              </p>
            </div>
          </div>
        </section>

        {/* Sessions */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="space-y-8">
              {sessions.map((session, index) => {
                const Icon = session.icon;
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={session.title}
                    className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center card-elevated p-8 md:p-12 animate-fade-up`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={isEven ? "" : "lg:order-2"}>
                      <div
                        className={`w-16 h-16 rounded-2xl ${session.color} flex items-center justify-center mb-6`}
                      >
                        <Icon className="w-8 h-8" />
                      </div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {session.title}
                      </h2>
                      <p className="font-body text-muted-foreground mb-6">
                        {session.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {session.topics.map((topic) => (
                          <span
                            key={topic}
                            className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-body"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div
                      className={`aspect-video rounded-xl bg-gradient-to-br from-primary/10 to-accent/30 flex items-center justify-center ${
                        isEven ? "" : "lg:order-1"
                      }`}
                    >
                      <Icon className="w-24 h-24 text-primary/30" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Explore?
              </h2>
              <p className="font-body text-lg text-primary-foreground/80 mb-8">
                Join our community and be a part of these exciting sessions.
              </p>
              <Button variant="cta" size="xl" className="group">
                Join the Writer's Circle
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

export default Session;