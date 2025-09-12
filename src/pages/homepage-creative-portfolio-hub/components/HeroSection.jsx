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
    }, 3000);
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto px-4">
          {/* Text content on the left */}
          <div className="w-full md:w-3/5 text-left flex flex-col justify-center">
            {/* Main Heading */}
            <div className={`transition-brand duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl md:text-8xl font-bold mb-3 text-gray-200">
                Joseph Aro
              </h1>
              
              {/* Rotating text container */}
              <div className="h-14 md:h-16 flex items-center mb-6">
                <div className="relative w-full">
                  <span 
                    key={currentWord}
                    className="absolute left-0 text-3xl md:text-4xl font-medium text-white animate-fade-in whitespace-nowrap"
                  >
                    {rotatingWords[currentWord]}
                  </span>
                </div>
              </div>
            </div>

            {/* Description text */}
            <div className={`mb-8 transition-brand duration-1000 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
              <p className="text-lg text-gray-200 max-w-md">
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
          
          {/* Image on the right - using img tag with increased size */}
          <div className="w-full md:w-2/5 flex justify-center mt-8 md:mt-0">
            <div className={`transition-brand duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
              <div className="relative">
                {/* Profile image using img tag with increased size */}
                <div className="w-96 h-96 flex items-center justify-center overflow-hidden shadow-lg rounded-2xl border-2 border-white/20 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                  <img 
                    src='/image/jor.png'
                    alt="Joseph Aro" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;