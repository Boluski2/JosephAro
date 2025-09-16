import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import TimelineSection from './components/TimelineSection';
import ResourcesSection from './components/ResourcesSection';
import CTASection from './components/CTASection';

const AboutExperiencePage = () => {
  useEffect(() => {
    // Set page title
    document.title = "About Joseph Aro - The Spatial Path of a Creative Architect";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Discover the story behind Joseph Aro, The Spatial Path of a Creative Architect');
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 lg:pt-20">
        <HeroSection />
        <StorySection />
        <TimelineSection />
        <ResourcesSection />
        <CTASection />
      </main>
      {/* Footer */}
      <footer className="bg-primary text-white section-padding">
        <div className="container-brand">
          <div className="text-center">
            <p className="text-sm opacity-80">
              © {new Date()?.getFullYear()} Joseph Aro. All rights reserved. Crafted with passion and precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutExperiencePage;