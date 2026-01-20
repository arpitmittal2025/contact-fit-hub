import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  const phoneNumber = "+1234567890";
  const whatsappMessage = "Hello! I'm interested in joining IronForge Gym.";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-foreground">FORGE YOUR</span>
            <br />
            <span className="text-gradient">ULTIMATE BODY</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
            Transform your life with world-class equipment, expert trainers, and a community 
            that pushes you to be your best self.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center gap-2 btn-fire px-8 py-4 rounded-full text-primary-foreground font-bold text-lg"
            >
              <Phone size={22} />
              Call Us Now
            </a>
            
            <a 
              href={`https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] px-8 py-4 rounded-full text-white font-bold text-lg transition-all hover:-translate-y-0.5"
            >
              <MessageCircle size={22} />
              WhatsApp Us
            </a>
          </div>

          <div className="mt-12 flex gap-8">
            <div>
              <p className="text-4xl font-black text-gradient">500+</p>
              <p className="text-muted-foreground">Active Members</p>
            </div>
            <div>
              <p className="text-4xl font-black text-gradient">15+</p>
              <p className="text-muted-foreground">Expert Trainers</p>
            </div>
            <div>
              <p className="text-4xl font-black text-gradient">24/7</p>
              <p className="text-muted-foreground">Open Hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
