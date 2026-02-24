import { Link } from "react-router-dom";
import { Feather, Instagram, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Feather className="w-8 h-8" />
              <span className="font-display text-xl font-semibold">
                Writer's Circle
              </span>
            </Link>
            <p className="font-body text-primary-foreground/80 max-w-md mb-6">
              More than a writer's community, we are family! Join us to connect, 
              learn, and grow with fellow writers from around the world.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/2348100289093"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/izibillions_one.and.only?igsh=OHhkaDc5N3U5Ymps"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:isaiahobenson@gmail.com"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 font-body text-primary-foreground/80">
              <li>
                <Link to="/about" className="hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/sessions" className="hover:text-primary-foreground transition-colors">
                  Sessions
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 font-body text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <a 
                  href="https://wa.me/2348100289093"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  +234 810 028 9093
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center font-body text-primary-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} Writer's Circle. All rights reserved.</p>
          <p className="mt-2">Write. Learn. Connect.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
