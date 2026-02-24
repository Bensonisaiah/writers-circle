import Header from "../Components/Nav/Nav.jsx";
import Footer from "../Components/Nav/Footer";
import Button from "../Components/ui/Button.jsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Components/ui/Accordion.jsx";
import { ArrowRight, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Is the Writer's Circle free?",
    answer: "Yes! Our community is completely free for all writers. We are a non-profit organization committed to helping writers grow without any financial barriers.",
  },
  {
    question: "How do I join the Writer's Circle?",
    answer: "Joining is easy! Click the link directing you to WhatsApp, log in and follow the provided instructions. Take a moment to read the community rules, then send a brief introduction of yourself to any admin for verification. Once verified, congratulations, you're officially in!",
  },
  {
    question: "Why should I be a part of the Writer's Circle?",
    answer: "Our Writer's Circle allows you to enjoy a supportive space where writers connect, share ideas, and grow together. It's a vibrant community that encourages creativity, learning, and networking with writers from around the world.",
  },
  {
    question: "Is the community open to non-writers?",
    answer: "While our primary focus is on writers, we welcome anyone with an interest in writing, storytelling, or those looking to learn and engage within our circle. Everyone who appreciates the written word is welcome!",
  },
  {
    question: "What happens within the circle?",
    answer: "The circle is a space for discussions, sharing work, seeking advice, and connecting with fellow writers. We also organize events, workshops, and provide opportunities for growth within the writing world.",
  },
  {
    question: "Can I drop articles on the Writer's Circle?",
    answer: "Absolutely! We encourage members to share their work and ideas with the community. It's a great way to get feedback, gain visibility, and connect with other writers who share your interests.",
  },
  {
    question: "How do I get a mentor in the circle?",
    answer: "Reach out to any of the admins for guidance on choosing the right mentor and how you can connect with them. However, not all mentorships are free, and a commitment fee may be required depending on the mentor.",
  },
  {
    question: "How do I become a mentor within the circle?",
    answer: "If you have experience and are willing to share your knowledge, reach out to the admins expressing your interest in becoming a mentor. We're always looking for experienced writers to guide newcomers.",
  },
];

function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/10">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block font-body text-sm font-medium text-primary uppercase tracking-wider mb-4">
                FAQ
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Frequently Asked <span className="text-primary">Questions</span>
              </h1>
              <p className="font-body text-lg md:text-xl text-muted-foreground">
                Everything you need to know about the Writer's Circle.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="card-elevated px-6 border-none animate-fade-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <AccordionTrigger className="font-display text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-muted-foreground pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center card-elevated p-12">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h2>
              <p className="font-body text-muted-foreground mb-6">
                Can't find the answer you're looking for? Reach out to us on WhatsApp!
              </p>
              <a
                href="https://wa.me/2349071102313"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="cta" size="lg" className="group">
                  Contact Us on WhatsApp
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default FAQ;