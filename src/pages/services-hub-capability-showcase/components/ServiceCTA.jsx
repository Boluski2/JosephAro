import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const ServiceCTA = () => {
  const contactMethods = [
    {
      title: 'Schedule a Consultation',
      description: 'Book a free 30-minute strategy call to discuss your project goals and explore how we can work together.',
      icon: 'Calendar',
      action: 'Schedule Call',
      primary: true
    },
    {
      title: 'Send Project Details',
      description: 'Share your project requirements and get a detailed proposal with timeline and investment information.',
      icon: 'FileText',
      action: 'Send Details',
      primary: false
    },
    {
      title: 'Quick Question',
      description: 'Have a quick question about services, process, or pricing? Send a message and get a prompt response.',
      icon: 'MessageCircle',
      action: 'Ask Question',
      primary: false
    }
  ];

  const nextSteps = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'We discuss your goals, challenges, and vision for the project'
    },
    {
      step: '2',
      title: 'Proposal & Planning',
      description: 'Receive detailed proposal with timeline, deliverables, and investment'
    },
    {
      step: '3',
      title: 'Project Kickoff',
      description: 'Begin the creative process with clear milestones and communication'
    },
    {
      step: '4',
      title: 'Launch & Success',
      description: 'Deploy your project and measure the impact on your business'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary/95 to-accent/20 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-20"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-secondary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="relative container-brand">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your <span className="text-gradient bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Vision</span>?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Every great project starts with a conversation. Let's discuss your goals, explore possibilities, and create something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center text-white/80">
              <Icon name="Clock" size={16} className="mr-2" />
              <span className="text-sm">Free consultation</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="flex items-center text-white/80">
              <Icon name="Shield" size={16} className="mr-2" />
              <span className="text-sm">No commitment required</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="flex items-center text-white/80">
              <Icon name="Zap" size={16} className="mr-2" />
              <span className="text-sm">Quick response time</span>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods?.map((method, index) => (
            <div
              key={method?.title}
              className={`p-8 rounded-2xl backdrop-blur-sm border transition-brand hover:transform hover:scale-105 ${
                method?.primary
                  ? 'bg-white/15 border-white/30 shadow-brand-lg'
                  : 'bg-white/10 border-white/20 hover:bg-white/15'
              }`}
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                method?.primary ? 'bg-accent' : 'bg-white/20'
              }`}>
                <Icon name={method?.icon} size={28} className="text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4">{method?.title}</h3>
              <p className="text-white/80 mb-6 leading-relaxed">{method?.description}</p>
              
              <Link to="/contact-gateway-connection-hub">
                <Button
                  variant={method?.primary ? "secondary" : "outline"}
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                  className={method?.primary 
                    ? "bg-secondary hover:bg-secondary/90 text-white" :"border-white/30 text-white hover:bg-white/10"
                  }
                >
                  {method?.action}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Next Steps */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">
            What Happens Next?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {nextSteps?.map((step, index) => (
              <div key={step?.step} className="text-center relative">
                {/* Connector Line */}
                {index < nextSteps?.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-white/20 transform translate-x-1/2"></div>
                )}
                
                <div className="relative z-10 w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">{step?.step}</span>
                </div>
                
                <h4 className="text-lg font-semibold mb-3">{step?.title}</h4>
                <p className="text-white/80 text-sm leading-relaxed">{step?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold mb-4">
              Let's Create Something Amazing Together
            </h4>
            <p className="text-white/80 mb-6">
              Ready to take the next step? Choose the option that works best for you and let's start the conversation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-gateway-connection-hub">
                <Button
                  variant="secondary"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-secondary hover:bg-secondary/90 text-white shadow-brand-lg"
                >
                  Schedule Consultation
                </Button>
              </Link>
              <Link to="/work-portfolio-interactive-showcase">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Eye"
                  iconPosition="left"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;