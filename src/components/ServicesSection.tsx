import { Dumbbell, Users, Heart, Timer, Trophy, Salad } from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description: "Build muscle and increase power with our premium free weights and machines."
  },
  {
    icon: Heart,
    title: "Cardio Zone",
    description: "State-of-the-art treadmills, bikes, and rowing machines for peak cardiovascular health."
  },
  {
    icon: Users,
    title: "Group Classes",
    description: "From HIIT to yoga, join our energizing group sessions led by certified instructors."
  },
  {
    icon: Trophy,
    title: "Personal Training",
    description: "One-on-one coaching tailored to your goals with our elite personal trainers."
  },
  {
    icon: Timer,
    title: "CrossFit Area",
    description: "Dedicated functional fitness zone for high-intensity cross-training workouts."
  },
  {
    icon: Salad,
    title: "Nutrition Guidance",
    description: "Expert diet plans and supplements advice to fuel your transformation."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-foreground">OUR </span>
            <span className="text-gradient">SERVICES</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to achieve your fitness goals under one roof
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl card-glow group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
