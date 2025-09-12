import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedWorkCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredProjects = [
    {
      id: 1,
      title: "EcoTech Solutions",
      category: "Brand Identity & Digital Experience",
      description: "Complete brand transformation for a sustainable technology startup, including logo design, brand guidelines, and responsive web platform that increased user engagement by 340%.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["Branding", "Web Design", "UX/UI"],
      results: "340% increase in engagement",
      color: "from-emerald-500 to-teal-600"
    },
    {
      id: 2,
      title: "Artisan Marketplace",
      category: "E-commerce Platform Design",
      description: "Crafted an immersive digital marketplace connecting local artisans with global customers. The platform features intuitive navigation and storytelling elements that boosted sales by 280%.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?w=800&h=600&fit=crop",
      tags: ["E-commerce", "UX Design", "Mobile"],
      results: "280% sales increase",
      color: "from-amber-500 to-orange-600"
    },
    {
      id: 3,
      title: "FinanceFlow App",
      category: "Mobile App & Dashboard",
      description: "Designed a comprehensive financial management app with intuitive dashboards and data visualization. The clean interface reduced user onboarding time by 65% while increasing retention.",
      image: "https://images.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg?w=800&h=600&fit=crop",
      tags: ["Mobile App", "Dashboard", "FinTech"],
      results: "65% faster onboarding",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 4,
      title: "Wellness Studio",
      category: "Brand & Digital Presence",
      description: "Created a holistic brand identity and digital ecosystem for a premium wellness studio. The serene design language and seamless booking system increased client bookings by 220%.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
      tags: ["Wellness", "Branding", "Booking System"],
      results: "220% booking increase",
      color: "from-purple-500 to-pink-600"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredProjects?.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects?.length) % featuredProjects?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-brand">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full mb-6">
            <Icon name="Star" size={16} className="text-accent mr-2" />
            <span className="text-sm font-medium text-accent">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display">
            Transformative Digital
            <span className="text-gradient block">Experiences</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore signature projects that showcase the intersection of creativity, strategy, and technical excellence.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-brand-lg">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredProjects?.map((project, index) => (
                <div key={project?.id} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
                    {/* Image Section */}
                    <div className="relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project?.color} opacity-20`}></div>
                      <Image
                        src={project?.image}
                        alt={project?.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute top-6 left-6">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                          <span className="text-sm font-medium text-primary">{project?.category}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="bg-card p-8 lg:p-12 flex flex-col justify-center">
                      <div className="mb-6">
                        <h3 className="text-3xl font-bold text-foreground mb-4 font-display">
                          {project?.title}
                        </h3>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                          {project?.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project?.tags?.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Results */}
                      <div className="mb-8">
                        <div className="flex items-center text-success">
                          <Icon name="TrendingUp" size={20} className="mr-2" />
                          <span className="font-semibold">{project?.results}</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex gap-4">
                        <Link to="/work-portfolio-interactive-showcase">
                          <Button 
                            variant="default" 
                            iconName="ExternalLink" 
                            iconPosition="right"
                            className="bg-gradient-brand hover:opacity-90"
                          >
                            View Case Study
                          </Button>
                        </Link>
                        <Link to="/contact-gateway-connection-hub">
                          <Button 
                            variant="outline" 
                            iconName="MessageCircle" 
                            iconPosition="left"
                          >
                            Discuss Project
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-brand flex items-center justify-center transition-brand hover:bg-white hover:shadow-brand-lg z-10"
            aria-label="Previous project"
          >
            <Icon name="ChevronLeft" size={20} className="text-primary" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-brand flex items-center justify-center transition-brand hover:bg-white hover:shadow-brand-lg z-10"
            aria-label="Next project"
          >
            <Icon name="ChevronRight" size={20} className="text-primary" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {featuredProjects?.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-brand ${
                  index === currentSlide 
                    ? 'bg-primary shadow-brand' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link to="/work-portfolio-interactive-showcase">
            <Button 
              variant="outline" 
              size="lg"
              iconName="Grid" 
              iconPosition="left"
              className="border-2 hover:border-accent hover:text-accent"
            >
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkCarousel;