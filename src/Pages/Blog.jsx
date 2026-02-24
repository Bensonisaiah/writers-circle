import Header from "../Components/Nav/Nav.jsx";
import Footer from "../Components/Nav/Footer";
import Button from "../Components/ui/Button.jsx";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";


const blogPosts = [
  {
    id: 1,
    title: "What Every Writer Should Know in Their Career",
    excerpt:
      "Starting a writing career can be overwhelming. Here are the essential things every writer should know to succeed in this competitive field.",
    author: "Dorathy Benson",
    date: "January 5, 2026",
    readTime: "5 min read",
    category: "Career",
    featured: true,
  },
  {
    id: 2,
    title: "5 Tools to Improve Your Writing",
    excerpt:
      "Discover the essential tools that can help you become a better writer, from grammar checkers to productivity apps.",
    author: "Jennifer Xavier",
    date: "January 3, 2026",
    readTime: "4 min read",
    category: "Tech",
  },
  {
    id: 3,
    title: "Quick Tips to Make Your Writing Visible to Clients",
    excerpt:
      "Learn how to market yourself and get your work in front of the right people to land more writing gigs.",
    author: "Steve Oyede",
    date: "January 1, 2026",
    readTime: "6 min read",
    category: "Marketing",
  },
  {
    id: 4,
    title: "Different Types of Writers: Which One Are You?",
    excerpt:
      "From copywriters to novelists, explore the different types of writers and find where your passion lies.",
    author: "Oji Naomi",
    date: "December 28, 2025",
    readTime: "7 min read",
    category: "Lifestyle",
  },
  {
    id: 5,
    title: "How to Get Inspiration When You're Stuck",
    excerpt:
      "Writer's block is real. Here are proven strategies to overcome it and get your creative juices flowing again.",
    author: "Dorathy Benson",
    date: "December 25, 2025",
    readTime: "5 min read",
    category: "Inspiration",
  },
  {
    id: 6,
    title: "Simple Ways to Make Money as a Writer",
    excerpt:
      "Explore various income streams available to writers, from freelancing to creating passive income with your words.",
    author: "Jennifer Xavier",
    date: "December 22, 2025",
    readTime: "8 min read",
    category: "Career",
  },
];


function Blog() {

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);


  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/10">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block font-body text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Our Blog
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Stories, Tips & <span className="text-primary">Inspiration</span>
              </h1>
              <p className="font-body text-lg md:text-xl text-muted-foreground">
                Insights and advice from writers in our community to help you grow.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="card-elevated overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-primary/20 to-accent/30 flex items-center justify-center">
                    <span className="font-display text-6xl text-primary/30">Featured</span>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-body font-medium w-fit mb-4">
                      {featuredPost.category}
                    </span>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="font-body text-muted-foreground mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <Button variant="default" className="w-fit group">
                      Read Article
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              Latest Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="card-elevated overflow-hidden group cursor-pointer animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center group-hover:from-primary/20 transition-all">
                    <span className="font-display text-3xl text-primary/30">{post.category}</span>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-body font-medium mb-3">
                      {post.category}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center card-elevated p-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Want to Write for Us?
              </h2>
              <p className="font-body text-muted-foreground mb-6">
                Join our community and get your articles published on our blog for free!
              </p>
              <Button variant="cta" size="lg" className="group">
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

export default Blog;