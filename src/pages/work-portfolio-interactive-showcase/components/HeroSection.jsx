import React from 'react';
import Icon from '../../../components/AppIcon';
// import Button from '../../../components/ui/Button';

const HeroSection = ({ onScrollToProjects }) => {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-background py-20 lg:py-32 overflow-hidden">
      style={{
        backgroundImage: `linear-gradient(rgba(33, 150, 243, 0.1), rgba(76, 175, 80, 0.1)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-noise opacity-40"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container-brand relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-slide-up">
            <Icon name="Briefcase" size={16} className="mr-2" />
            Creative Portfolio Showcase
          </div>

          {/* Main Heading */}
          <h1 className="text-hero font-display text-gradient mb-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
            Geo-spatial Experiences Resonate{' '}
            <span className="relative">
              
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent rounded-full"></div>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lead max-w-3xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '400ms' }}>
            Over 12 years of experience in deploying Geos-patial Solutions. Started out as an Instructor at the University teaching ​Postgraduate GIS, then progressed to Geospatial Consultancy deploying over 100 GIS projects and Products across ​Engineering, urban Planning, Agric and Environments
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 animate-slide-up" style={{ animationDelay: '600ms' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">12+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Industries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;