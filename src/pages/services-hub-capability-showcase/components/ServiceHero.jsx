import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const ServiceHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-accent/20 text-white overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-secondary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative container-brand section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 animate-slide-up">
            <Icon name="Zap" size={16} className="mr-2 text-accent" />
            <span className="text-sm font-medium">Capability Showcase</span>
          </div>
          
          <h1 className="text-hero mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Services That <span className="text-gradient bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Transform</span> Visions
          </h1>
          
          <p className="text-lead mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            From strategic brand development to cutting-edge digital experiences, I craft solutions that don't just meet expectations—they exceed them. Every project is a partnership in bringing extraordinary ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/contact-gateway-connection-hub">
              <Button 
                variant="secondary" 
                size="lg"
                iconName="MessageCircle" 
                iconPosition="left"
                className="bg-secondary hover:bg-secondary/90 text-white shadow-brand-lg"
              >
                Start a Conversation
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
                View Case Studies
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Strategic Approach</h3>
              <p className="text-white/80 text-sm">Every project begins with deep understanding and strategic thinking</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Palette" size={24} className="text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Creative Excellence</h3>
              <p className="text-white/80 text-sm">Innovative design solutions that captivate and convert</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Rocket" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Results Driven</h3>
              <p className="text-white/80 text-sm">Measurable outcomes that drive business growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;