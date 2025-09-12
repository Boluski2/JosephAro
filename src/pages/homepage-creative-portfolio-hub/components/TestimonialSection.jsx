import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CEO & Founder",
      company: "EcoTech Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: `Joseph transformed our entire brand identity and digital presence. The new website increased our user engagement by 340% and our conversion rate by 180%. His strategic approach to design thinking made all the difference.`,
      results: "340% increase in engagement, 180% boost in conversions",
      rating: 5,
      project: "Complete Brand & Digital Transformation"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Creative Director",
      company: "Artisan Marketplace",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: `Working with Joseph was an absolute game-changer. His ability to understand our vision and translate it into a stunning e-commerce platform exceeded all expectations. Sales increased by 280% within the first quarter.`,
      results: "280% sales increase in Q1",
      rating: 5,
      project: "E-commerce Platform Design"
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Product Manager",
      company: "FinanceFlow",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: `Joseph's UX expertise is unmatched. He redesigned our financial app interface, reducing user onboarding time by 65% while significantly improving user retention. The attention to detail and user psychology is remarkable.`,
      results: "65% faster onboarding, improved retention",
      rating: 5,
      project: "Mobile App UX/UI Redesign"
    },
    {
      id: 4,
      name: "David Park",
      role: "Marketing Director",
      company: "Wellness Studio",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: `The brand identity and digital ecosystem Joseph created for our wellness studio perfectly captured our essence. Client bookings increased by 220%, and our brand recognition in the local market has skyrocketed.`,
      results: "220% booking increase, enhanced brand recognition",
      rating: 5,
      project: "Brand Identity & Digital Presence"
    }
  ];

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

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="container-brand">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-brand duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-warning/10 rounded-full mb-6">
            <Icon name="MessageSquare" size={16} className="text-warning mr-2" />
            <span className="text-sm font-medium text-warning">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display">
            What Clients Say About
            <span className="text-gradient block">Working Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Real results from real partnerships. Discover how strategic design thinking transforms businesses and creates lasting impact.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className={`max-w-5xl mx-auto transition-brand duration-1000 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          <div className="relative overflow-hidden rounded-2xl shadow-brand-lg bg-card">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials?.map((testimonial, index) => (
                <div key={testimonial?.id} className="w-full flex-shrink-0">
                  <div className="p-8 lg:p-12">
                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                      {/* Client Info */}
                      <div className="text-center lg:text-left">
                        <div className="relative inline-block mb-6">
                          <Image
                            src={testimonial?.avatar}
                            alt={testimonial?.name}
                            className="w-24 h-24 rounded-full object-cover shadow-brand"
                          />
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center shadow-brand">
                            <Icon name="CheckCircle" size={16} className="text-white" />
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-foreground mb-2">{testimonial?.name}</h3>
                        <p className="text-accent font-medium mb-1">{testimonial?.role}</p>
                        <p className="text-sm text-muted-foreground mb-4">{testimonial?.company}</p>
                        
                        <div className="flex justify-center lg:justify-start mb-4">
                          {renderStars(testimonial?.rating)}
                        </div>
                        
                        <div className="text-sm text-muted-foreground">
                          <Icon name="Briefcase" size={14} className="inline mr-1" />
                          {testimonial?.project}
                        </div>
                      </div>

                      {/* Testimonial Content */}
                      <div className="lg:col-span-2">
                        <div className="relative">
                          <Icon name="Quote" size={48} className="text-accent/20 absolute -top-4 -left-2" />
                          <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-6 relative z-10">
                            {testimonial?.content}
                          </blockquote>
                        </div>
                        
                        {/* Results */}
                        <div className="bg-success/10 rounded-lg p-4 mb-6">
                          <div className="flex items-center text-success mb-2">
                            <Icon name="TrendingUp" size={20} className="mr-2" />
                            <span className="font-semibold">Measurable Results</span>
                          </div>
                          <p className="text-success/80 font-medium">{testimonial?.results}</p>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4">
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
                              Start Your Project
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-brand ${
                  index === currentTestimonial 
                    ? 'bg-primary shadow-brand' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Social Proof */}
        <div className={`mt-16 text-center transition-brand duration-1000 delay-600 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-3">
                <Icon name="ThumbsUp" size={24} className="text-success" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Icon name="Repeat" size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">85%</div>
              <div className="text-sm text-muted-foreground">Return Clients</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                <Icon name="Users" size={24} className="text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">90%</div>
              <div className="text-sm text-muted-foreground">Referral Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;