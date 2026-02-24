import { useState } from "react";
import Button from "../ui/Button";
import { ChevronLeft, ChevronRight, Home, Users, Map, Gift } from "lucide-react";


const features = [
  {
    icon: Home,
    title: "A Home for All Writers",
    description:
      "In our Writers' Circle, you're not just a member, you're family! Here, you ask questions, get ideas, relax, interact, and connect with other writers worldwide. This is more than just a virtual space, it's a home away from home with your pen pals all around you in our supportive community.",
  },
  {
    icon: Users,
    title: "Network with Fellow Writers",
    description:
      "Our Writer's Circle gives you a free 1-year VIP access to an online community. Make new pen pals, interact with award-winning writers, share your write-ups, and who knows – maybe even stumble upon your life partner. It's a warm, supportive atmosphere for all aspects of your writing adventure!",
  },
  {
    icon: Map,
    title: "Roadmap to Your Writing Career",
    description:
      "Our community has expert writers who are willing to support you in your career. Get inspired by checking out what others are doing. We'll publish your work on our blog, making you more visible and helping you improve your writing skills. Plus, we share writing gigs where you can earn extra cash.",
  },
  {
    icon: Gift,
    title: "A Cost-Free Zone",
    description:
      "Yep! You read that right - It's free! Our Writer's Circle is all about giving you a lift in your writing career with zero cost attached - it's all on the house! Join our writer's circle to enjoy the feeling of being surrounded by a supportive community without spending a dime.",
  },
];

function Offer() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };
  // const offers = [
  //   {
  //     title: "Personalized Feedback",
  //     description: "Get tailored feedback on your writing from experienced mentors.",
  //     icon: Home,
  //   },
  //   {
  //     title: "Community Support",
  //     description: "Join a supportive community of writers who share your passion.",
  //     icon: Users,
  //   },
  //   {
  //     title: "Global Connections",
  //     description: "Connect with writers from around the world and expand your network.",
  //     icon: Map,
  //   },
  //   {
  //     title: "Exclusive Resources",
  //     description: "Access a library of resources to help you improve your craft.",
  //     icon: Gift,
  //   },
  // ];

  // const [currentOffer, setCurrentOffer] = useState(0);

  // const handlePrev = () => {
  //   setCurrentOffer((prev) => (prev === 0 ? offers.length - 1 : prev - 1));
  // };
  
  // const handleNext = () => {
  //   setCurrentOffer((prev) => (prev === offers.length - 1 ? 0 : prev + 1));
  // };

  return (

    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-body text-sm font-medium text-primary uppercase tracking-wider mb-4">
            What We Offer
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            A Sneak Peek Into Our Circle
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Cards */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 p-8 md:p-12 bg-card rounded-2xl shadow-card"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {feature.title}
                      </h3>
                      <p className="font-body text-muted-foreground text-lg max-w-2xl">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="cta" size="xl">
            Join the Writer's Circle
          </Button>
        </div>
      </div>
    </section>

    // <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
    //   <div className="container-custom text-center">  
    //     <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-up">
    //       What We Offer
    //     </h2>
    //     <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: "0.1s" }}>
    //       At Writer's Circle, we provide a range of benefits to help you grow as a writer and connect with others who share your passion.
    //     </p>
    //     <div className="relative max-w-2xl mx-auto">
    //       <div className="card-elevated p-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
    //         <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
    //           {/* {offers[currentOffer].icon({ className: "w-6 h-6 text-primary" })} */}
    //         </div>
    //         <h3 className="font-display text-lg font-semibold text-foreground mb-2">
    //           {offers[currentOffer].title}
    //         </h3>
    //         <p className="font-body text-sm text-muted-foreground">
    //           {offers[currentOffer].description}
    //         </p>
    //       </div>
    //       <button
    //         className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
    //         onClick={handlePrev}
    //         aria-label="Previous offer"
    //       >
    //         <ChevronLeft className="w-5 h-5" />
    //       </button>
    //       <button
    //         className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
    //         onClick={handleNext}
    //         aria-label="Next offer"
    //       >
    //         <ChevronRight className="w-5 h-5" />
    //       </button>
    //     </div>
    //   </div>
    // </section>
  );
}

export default Offer;