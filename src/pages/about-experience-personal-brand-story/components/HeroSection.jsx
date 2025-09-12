import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-30"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative container-brand section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                <Icon name="Sparkles" size={16} className="mr-2" />
                Creative Architect
              </div>
              <h1 className="text-hero font-display">
                Where <span className="text-gradient">Creativity</span> Meets{' '}
                <span className="text-gradient">Strategy</span>
              </h1>
              <p className="text-lead max-w-2xl">
                Geography teaches us more than just ​the lay of the land; 
                it unveils the ​interconnectedness of our world, ​guiding us through the complexities of ​cultures, economies, and environments.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/work-portfolio-interactive-showcase">
                <Button 
                  variant="default" 
                  size="lg"
                  iconName="ArrowRight" 
                  iconPosition="right"
                  className="bg-gradient-brand hover:opacity-90"
                >
                  Explore My Work
                </Button>
              </Link>
              <Link to="/contact-gateway-connection-hub">
                <Button 
                  variant="outline" 
                  size="lg"
                  iconName="MessageCircle" 
                  iconPosition="left"
                >
                  Let's Connect
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">12+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-brand rounded-2xl blur-2xl opacity-20 animate-pulse-subtle"></div>
              <div className="relative bg-card rounded-2xl p-8 shadow-brand-lg">
                <Image
                  src="/image/jor3.png"
                  alt="Joseph Aro - Creative Architect"
                  className="w-full h-96 object-cover rounded-xl"
                  style={{ objectPosition: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;