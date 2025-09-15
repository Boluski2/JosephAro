import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import heroBackground from '/assets/images/hero-background.jpg';

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const rotatingWords = ["The man", "The myth", "The legend!"];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-12"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(10, 10, 20, 0.85), rgba(5, 15, 30, 0.9)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Additional dark gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-noise opacity-10"></div>
      
      <div className="container-brand relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-8xl mx-auto px-4">
          {/* Text content on the left */}
          <div className="w-full md:w-3/5 text-left flex flex-col justify-center">
            {/* Main Heading */}
            <div className={`transition-brand duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl md:text-8xl font-bold mb-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Joseph Aro
              </h1>
              
              {/* Rotating text container */}
              <div className="h-14 md:h-16 flex items-center mb-6">
                <div className="relative w-full">
                  <span 
                    key={currentWord}
                    className="absolute left-0 text-3xl md:text-4xl font-medium bg-gradient-to-r from-pink-400 to-yellow-300 bg-clip-text text-transparent animate-fade-in whitespace-nowrap"
                  >
                    {rotatingWords[currentWord]}
                  </span>
                </div>
              </div>
            </div>

            {/* Description text */}
            <div className={`mb-8 transition-brand duration-1000 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
              <p className="text-lg bg-gradient-to-r from-green-300 to-blue-400 bg-clip-text text-transparent font-medium max-w-md">
                The Spatial Path of a Creative Architect
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`transition-brand duration-1000 delay-500 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/work-portfolio-interactive-showcase">
                  <Button 
                    variant="default" 
                    size="lg"
                    iconName="ArrowRight" 
                    iconPosition="right"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg animate-pulse-subtle px-8 py-4"
                  >
                    Explore My Work
                  </Button>
                </Link> 
              </div>
            </div>
          </div>
          
          {/* Image on the right - standalone with proper dimensions */}
          <div className="w-full md:w-2/5 flex justify-center mt-8 md:mt-0">
            <div className={`transition-brand duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
              <div className="relative">
                {/* Profile image with proper dimensions and standalone styling */}
                <div className="relative overflow-hidden rounded-2xl shadow-brand-lg">
                  <img 
                    src='/image/jor.png'
                    alt="Joseph Aro" 
                    className="w-full h-[600px] object-cover"
                  />
                </div>
                
                {/* Decorative elements to enhance the standalone look
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-cyan-400/30 blur-xl -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-purple-500/30 blur-xl -z-10"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;