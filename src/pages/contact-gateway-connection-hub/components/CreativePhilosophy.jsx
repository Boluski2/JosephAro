import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CreativePhilosophy = () => {
  const philosophyPoints = [
    {
      icon: 'Lightbulb',
      title: 'Collaboration Over Transaction',
      description: 'Every project is a partnership. I believe the best work emerges when client vision meets creative expertise in a collaborative dance of ideas.'
    },
    {
      icon: 'Target',
      title: 'Purpose-Driven Design',
      description: 'Beautiful design without purpose is just decoration. I create with intention, ensuring every element serves your goals and resonates with your audience.'
    },
    {
      icon: 'Zap',
      title: 'Innovation Within Reason',
      description: 'I push creative boundaries while respecting practical constraints. Innovation should enhance user experience, not complicate it.'
    },
    {
      icon: 'Heart',
      title: 'Authentic Brand Expression',
      description: 'Your brand has a unique story. My role is to amplify that authenticity, not mask it with trends that will fade tomorrow.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Connection',
      description: 'We start with deep conversations about your vision, challenges, and aspirations. Understanding you is the foundation of great work.'
    },
    {
      step: '02',
      title: 'Strategic Foundation',
      description: 'Before any pixels are pushed, we establish clear objectives, target audience insights, and success metrics.'
    },
    {
      step: '03',
      title: 'Creative Exploration',
      description: 'This is where magic happens. Multiple concepts, iterative refinement, and collaborative evolution of ideas.'
    },
    {
      step: '04',
      title: 'Refined Execution',
      description: 'Polished implementation with attention to every detail, ensuring the final product exceeds expectations.'
    },
    {
      step: '05',
      title: 'Launch & Partnership',
      description: 'Successful launch is just the beginning. I provide ongoing support and optimization for continued success.'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="bg-card rounded-2xl shadow-brand p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Let's Create Something <span className="text-gradient">Extraordinary</span> Together
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Every great project begins with a conversation, not a contract. I believe in building relationships first, understanding your vision deeply, and then crafting solutions that don't just meet expectations—they transform possibilities.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Icon name="MessageCircle" size={20} className="text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Ready to start the conversation?</p>
                <p className="text-sm text-muted-foreground">Let's explore what we can build together</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=500&fit=crop"
                alt="Creative collaboration workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-full flex items-center justify-center shadow-brand-lg">
              <Icon name="Sparkles" size={32} className="text-white" />
            </div>
          </div>
        </div>
      </div>
      {/* Philosophy */}
      <div className="bg-card rounded-2xl shadow-brand p-8">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-foreground mb-4">My Creative Philosophy</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These principles guide every project, ensuring we create work that's not just visually stunning, but strategically sound and authentically you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {philosophyPoints?.map((point, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={point?.icon} size={20} className="text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">{point?.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{point?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Process */}
      <div className="bg-card rounded-2xl shadow-brand p-8">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-foreground mb-4">How We'll Work Together</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A proven process that balances creative exploration with strategic thinking, ensuring exceptional results every time.
          </p>
        </div>

        <div className="space-y-8">
          {processSteps?.map((step, index) => (
            <div key={index} className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step?.step}
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h4 className="text-xl font-semibold text-foreground mb-2">{step?.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{step?.description}</p>
              </div>
              {index < processSteps?.length - 1 && (
                <div className="absolute left-8 mt-16 w-0.5 h-8 bg-gradient-to-b from-accent to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Partnership Approach */}
      <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl p-8 border border-accent/20">
        <div className="text-center">
          <Icon name="Handshake" size={48} className="text-accent mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-foreground mb-4">Partnership, Not Just Service</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            When you work with me, you're not just hiring a designer—you're gaining a creative partner who's invested in your success. I bring strategic thinking, technical expertise, and genuine enthusiasm to every project. Your goals become my goals, and together we'll create something that makes a real impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreativePhilosophy;