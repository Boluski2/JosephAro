import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 'sarah-tech',
      name: 'Sarah Chen',
      position: 'CEO & Founder',
      company: 'TechFlow Solutions',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      rating: 5,
      quote: `Joseph transformed our entire brand identity and digital presence. His strategic approach and creative excellence helped us secure $2M in Series A funding. The new brand positioning resonated perfectly with investors and customers alike.`,
      project: 'Complete Brand Transformation',
      result: 'Secured $2M Series A funding',
      service: 'Brand Identity & Strategy',
      year: '2024'
    },
    {
      id: 'michael-ecommerce',
      name: 'Michael Rodriguez',
      position: 'Marketing Director',
      company: 'Artisan Marketplace',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      rating: 5,
      quote: `The e-commerce redesign Joseph delivered exceeded all our expectations. Our conversion rates increased by 245% and mobile sales tripled. His attention to user experience and technical implementation was outstanding.`,
      project: 'E-commerce Platform Redesign',
      result: '245% increase in conversions',
      service: 'Digital Experience Design',
      year: '2024'
    },
    {
      id: 'emma-nonprofit',
      name: 'Emma Thompson',
      position: 'Campaign Director',
      company: 'Green Future Initiative',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      rating: 5,
      quote: `Joseph's creative consultation transformed our environmental campaign. His strategic thinking and visual storytelling helped us reach 2.3M people and increase donations by 190%. A true creative partner.`,
      project: 'Environmental Campaign Strategy',result: '2.3M campaign reach',service: 'Creative Consultation',year: '2023'
    },
    {
      id: 'david-startup',name: 'David Park',position: 'Co-founder',company: 'InnovateLab',avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
      rating: 5,
      quote: `Working with Joseph was a game-changer for our startup. His ability to translate complex technical concepts into compelling visual narratives helped us communicate our value proposition clearly to both investors and customers.`,
      project: 'Startup Brand & Website',result: 'Successful product launch',service: 'Brand Identity & Digital Design',year: '2023'
    },
    {
      id: 'lisa-agency',name: 'Lisa Wang',position: 'Creative Director',company: 'Momentum Agency',avatar: 'https://randomuser.me/api/portraits/women/42.jpg',rating: 5,quote: `Joseph's ongoing creative consultation has elevated our entire team's output. His strategic insights and design system thinking have improved our client work quality and efficiency significantly.`,
      project: 'Creative Team Consultation',result: 'Improved team efficiency',service: 'Creative Consultation',year: '2024'
    }
  ];

  const currentTestimonial = testimonials?.[activeTestimonial];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials?.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container-brand">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Client <span className="text-accent">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from real clients who have experienced transformational results through strategic creativity and technical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Featured Testimonial */}
          <div className="order-2 lg:order-1">
            <div className="bg-white p-8 rounded-2xl shadow-brand-lg border relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Icon name="Quote" size={24} className="text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex mr-3">
                  {renderStars(currentTestimonial?.rating)}
                </div>
                <span className="text-sm text-muted-foreground">
                  {currentTestimonial?.rating}.0 out of 5
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-foreground leading-relaxed mb-8 font-medium">
                "{currentTestimonial?.quote}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center mb-6">
                <div className="relative mr-4">
                  <Image
                    src={currentTestimonial?.avatar}
                    alt={currentTestimonial?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Check" size={12} className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{currentTestimonial?.name}</h4>
                  <p className="text-muted-foreground">{currentTestimonial?.position}</p>
                  <p className="text-accent font-medium">{currentTestimonial?.company}</p>
                </div>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-border">
                <div>
                  <div className="flex items-center mb-2">
                    <Icon name="Briefcase" size={16} className="mr-2 text-secondary" />
                    <span className="font-medium text-foreground text-sm">Project</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{currentTestimonial?.project}</p>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <Icon name="TrendingUp" size={16} className="mr-2 text-accent" />
                    <span className="font-medium text-foreground text-sm">Key Result</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{currentTestimonial?.result}</p>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-brand ${
                    activeTestimonial === index 
                      ? 'bg-accent' :'bg-border hover:bg-accent/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Testimonial Grid */}
          <div className="order-1 lg:order-2 space-y-4">
            {testimonials?.map((testimonial, index) => (
              <button
                key={testimonial?.id}
                onClick={() => setActiveTestimonial(index)}
                className={`w-full p-4 rounded-xl transition-brand text-left ${
                  activeTestimonial === index
                    ? 'bg-white shadow-brand border-2 border-accent'
                    : 'bg-white/50 hover:bg-white hover:shadow-sm border border-border'
                }`}
              >
                <div className="flex items-center">
                  <Image
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className={`font-semibold ${
                        activeTestimonial === index ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {testimonial?.name}
                      </h4>
                      <span className="text-xs text-muted-foreground">{testimonial?.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{testimonial?.company}</p>
                    <div className={`text-xs font-medium mt-1 px-2 py-1 rounded-full inline-block ${
                      activeTestimonial === index
                        ? 'bg-accent/10 text-accent' :'bg-muted text-muted-foreground'
                    }`}>
                      {testimonial?.service}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">98%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">150+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">8+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;