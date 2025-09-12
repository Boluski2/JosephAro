import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'hello@josepharo.com',
      description: 'Best for project inquiries and detailed discussions',
      action: 'mailto:hello@josepharo.com',
      primary: true
    },
    {
      icon: 'Phone',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Available Mon-Fri, 9AM-6PM EST',
      action: 'tel:+15551234567'
    },
    {
      icon: 'MessageCircle',
      title: 'WhatsApp',
      value: '+1 (555) 123-4567',
      description: 'Quick questions and project updates',
      action: 'https://wa.me/15551234567'
    }
  ];

  const socialLinks = [
    { icon: 'Linkedin', name: 'LinkedIn', url: 'https://linkedin.com/in/josepharo' },
    { icon: 'Twitter', name: 'Twitter', url: 'https://twitter.com/josepharo' },
    { icon: 'Instagram', name: 'Instagram', url: 'https://instagram.com/josepharo' },
    { icon: 'Dribbble', name: 'Dribbble', url: 'https://dribbble.com/josepharo' }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM EST' },
    { day: 'Sunday', hours: 'Emergency projects only' }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="bg-card rounded-2xl shadow-brand p-8">
        <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
        <div className="space-y-6">
          {contactMethods?.map((method, index) => (
            <a
              key={index}
              href={method?.action}
              className={`block p-4 rounded-lg border transition-brand hover:shadow-md ${
                method?.primary 
                  ? 'border-accent bg-accent/5 hover:bg-accent/10' :'border-border hover:border-accent/50'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  method?.primary ? 'bg-accent text-white' : 'bg-muted text-muted-foreground'
                }`}>
                  <Icon name={method?.icon} size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{method?.title}</h4>
                  <p className="text-foreground font-medium">{method?.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{method?.description}</p>
                </div>
                <Icon name="ExternalLink" size={16} className="text-muted-foreground" />
              </div>
            </a>
          ))}
        </div>
      </div>
      {/* Office Hours */}
      <div className="bg-card rounded-2xl shadow-brand p-8">
        <h3 className="text-xl font-bold text-foreground mb-6">Office Hours</h3>
        <div className="space-y-4">
          {officeHours?.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
              <span className="text-foreground font-medium">{schedule?.day}</span>
              <span className="text-muted-foreground">{schedule?.hours}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-accent/5 border border-accent/20 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Clock" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Response Time Commitment</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Project inquiries: Within 24 hours\nGeneral inquiries: Within 48 hours
          </p>
        </div>
      </div>
      {/* Social Media */}
      <div className="bg-card rounded-2xl shadow-brand p-8">
        <h3 className="text-xl font-bold text-foreground mb-6">Connect on Social</h3>
        <div className="grid grid-cols-2 gap-4">
          {socialLinks?.map((social, index) => (
            <a
              key={index}
              href={social?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/5 transition-brand"
            >
              <Icon name={social?.icon} size={20} className="text-muted-foreground" />
              <span className="text-foreground font-medium">{social?.name}</span>
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Follow for design insights, project updates, and behind-the-scenes content.
        </p>
      </div>
      {/* Location */}
      <div className="bg-card rounded-2xl shadow-brand p-8">
        <h3 className="text-xl font-bold text-foreground mb-6">Location & Availability</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Icon name="MapPin" size={20} className="text-accent mt-1" />
            <div>
              <p className="text-foreground font-medium">Based in New York City</p>
              <p className="text-muted-foreground text-sm">Available for local meetings and remote collaboration worldwide</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Icon name="Globe" size={20} className="text-accent mt-1" />
            <div>
              <p className="text-foreground font-medium">Remote-First Approach</p>
              <p className="text-muted-foreground text-sm">Seamless collaboration with clients across all time zones</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Icon name="Calendar" size={20} className="text-accent mt-1" />
            <div>
              <p className="text-foreground font-medium">Currently Accepting Projects</p>
              <p className="text-muted-foreground text-sm">Next available start date: March 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;