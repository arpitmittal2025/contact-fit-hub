import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const phoneNumber = "+1234567890";
  const whatsappMessage = "Hello! I'm interested in joining IronForge Gym.";

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-foreground">GET IN </span>
            <span className="text-gradient">TOUCH</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start your fitness journey? Contact us today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">Our Location</h3>
                <p className="text-muted-foreground">123 Fitness Street, Muscle City, MC 12345</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">Opening Hours</h3>
                <p className="text-muted-foreground">Monday - Sunday: Open 24/7</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-2xl overflow-hidden h-80 lg:h-auto card-glow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d-122.4194154!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d8d7c6ef%3A0x2c2ca54d1f5cf8ae!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gym Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
