import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
// import Button from '../../../components/ui/Button';

const ServicesPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Reduced threshold for better mobile detection
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => observer?.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      icon: "Map",
      title: "Geospatial Analysis",
      subtitle: "Data-Driven Insights",
      description: "Advanced spatial data analysis to uncover patterns, relationships, and trends. Transform raw geospatial data into actionable intelligence for informed decision-making.",
      features: ["Spatial Pattern Recognition", "Hotspot Analysis", "Terrain Modeling", "Environmental Impact Assessment"],
      gradient: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      image: "/image/LIDAR.png"
    },
    {
      id: 2,
      icon: "Globe",
      title: "Cartography & Visualization",
      subtitle: "Storytelling Through Maps",
      description: "Creating compelling visual representations of spatial data that communicate complex information clearly. Custom maps that tell your story with precision and aesthetic appeal.",
      features: ["Thematic Mapping", "3D Terrain Visualization", "Interactive Web Maps", "Data Storytelling"],
      gradient: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      image: "/image/map.png"
    },
    {
      id: 3,
      icon: "Layers",
      title: "Environmental Mapping",
      subtitle: "Ecosystem Intelligence",
      description: "Comprehensive environmental mapping services that provide insights into natural resources, habitat analysis, and environmental changes over time.",
      features: ["Habitat Mapping", "Natural Resource Inventory", "Climate Change Analysis", "Conservation Planning"],
      gradient: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
      image: "/image/forest.png"
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden bg-black/5">
      {/* Replaced container-brand with standard container classes */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-8 md:mb-16 transition-brand duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4 md:mb-6">
            <Icon name="Navigation" size={16} className="text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Geo-Spatial Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 font-display">
            Comprehensive Geospatial
            <span className="text-gradient block">Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance px-4">
            With footprints in virtually all verticals in the environmental sector, I bring a bird's eye view to your projects, seeing stories in data and solutions in every problem.
          </p>
          
          {/* Quote section */}
          <div className="mt-8 md:mt-12 p-4 md:p-6 bg-muted/50 rounded-2xl max-w-2xl mx-auto">
            <blockquote className="text-base md:text-lg italic text-center text-foreground/90 mb-2 md:mb-4">
              "Life begins when fear ends"
            </blockquote>
            <p className="text-center text-muted-foreground text-sm md:text-base">Anonymous</p>
          </div>
        </div>

        {/* Services Grid - Fixed responsive classes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {services?.map((service, index) => (
            <div
              key={service?.id}
              className={`transition-brand duration-1000 delay-${index * 200} ${
                isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
              }`}
              onMouseEnter={() => setHoveredService(service?.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className={`card-brand p-0 h-full group cursor-pointer overflow-hidden transition-brand hover:shadow-brand-lg ${
                hoveredService === service?.id ? 'transform -translate-y-2' : ''
              }`}>
                {/* Service image header */}
                <div className="h-40 sm:h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-60`}></div>
                  <div className="absolute bottom-4 left-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 bg-background/90 rounded-xl flex items-center justify-center mb-2 transition-brand group-hover:scale-110`}>
                      <Icon name={service?.icon} size={20} className={service?.iconColor} />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-background font-display">{service?.title}</h3>
                    <p className="text-xs font-bold text-background uppercase tracking-wide">{service?.subtitle}</p>
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  {/* Description */}
                  <p className="text-muted-foreground mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                    {service?.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    {service?.features?.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs md:text-sm">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-accent rounded-full mr-2 md:mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Overview */}
        <div className={`transition-brand duration-1000 delay-600 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-muted/30 rounded-2xl p-6 md:p-8 lg:p-12">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4 font-display">My Geospatial Process</h3>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                A proven methodology that ensures every project delivers exceptional results through spatial thinking and technical excellence.
              </p>
            </div>

            {/* Fixed responsive classes for process steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { step: "01", title: "Discover", description: "Understanding your spatial challenges, data requirements, and project objectives through comprehensive consultation." },
                { step: "02", title: "Analyze", description: "Processing and examining geospatial data to extract meaningful patterns, relationships, and insights." },
                { step: "03", title: "Visualize", description: "Creating compelling visual representations that communicate spatial information effectively to stakeholders." },
                { step: "04", title: "Implement", description: "Delivering actionable solutions with ongoing support, monitoring, and measurable impact assessment." }
              ]?.map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-brand">
                    <span className="text-white font-bold text-sm md:text-lg">{phase?.step}</span>
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">{phase?.title}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{phase?.description}</p>
                </div>
              ))}
            </div>
            
            {/* Personal signature */}
            <div className="mt-12 md:mt-16 p-4 md:p-6 bg-black rounded-xl max-w-md mx-auto text-center">
              <p className="text-white font-medium mb-2 text-xl md:text-2xl">
                <span className="font-semibold">Joseph</span> - Seeing solutions in every problem
              </p>
              <p className="text-sm md:text-base text-white font-bold">
                With a coat of many colors and expertise across environmental sectors
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;