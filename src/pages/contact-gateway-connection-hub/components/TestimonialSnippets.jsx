import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialSnippets = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "Joseph transformed our brand identity completely. The attention to detail and strategic thinking exceeded our expectations.",
      rating: 5,
      project: "Brand Identity & Website"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Founder & CEO",
      company: "GreenSpace Ventures",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "Working with Joseph was seamless. He understood our vision immediately and delivered beyond what we imagined possible.",
      rating: 5,
      project: "UI/UX Design"
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Creative Director",
      company: "Artisan Collective",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "The collaborative process was incredible. Joseph made us feel heard while guiding us toward solutions we never considered.",
      rating: 5,
      project: "Website Redesign"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: "Briefcase" },
    { number: "98%", label: "Client Satisfaction", icon: "Heart" },
    { number: "24hr", label: "Average Response", icon: "Clock" },
    { number: "5★", label: "Average Rating", icon: "Star" }
  ];

  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="bg-card rounded-2xl shadow-brand p-8">
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Why Clients Choose Joseph</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name={stat?.icon} size={20} className="text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground">{stat?.number}</div>
              <div className="text-sm text-muted-foreground">{stat?.label}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Testimonials */}
      <div className="bg-card rounded-2xl shadow-brand p-8">
        <h3 className="text-2xl font-bold text-foreground mb-6">What Clients Say</h3>
        <div className="space-y-6">
          {testimonials?.map((testimonial) => (
            <div key={testimonial?.id} className="border border-border rounded-lg p-6 hover:border-accent/50 transition-brand">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial?.rating)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={14} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground mb-3 italic">"{testimonial?.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial?.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial?.role} at {testimonial?.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-accent font-medium">{testimonial?.project}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Trust Signals */}
      <div className="bg-card rounded-2xl shadow-brand p-8">
        <h3 className="text-xl font-bold text-foreground mb-6">Trust & Credentials</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Icon name="Shield" size={20} className="text-accent" />
              <span className="text-foreground">Fully Insured & Bonded</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="Award" size={20} className="text-accent" />
              <span className="text-foreground">Certified UX Professional</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="Users" size={20} className="text-accent" />
              <span className="text-foreground">Member of AIGA</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Icon name="Lock" size={20} className="text-accent" />
              <span className="text-foreground">NDA Protection Available</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="CheckCircle" size={20} className="text-accent" />
              <span className="text-foreground">100% Project Completion Rate</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="Headphones" size={20} className="text-accent" />
              <span className="text-foreground">Dedicated Project Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSnippets;