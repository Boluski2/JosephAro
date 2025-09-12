import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CreativePhilosophySection = () => {
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

  const philosophyPoints = [
    {
      icon: "Lightbulb",
      title: "visionary leader",
      description: "Joseph Aro stands out as a visionary leader in the geospatial domain, bringing over a ​decade of breakthrough innovations and strategic."
    },
    {
      icon: "Users",
      title: "GIS and data analytics",
      description: "His exceptional command over UAV technologies, GIS and data analytics has not only ​surpassed industry standards but also facilitated cutting-edge solutions globally."
    },
    {
      icon: "Target",
      title: "academic pedigree",
      description: "His academic pedigree, a master's in Geography and environmental management with a ​focus on GIS and Climate Change."
    },
    {
      icon: "Zap",
      title: "innovation and leadership",
      description: "His candidacy doesn't just demand attention—it compels an investment well beyond the ​ordinary, promising an unmatched caliber of innovation and leadership."
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-muted/30">
      <div className="container-brand">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className={`transition-brand duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full mb-6">
              <Icon name="Heart" size={16} className="text-secondary mr-2" />
              <span className="text-sm font-medium text-secondary">Creative Philosophy</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display">
              The Creative
              <span className="text-gradient block">Architect</span>
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
               Born in the beautiful country of Nigeria, a legal resident of Canada, Joseph Aro is a creative ​geospatial professional with footprints in the expansive catalog of the Built Environment.
              </p>
              
              <blockquote className="border-l-4 border-accent pl-6 italic text-lg text-foreground/80 mb-8">
                “We are what we repeatedly do. Excellence, therefore is ​not an act, but a habit.” Aristotle
              </blockquote>
            </div>

            {/* Philosophy Points */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {philosophyPoints?.map((point, index) => (
                <div 
                  key={index}
                  className={`transition-brand duration-1000 delay-${index * 100} ${
                    isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center shadow-brand">
                      <Icon name={point?.icon} size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{point?.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point?.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about-experience-personal-brand-story">
                <Button 
                  variant="default" 
                  iconName="User" 
                  iconPosition="left"
                  className="bg-gradient-brand hover:opacity-90"
                >
                  My Story
                </Button>
              </Link>
              <Link to="/services-hub-capability-showcase">
                <Button 
                  variant="outline" 
                  iconName="Settings" 
                  iconPosition="right"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div className={`transition-brand duration-1000 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-brand-lg">
                <Image
                  src='/image/jor.png'
                  alt="Joseph Aro - Creative Architect"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-brand-lg p-6 animate-float">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">150+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-brand-lg p-6 animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/4 -left-4 w-8 h-8 bg-accent/20 rounded-full animate-pulse-subtle"></div>
              <div className="absolute bottom-1/3 -right-2 w-6 h-6 bg-secondary/20 rounded-full animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativePhilosophySection;