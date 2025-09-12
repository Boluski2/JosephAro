import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CEO",
      company: "TechStart Innovations",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: `Working with Joseph was transformative for our brand. He didn't just design our website—he architected our entire digital presence. His strategic approach helped us increase user engagement by 300% and conversion rates by 150%. What impressed me most was his ability to translate our complex technical services into compelling visual stories.`,
      project: "Complete Brand & Digital Transformation",
      rating: 5,
      highlight: "300% increase in user engagement"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Creative Director",
      company: "Global Marketing Agency",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: `Joseph brings a rare combination of creative vision and business acumen. During our collaboration on the luxury hotel chain project, he demonstrated exceptional ability to understand client needs and translate them into award-winning designs. His process is methodical yet inspired, and his attention to detail is unmatched.`,
      project: "Luxury Hotel Chain Rebranding",
      rating: 5,
      highlight: "Award-winning design execution"
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Founder",
      company: "Sustainable Fashion Co.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: `Joseph understood our mission to make sustainable fashion accessible and beautiful. He created a brand identity that perfectly captures our values while appealing to our target market. The e-commerce platform he designed increased our online sales by 400% in just six months. His collaborative approach made the entire process enjoyable.`,
      project: "E-commerce Platform & Brand Identity",
      rating: 5,
      highlight: "400% increase in online sales"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Product Manager",
      company: "FinTech Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: `Joseph's expertise in UX design helped us solve complex user experience challenges in our financial app. His user research insights and design solutions reduced customer support tickets by 60% and improved user satisfaction scores significantly. He's not just a designer—he's a problem solver who thinks like a business owner.`,
      project: "FinTech Mobile App UX Redesign",
      rating: 5,
      highlight: "60% reduction in support tickets"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container-brand">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Icon name="Heart" size={16} className="mr-2" />
              Client Stories
            </div>
            <h2 className="text-4xl font-bold font-display mb-6">
              What <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The true measure of success isn't just in the work we create, but in the relationships we build and the results we achieve together.
            </p>
          </div>

          {/* Main Testimonial */}
          <div className="relative mb-12">
            <div className="card-brand p-8 md:p-12 text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-noise opacity-20"></div>
              
              <div className="relative z-10">
                {/* Quote Icon */}
                <Icon name="Quote" size={48} className="text-accent mx-auto mb-6 opacity-60" />
                
                {/* Testimonial Content */}
                <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                  "{testimonials?.[activeTestimonial]?.content}"
                </blockquote>
                
                {/* Client Info */}
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonials?.[activeTestimonial]?.avatar}
                      alt={testimonials?.[activeTestimonial]?.name}
                      className="w-16 h-16 rounded-full object-cover shadow-brand"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-foreground text-lg">
                        {testimonials?.[activeTestimonial]?.name}
                      </div>
                      <div className="text-accent font-medium">
                        {testimonials?.[activeTestimonial]?.role}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {testimonials?.[activeTestimonial]?.company}
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden md:block w-px h-16 bg-border"></div>
                  
                  <div className="text-center md:text-left">
                    <div className="text-sm text-muted-foreground mb-1">Project</div>
                    <div className="font-medium text-foreground">
                      {testimonials?.[activeTestimonial]?.project}
                    </div>
                    <div className="text-secondary font-semibold text-sm mt-1">
                      {testimonials?.[activeTestimonial]?.highlight}
                    </div>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex justify-center space-x-1 mb-8">
                  {[...Array(testimonials?.[activeTestimonial]?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background shadow-brand rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:shadow-brand-lg transition-brand"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background shadow-brand rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:shadow-brand-lg transition-brand"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-3 mb-12">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-brand ${
                  index === activeTestimonial
                    ? 'bg-accent shadow-brand'
                    : 'bg-muted hover:bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;