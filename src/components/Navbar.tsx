import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-gradient">IRONFORGE</span>
            <span className="text-2xl font-black text-foreground">GYM</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground/80 hover:text-primary transition-colors">Home</a>
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
          </div>

          <a 
            href="tel:+1234567890" 
            className="hidden md:flex items-center gap-2 btn-fire px-4 py-2 rounded-full text-primary-foreground font-semibold"
          >
            <Phone size={18} />
            Call Now
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-foreground/80 hover:text-primary transition-colors">Home</a>
              <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
              <a 
                href="tel:+1234567890" 
                className="flex items-center gap-2 btn-fire px-4 py-2 rounded-full text-primary-foreground font-semibold w-fit"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
