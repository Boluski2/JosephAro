import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const CaseStudyPreviews = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 'techstartup-rebrand',
      title: 'TechFlow Solutions',
      subtitle: 'Complete Brand Transformation',
      category: 'Brand Identity & Strategy',
      challenge: 'A growing tech startup needed to evolve from a generic corporate identity to a modern, trustworthy brand that would appeal to enterprise clients while maintaining startup agility.',
      solution: 'Developed a comprehensive brand strategy focusing on innovation and reliability, created a modern visual identity system, and implemented across all touchpoints including website, marketing materials, and digital presence.',
      results: [
        { metric: 'Brand Recognition', value: '340%', description: 'increase in brand awareness' },
        { metric: 'Lead Generation', value: '180%', description: 'improvement in qualified leads' },
        { metric: 'Client Trust', value: '95%', description: 'positive brand perception' }
      ],
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center',
      beforeImage: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&crop=center',
      afterImage: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit=crop&crop=center',
      services: ['Brand Strategy', 'Logo Design', 'Visual Identity', 'Website Design'],
      timeline: '8 weeks',
      year: '2024'
    },
    {
      id: 'ecommerce-redesign',
      title: 'Artisan Marketplace',
      subtitle: 'E-commerce Experience Redesign',
      category: 'Digital Experience Design',
      challenge: 'An online marketplace for handmade goods had poor user experience, low conversion rates, and high cart abandonment. The existing design was cluttered and didn\'t showcase products effectively.',
      solution: 'Redesigned the entire user experience with focus on product discovery, streamlined checkout process, and mobile-first approach. Implemented advanced filtering, wishlist functionality, and social proof elements.',
      results: [
        { metric: 'Conversion Rate', value: '245%', description: 'increase in sales conversion' },
        { metric: 'Cart Abandonment', value: '60%', description: 'reduction in abandoned carts' },
        { metric: 'Mobile Sales', value: '320%', description: 'increase in mobile transactions' }
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center',
      beforeImage: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&h=300&fit=crop&crop=center',
      afterImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center',
      services: ['UX Research', 'UI Design', 'Frontend Development', 'Performance Optimization'],
      timeline: '12 weeks',
      year: '2024'
    },
    {
      id: 'nonprofit-campaign',
      title: 'Green Future Initiative',
      subtitle: 'Environmental Campaign Strategy',
      category: 'Creative Consultation',
      challenge: 'A nonprofit organization needed to launch a major environmental awareness campaign but lacked creative direction and cohesive messaging strategy to reach younger demographics effectively.',
      solution: 'Developed comprehensive campaign strategy including visual identity, social media templates, interactive web experiences, and multi-channel content approach. Created engaging storytelling framework around climate action.',
      results: [
        { metric: 'Social Engagement', value: '450%', description: 'increase in social media engagement' },
        { metric: 'Campaign Reach', value: '2.3M', description: 'people reached across platforms' },
        { metric: 'Donations', value: '190%', description: 'increase in campaign donations' }
      ],
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop&crop=center',
      beforeImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop&crop=center',
      afterImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center',
      services: ['Campaign Strategy', 'Creative Direction', 'Social Media Design', 'Web Development'],
      timeline: '10 weeks',
      year: '2023'
    }
  ];

  const currentCase = caseStudies?.[activeCase];

  return (
    <section className="section-padding bg-muted/10">
      <div className="container-brand">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Success <span className="text-accent">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real projects, real results. Explore how strategic creativity and technical excellence have transformed businesses and exceeded expectations.
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex flex-col lg:flex-row gap-4 mb-12">
          {caseStudies?.map((caseStudy, index) => (
            <button
              key={caseStudy?.id}
              onClick={() => setActiveCase(index)}
              className={`flex-1 p-6 rounded-xl transition-brand text-left ${
                activeCase === index
                  ? 'bg-white shadow-brand-lg border-2 border-accent'
                  : 'bg-card border hover:shadow-brand hover:border-accent/30'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className={`font-semibold mb-1 ${
                    activeCase === index ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {caseStudy?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{caseStudy?.subtitle}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeCase === index 
                    ? 'bg-accent/10 text-accent' :'bg-muted text-muted-foreground'
                }`}>
                  {caseStudy?.year}
                </span>
              </div>
              <div className={`text-xs font-medium px-3 py-1 rounded-full inline-block ${
                activeCase === index
                  ? 'bg-secondary/10 text-secondary' :'bg-muted/50 text-muted-foreground'
              }`}>
                {caseStudy?.category}
              </div>
            </button>
          ))}
        </div>

        {/* Active Case Study Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mr-4">
                  <Icon name="Star" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground">{currentCase?.title}</h3>
                  <p className="text-muted-foreground text-lg">{currentCase?.subtitle}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  {currentCase?.timeline}
                </div>
                <div className="flex items-center">
                  <Icon name="Tag" size={16} className="mr-2" />
                  {currentCase?.category}
                </div>
              </div>
            </div>

            {/* Challenge */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                <Icon name="AlertCircle" size={20} className="mr-2 text-secondary" />
                The Challenge
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {currentCase?.challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                <Icon name="Lightbulb" size={20} className="mr-2 text-accent" />
                The Solution
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {currentCase?.solution}
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                <Icon name="Settings" size={20} className="mr-2 text-primary" />
                Services Provided
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentCase?.services?.map((service, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Icon name="TrendingUp" size={20} className="mr-2 text-secondary" />
                The Results
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {currentCase?.results?.map((result, index) => (
                  <div key={index} className="bg-card p-4 rounded-lg border text-center">
                    <div className="text-2xl font-bold text-accent mb-1">{result?.value}</div>
                    <div className="text-sm font-medium text-foreground mb-1">{result?.metric}</div>
                    <div className="text-xs text-muted-foreground">{result?.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-xl shadow-brand-lg">
              <Image
                src={currentCase?.image}
                alt={`${currentCase?.title} case study`}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-white font-semibold mb-2">Want to see the full case study?</h4>
                <Link to="/work-portfolio-interactive-showcase">
                  <Button 
                    variant="secondary" 
                    iconName="ExternalLink" 
                    iconPosition="right"
                    className="bg-secondary hover:bg-secondary/90"
                  >
                    View Complete Project
                  </Button>
                </Link>
              </div>
            </div>

            {/* Before/After Comparison */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={currentCase?.beforeImage}
                  alt="Before transformation"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  Before
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={currentCase?.afterImage}
                  alt="After transformation"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  After
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={() => setActiveCase(Math.max(0, activeCase - 1))}
                disabled={activeCase === 0}
                className="flex items-center px-4 py-2 text-muted-foreground hover:text-foreground transition-brand disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Icon name="ChevronLeft" size={16} className="mr-2" />
                Previous Case
              </button>
              
              <div className="flex space-x-2">
                {caseStudies?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCase(index)}
                    className={`w-3 h-3 rounded-full transition-brand ${
                      activeCase === index ? 'bg-accent' : 'bg-border hover:bg-accent/50'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setActiveCase(Math.min(caseStudies?.length - 1, activeCase + 1))}
                disabled={activeCase === caseStudies?.length - 1}
                className="flex items-center px-4 py-2 text-muted-foreground hover:text-foreground transition-brand disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next Case
                <Icon name="ChevronRight" size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyPreviews;