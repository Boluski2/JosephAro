import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
// import FeaturedWorkCarousel from './components/FeaturedWorkCarousel';
import CreativePhilosophySection from './components/CreativePhilosophySection';
import ServicesPreview from './components/ServicesPreview';
// import ClientLogosSection from './components/ClientLogosSection';
// import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';

const HomepageCreativePortfolioHub = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Joseph Aro - The Spatial Path of a Creative Architect</title>
        <meta name="description" content="The Spatial Path of a Creative Architect" />
        <meta name="keywords" content="The Spatial Path of a Creative Architect" />
        <meta property="og:title" content="Joseph Aro - The Spatial Path of a Creative Architect" />
        <meta property="og:description" content="The Spatial Path of a Creative Architect" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://josepharo.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Joseph Aro - The Spatial Path of a Creative Architect" />
        <meta name="twitter:description" content="The Spatial Path of a Creative Architect" />
        <link rel="canonical" href="https://josepharo.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-16 lg:pt-20">
          {/* Hero Section */}
          <HeroSection />

          {/* Creative Philosophy Section */}
          <CreativePhilosophySection />

          {/* Services Preview */}
          <ServicesPreview />

          {/* Client Logos & Trust Signals */}
          {/* <ClientLogosSection /> */}

          {/* Testimonial Section */}
          {/* <TestimonialSection /> */}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default HomepageCreativePortfolioHub;