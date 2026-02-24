import Footer from '../Components/Nav/Footer.jsx';
import Nav from '../Components/Nav/Nav.jsx';
import AboutPreview from '../Components/home/AboutPreview.jsx';
import Offer from '../Components/home/Offer.jsx';
import HeroSection from '../Components/home/HeroSection.jsx';
import Session from '../Components/home/Session.jsx';
import President from '../Components/home/President.jsx';
import Testimonial from '../Components/home/Testimonial.jsx';
import CTASection from '../Components/home/CTASection.jsx';

function Index() {

  return (
    <>
      <div className="min-h-screen bg-background bg-red-50 gap-8">
        <Nav />
        <main>
          <HeroSection />
          <AboutPreview />
          <Offer/>
          <Session />
          <President />
          <Testimonial />
          <CTASection />
        </main>
        <Footer />
      </div>

    </>
  )
}

export default Index;