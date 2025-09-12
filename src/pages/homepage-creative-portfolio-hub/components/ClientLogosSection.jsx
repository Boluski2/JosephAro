import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const ClientLogosSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => observer?.disconnect();
  }, []);

  const clients = [
    { name: "TechFlow", logo: "Zap", color: "text-blue-600" },
    { name: "EcoVision", logo: "Leaf", color: "text-green-600" },
    { name: "DesignHub", logo: "Palette", color: "text-purple-600" },
    { name: "DataCore", logo: "Database", color: "text-indigo-600" },
    { name: "CloudSync", logo: "Cloud", color: "text-cyan-600" },
    { name: "InnovateLab", logo: "Lightbulb", color: "text-yellow-600" },
    { name: "FinanceFlow", logo: "TrendingUp", color: "text-emerald-600" },
    { name: "MediaWorks", logo: "Play", color: "text-red-600" }
  ];

  const testimonialStats = [
    { number: "150+", label: "Projects Completed", icon: "CheckCircle" },
    { number: "98%", label: "Client Satisfaction", icon: "Heart" },
    { number: "50+", label: "Happy Clients", icon: "Users" },
    { number: "5+", label: "Years Experience", icon: "Award" }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-muted/20">
      <div className="container-brand">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-brand duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-success/10 rounded-full mb-6">
            <Icon name="Shield" size={16} className="text-success mr-2" />
            <span className="text-sm font-medium text-success">Trusted by Industry Leaders</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display">
            Partnering with
            <span className="text-gradient block">Visionary Brands</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            From startups to established enterprises, I've had the privilege of working with amazing clients who trust me to bring their visions to life.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className={`transition-brand duration-1000 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 mb-16">
            {clients?.map((client, index) => (
              <div
                key={index}
                className={`transition-brand duration-1000 delay-${index * 100} ${
                  isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
                }`}
              >
                <div className="group flex flex-col items-center p-6 rounded-xl hover:bg-white hover:shadow-brand transition-brand cursor-pointer">
                  <div className={`w-12 h-12 ${client?.color} mb-3 transition-brand group-hover:scale-110`}>
                    <Icon name={client?.logo} size={48} />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-brand">
                    {client?.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`transition-brand duration-1000 delay-600 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {testimonialStats?.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transition-brand duration-1000 delay-${700 + index * 100} ${
                    isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 shadow-brand">
                    <Icon name={stat?.icon} size={24} className="text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2 font-display">
                    {stat?.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                    {stat?.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={`mt-16 transition-brand duration-1000 delay-900 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-8">
              Recognized for excellence in creative design and client satisfaction
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center text-muted-foreground">
                <Icon name="Award" size={20} className="mr-2 text-accent" />
                <span className="text-sm font-medium">Design Excellence Award 2024</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Icon name="Star" size={20} className="mr-2 text-accent" />
                <span className="text-sm font-medium">Top Rated Creative Professional</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Icon name="CheckCircle" size={20} className="mr-2 text-accent" />
                <span className="text-sm font-medium">100% Project Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;