import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const ServicePillars = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'brand-identity',
      title: 'Brand Identity & Strategy',
      subtitle: 'Building Memorable Brand Experiences',
      description: `Comprehensive brand development that goes beyond logos. I create cohesive visual identities that tell your story, connect with your audience, and differentiate you in the marketplace.\n\nFrom initial brand strategy to complete visual system implementation, every element is crafted to reinforce your unique value proposition.`,
      icon: 'Palette',
      color: 'accent',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&crop=center',
      capabilities: [
        'Brand Strategy & Positioning',
        'Logo Design & Visual Identity',
        'Brand Guidelines & Systems',
        'Marketing Collateral Design',
        'Brand Voice & Messaging',
        'Competitive Analysis'
      ],
      process: [
        { step: 'Discovery', description: 'Deep dive into your business, audience, and market landscape' },
        { step: 'Strategy', description: 'Develop positioning, personality, and brand architecture' },
        { step: 'Design', description: 'Create visual identity system and brand elements' },
        { step: 'Implementation', description: 'Apply brand across all touchpoints and materials' }
      ],
      timeline: '4-8 weeks',
      outcome: 'Complete brand identity system with guidelines and implementation roadmap'
    },
    {
      id: 'digital-experience',
      title: 'Digital Experience Design',
      subtitle: 'Crafting Engaging Digital Journeys',
      description: `User-centered digital experiences that convert visitors into customers. I design and develop websites, applications, and digital platforms that are both beautiful and functional.\n\nEvery interface is crafted with performance, accessibility, and user experience at the forefront, ensuring your digital presence drives real business results.`,
      icon: 'Monitor',
      color: 'secondary',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center',
      capabilities: [
        'Website Design & Development',
        'User Experience (UX) Design',
        'User Interface (UI) Design',
        'Responsive Web Development',
        'E-commerce Solutions',
        'Performance Optimization'
      ],
      process: [
        { step: 'Research', description: 'User research, competitor analysis, and technical requirements' },
        { step: 'Design', description: 'Wireframing, prototyping, and visual design development' },
        { step: 'Development', description: 'Frontend development with modern technologies' },
        { step: 'Launch', description: 'Testing, optimization, and deployment with ongoing support' }
      ],
      timeline: '6-12 weeks',
      outcome: 'Fully responsive website or application with analytics and performance monitoring'
    },
    {
      id: 'creative-consultation',
      title: 'Creative Consultation',
      subtitle: 'Strategic Creative Partnership',
      description: `Ongoing creative partnership for businesses that need strategic design thinking and creative direction. I work as an extension of your team to elevate your creative output and strategic approach.\n\nFrom campaign ideation to creative problem-solving, I provide the expertise and fresh perspective needed to breakthrough creative challenges.`,
      icon: 'Lightbulb',
      color: 'primary',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center',
      capabilities: [
        'Creative Strategy Development',
        'Campaign Ideation & Planning',
        'Design System Architecture',
        'Team Creative Direction',
        'Brand Evolution & Refresh',
        'Creative Problem Solving'
      ],
      process: [
        { step: 'Assessment', description: 'Evaluate current creative needs and opportunities' },
        { step: 'Strategy', description: 'Develop creative roadmap and strategic recommendations' },
        { step: 'Collaboration', description: 'Work closely with your team on implementation' },
        { step: 'Evolution', description: 'Continuous refinement and creative optimization' }
      ],
      timeline: 'Ongoing partnership',
      outcome: 'Enhanced creative capabilities and strategic design thinking for your organization'
    }
  ];

  const currentService = services?.[activeService];

  return (
    <section className="section-padding bg-background">
      <div className="container-brand">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Three Pillars of <span className="text-accent">Creative Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive services designed to transform your brand and digital presence through strategic creativity and technical excellence.
          </p>
        </div>

        {/* Service Navigation */}
        <div className="flex flex-col lg:flex-row gap-4 mb-12 bg-muted/30 p-2 rounded-xl">
          {services?.map((service, index) => (
            <button
              key={service?.id}
              onClick={() => setActiveService(index)}
              className={`flex-1 p-6 rounded-lg transition-brand text-left ${
                activeService === index
                  ? 'bg-white shadow-brand-lg border border-border'
                  : 'hover:bg-white/50'
              }`}
            >
              <div className="flex items-center mb-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                  activeService === index 
                    ? `bg-${service?.color} text-white` 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  <Icon name={service?.icon} size={20} />
                </div>
                <div>
                  <h3 className={`font-semibold ${
                    activeService === index ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {service?.title}
                  </h3>
                </div>
              </div>
              <p className={`text-sm ${
                activeService === index ? 'text-muted-foreground' : 'text-muted-foreground/70'
              }`}>
                {service?.subtitle}
              </p>
            </button>
          ))}
        </div>

        {/* Active Service Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-${currentService?.color} rounded-xl flex items-center justify-center mr-4`}>
                  <Icon name={currentService?.icon} size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{currentService?.title}</h3>
                  <p className="text-muted-foreground">{currentService?.subtitle}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {currentService?.description}
              </p>
            </div>

            {/* Capabilities */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Icon name="CheckCircle" size={20} className="mr-2 text-accent" />
                Core Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentService?.capabilities?.map((capability, index) => (
                  <div key={index} className="flex items-center">
                    <Icon name="ArrowRight" size={16} className="mr-2 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Icon name="GitBranch" size={20} className="mr-2 text-secondary" />
                Process Overview
              </h4>
              <div className="space-y-4">
                {currentService?.process?.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`w-8 h-8 bg-${currentService?.color}/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1`}>
                      <span className={`text-sm font-semibold text-${currentService?.color}`}>
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground">{step?.step}</h5>
                      <p className="text-muted-foreground text-sm">{step?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline & Outcome */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-muted/30 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Icon name="Clock" size={16} className="mr-2 text-accent" />
                  <span className="font-semibold text-foreground">Timeline</span>
                </div>
                <p className="text-muted-foreground">{currentService?.timeline}</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Icon name="Target" size={16} className="mr-2 text-secondary" />
                  <span className="font-semibold text-foreground">Outcome</span>
                </div>
                <p className="text-muted-foreground text-sm">{currentService?.outcome}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-xl shadow-brand-lg">
              <Image
                src={currentService?.image}
                alt={`${currentService?.title} showcase`}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-white font-semibold mb-2">Ready to get started?</h4>
                <p className="text-white/80 text-sm mb-4">
                  Let's discuss how this service can transform your business.
                </p>
                <Link to="/contact-gateway-connection-hub">
                  <Button 
                    variant="secondary" 
                    iconName="ArrowRight" 
                    iconPosition="right"
                    className="bg-secondary hover:bg-secondary/90"
                  >
                    Start Project Discussion
                  </Button>
                </Link>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-4 rounded-lg border shadow-sm text-center">
                <div className="text-2xl font-bold text-accent mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="bg-card p-4 rounded-lg border shadow-sm text-center">
                <div className="text-2xl font-bold text-secondary mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePillars;