import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { Heart, Cpu, Sparkles, Film, Lightbulb } from "lucide-react";



const sessions = [
  {
    icon: Heart,
    title: "Lifestyle",
    description: "Health, Wellness, and Parenting topics",
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    icon: Cpu,
    title: "Tech",
    description: "Technology and innovation in writing",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Sparkles,
    title: "Writer's Spotlight",
    description: "Featuring exceptional writers",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Film,
    title: "Behind-the-Scene",
    description: "Inside look at the writing process",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Lightbulb,
    title: "Inspiration Hub",
    description: "Creative ideas and motivation",
    color: "bg-emerald-500/10 text-emerald-600",
  },
];




function Session() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-body text-sm font-medium text-primary uppercase tracking-wider mb-4">
            What We Cover
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Sessions
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive into diverse topics that fuel your creativity and expand your writing horizons.
          </p>
        </div>

        {/* Sessions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sessions.map((session, index) => {
            const Icon = session.icon;
            return (
              <div
                key={session.title}
                className="card-elevated p-6 hover:shadow-elevated transition-all duration-300 group cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-14 h-14 rounded-xl ${session.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {session.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {session.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/sessions">
            <Button variant="outline" size="lg">
              Explore All Sessions
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 

export default Session;