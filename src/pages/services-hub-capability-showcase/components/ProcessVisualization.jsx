import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProcessVisualization = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 'discovery',
      title: 'Discovery & Research',
      subtitle: 'Understanding Your Vision',
      description: `Every successful project begins with deep understanding. I dive into your business goals, target audience, competitive landscape, and technical requirements.\n\nThis phase includes stakeholder interviews, user research, market analysis, and technical audits to ensure we're building on a solid foundation.`,icon: 'Search',color: 'accent',duration: '1-2 weeks',
      deliverables: [
        'Project brief and requirements document','User personas and journey maps','Competitive analysis report','Technical requirements specification','Project timeline and milestones'
      ],
      tools: ['Figma', 'Miro', 'Google Analytics', 'Hotjar', 'Notion']
    },
    {
      id: 'strategy',title: 'Strategy & Planning',subtitle: 'Crafting the Blueprint',
      description: `With insights from discovery, I develop a comprehensive strategy that aligns creative vision with business objectives.\n\nThis includes information architecture, user experience strategy, visual direction, and technical approach—creating a roadmap for success.`,
      icon: 'Target',color: 'secondary',duration: '1-2 weeks',
      deliverables: [
        'Creative strategy document','Information architecture','User experience wireframes','Visual style direction','Technical architecture plan'
      ],
      tools: ['Whimsical', 'Figma', 'Adobe Creative Suite', 'Notion', 'Slack']
    },
    {
      id: 'design',title: 'Design & Development',subtitle: 'Bringing Ideas to Life',
      description: `The creative phase where strategy transforms into tangible results. I create high-fidelity designs, develop interactive prototypes, and build production-ready solutions.\n\nEvery element is crafted with attention to detail, ensuring the final product exceeds expectations.`,
      icon: 'Palette',color: 'primary',duration: '3-6 weeks',
      deliverables: [
        'High-fidelity design mockups','Interactive prototypes','Design system and components','Production-ready code','Quality assurance testing'
      ],
      tools: ['Figma', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion']
    },
    {
      id: 'launch',title: 'Launch & Optimization',subtitle: 'Going Live with Impact',
      description: `The final phase focuses on successful deployment and ongoing optimization. I ensure everything works perfectly across all devices and browsers.\n\nPost-launch support includes performance monitoring, user feedback analysis, and continuous improvements.`,
      icon: 'Rocket',color: 'accent',duration: '1-2 weeks',
      deliverables: [
        'Production deployment','Performance optimization','Analytics implementation','Training and documentation','Ongoing support plan'
      ],
      tools: ['Vercel', 'Google Analytics', 'Lighthouse', 'GitHub', 'Linear']
    }
  ];

  const currentStep = processSteps?.[activeStep];

  return (
    <section className="section-padding bg-muted/20">
      <div className="container-brand">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            My <span className="text-accent">Creative Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven methodology that transforms ideas into exceptional results through strategic thinking, creative excellence, and technical precision.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative mb-16">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {processSteps?.map((step, index) => (
              <div
                key={step?.id}
                className="relative cursor-pointer group"
                onClick={() => setActiveStep(index)}
              >
                <div className={`relative z-10 bg-background border-2 rounded-xl p-6 transition-brand ${
                  activeStep === index
                    ? `border-${step?.color} shadow-brand-lg`
                    : 'border-border hover:border-accent/50 hover:shadow-brand'
                }`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto ${
                    activeStep === index
                      ? `bg-${step?.color} text-white`
                      : 'bg-muted text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent'
                  }`}>
                    <Icon name={step?.icon} size={24} />
                  </div>
                  
                  <h3 className={`text-lg font-semibold text-center mb-2 ${
                    activeStep === index ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {step?.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground text-center mb-3">
                    {step?.subtitle}
                  </p>
                  
                  <div className={`text-xs font-medium text-center px-3 py-1 rounded-full ${
                    activeStep === index
                      ? `bg-${step?.color}/10 text-${step?.color}`
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {step?.duration}
                  </div>
                </div>
                
                {/* Step Number */}
                <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  activeStep === index
                    ? `bg-${step?.color} text-white`
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Step Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-4">
                <div className={`w-16 h-16 bg-${currentStep?.color} rounded-xl flex items-center justify-center mr-4`}>
                  <Icon name={currentStep?.icon} size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground">{currentStep?.title}</h3>
                  <p className="text-muted-foreground text-lg">{currentStep?.subtitle}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-lg">
                {currentStep?.description}
              </p>
            </div>

            {/* Duration */}
            <div className="bg-card p-6 rounded-xl border shadow-sm">
              <div className="flex items-center mb-3">
                <Icon name="Clock" size={20} className="mr-3 text-accent" />
                <h4 className="text-lg font-semibold text-foreground">Timeline</h4>
              </div>
              <p className="text-2xl font-bold text-accent">{currentStep?.duration}</p>
              <p className="text-muted-foreground text-sm mt-1">
                Typical duration for this phase, adjusted based on project complexity
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Deliverables */}
            <div className="bg-card p-6 rounded-xl border shadow-sm">
              <div className="flex items-center mb-4">
                <Icon name="Package" size={20} className="mr-3 text-secondary" />
                <h4 className="text-lg font-semibold text-foreground">Key Deliverables</h4>
              </div>
              <div className="space-y-3">
                {currentStep?.deliverables?.map((deliverable, index) => (
                  <div key={index} className="flex items-start">
                    <Icon name="CheckCircle" size={16} className="mr-3 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-card p-6 rounded-xl border shadow-sm">
              <div className="flex items-center mb-4">
                <Icon name="Tool" size={20} className="mr-3 text-primary" />
                <h4 className="text-lg font-semibold text-foreground">Tools & Technologies</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentStep?.tools?.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-muted/50 text-muted-foreground text-sm rounded-full border"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Process Navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className="flex items-center px-4 py-2 text-muted-foreground hover:text-foreground transition-brand disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Icon name="ChevronLeft" size={16} className="mr-2" />
                Previous Step
              </button>
              
              <div className="flex space-x-2">
                {processSteps?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-3 h-3 rounded-full transition-brand ${
                      activeStep === index ? 'bg-accent' : 'bg-border hover:bg-accent/50'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setActiveStep(Math.min(processSteps?.length - 1, activeStep + 1))}
                disabled={activeStep === processSteps?.length - 1}
                className="flex items-center px-4 py-2 text-muted-foreground hover:text-foreground transition-brand disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next Step
                <Icon name="ChevronRight" size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessVisualization;