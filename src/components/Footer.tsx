import { Instagram, Facebook, Twitter, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  const phoneNumber = "+1234567890";
  const whatsappMessage = "Hello! I'm interested in joining IronForge Gym.";

  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-black text-gradient">IRONFORGE</span>
              <span className="text-2xl font-black text-foreground">GYM</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Transform your body, transform your life. Join the most powerful 
              fitness community in the city.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors group"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors group"
              >
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors group"
              >
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Contact Us</h3>
            <div className="space-y-3 mb-6">
              <p className="text-muted-foreground">123 Fitness Street</p>
              <p className="text-muted-foreground">Muscle City, MC 12345</p>
              <p className="text-muted-foreground">Phone: +1 (234) 567-890</p>
            </div>
            <div className="flex gap-3">
              <a 
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-2 btn-fire px-4 py-2 rounded-full text-primary-foreground font-semibold text-sm"
              >
                <Phone size={16} />
                Call
              </a>
              <a 
                href={`https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] px-4 py-2 rounded-full text-white font-semibold text-sm transition-all"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 IronForge Gym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
