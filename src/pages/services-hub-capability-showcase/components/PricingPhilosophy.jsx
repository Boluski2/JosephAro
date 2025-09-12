import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const PricingPhilosophy = () => {
  const [activeTab, setActiveTab] = useState('philosophy');

  const pricingApproaches = [
    {
      id: 'value-based',
      title: 'Value-Based Partnership',
      icon: 'TrendingUp',
      description: 'Pricing based on the value delivered and business impact achieved, not just hours worked.',
      benefits: [
        'Aligned with your business goals',
        'Focus on results and outcomes',
        'Transparent value proposition',
        'Long-term partnership approach'
      ]
    },
    {
      id: 'project-scope',
      title: 'Custom Project Scoping',
      icon: 'Target',
      description: 'Each project is unique, so pricing is tailored to specific requirements and complexity.',
      benefits: [
        'No one-size-fits-all pricing',
        'Detailed project breakdown',
        'Clear deliverables and timeline',
        'Flexible payment structures'
      ]
    },
    {
      id: 'transparent',
      title: 'Transparent Process',
      icon: 'Eye',
      description: 'Open communication about costs, timelines, and expectations from the very beginning.',
      benefits: [
        'No hidden fees or surprises',
        'Regular progress updates',
        'Clear change request process',
        'Detailed project documentation'
      ]
    }
  ];

  const investmentRanges = [
    {
      service: 'Brand Identity & Strategy',
      range: '$5,000 - $25,000',
      description: 'Complete brand development from strategy to implementation',
      includes: [
        'Brand strategy and positioning',
        'Logo and visual identity design',
        'Brand guidelines and system',
        'Marketing collateral templates',
        'Implementation support'
      ],
      timeline: '4-8 weeks',
      ideal: 'Startups to mid-size companies looking to establish or refresh their brand'
    },
    {
      service: 'Digital Experience Design',
      range: '$8,000 - $50,000',
      description: 'Custom website or application design and development',
      includes: [
        'UX research and strategy',
        'Custom design and prototyping',
        'Responsive development',
        'Performance optimization',
        'Launch and training'
      ],
      timeline: '6-12 weeks',
      ideal: 'Businesses needing professional web presence or digital transformation'
    },
    {
      service: 'Creative Consultation',
      range: '$2,500 - $15,000/month',
      description: 'Ongoing creative partnership and strategic guidance',
      includes: [
        'Strategic creative direction',
        'Design system development',
        'Team collaboration and training',
        'Campaign and project guidance',
        'Regular strategy sessions'
      ],
      timeline: 'Ongoing partnership',
      ideal: 'Growing companies needing consistent creative leadership'
    }
  ];

  const faqs = [
    {
      question: 'How do you determine project pricing?',
      answer: 'Pricing is based on project complexity, timeline, deliverables, and the value it will bring to your business. After our initial consultation, I provide a detailed proposal with transparent pricing and clear deliverables.'
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes, I offer flexible payment structures including milestone-based payments, monthly installments for larger projects, and retainer arrangements for ongoing work. We can discuss what works best for your budget.'
    },
    {
      question: 'What\'s included in the project cost?',
      answer: 'All quoted prices include the full scope of work outlined in the proposal, including revisions, project management, and basic post-launch support. Any additional requests are discussed and approved before implementation.'
    },
    {
      question: 'Do you work with smaller budgets?',
      answer: 'I understand that every business has different budget constraints. I offer scaled solutions and can work with you to prioritize the most impactful elements within your budget. Let\'s discuss your needs and find the right approach.'
    },
    {
      question: 'What happens if the project scope changes?',
      answer: 'Scope changes are common and expected. I have a transparent change request process where we discuss the impact on timeline and budget before proceeding. All changes are documented and approved in writing.'
    }
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="section-padding bg-background">
      <div className="container-brand">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Investment & <span className="text-accent">Partnership</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent, value-based pricing that aligns with your business goals and delivers measurable results.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('philosophy')}
            className={`px-6 py-3 rounded-xl transition-brand ${
              activeTab === 'philosophy' ?'bg-accent text-white shadow-brand-lg' :'bg-card text-muted-foreground hover:bg-muted/50 hover:text-foreground border'
            }`}
          >
            <Icon name="Heart" size={20} className="mr-2 inline" />
            Pricing Philosophy
          </button>
          <button
            onClick={() => setActiveTab('investment')}
            className={`px-6 py-3 rounded-xl transition-brand ${
              activeTab === 'investment' ?'bg-accent text-white shadow-brand-lg' :'bg-card text-muted-foreground hover:bg-muted/50 hover:text-foreground border'
            }`}
          >
            <Icon name="DollarSign" size={20} className="mr-2 inline" />
            Investment Ranges
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-6 py-3 rounded-xl transition-brand ${
              activeTab === 'faq' ?'bg-accent text-white shadow-brand-lg' :'bg-card text-muted-foreground hover:bg-muted/50 hover:text-foreground border'
            }`}
          >
            <Icon name="HelpCircle" size={20} className="mr-2 inline" />
            FAQ
          </button>
        </div>

        {/* Philosophy Tab */}
        {activeTab === 'philosophy' && (
          <div className="space-y-12">
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                My Approach to Pricing
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I believe in transparent, value-based partnerships where pricing reflects the impact and results delivered to your business. Every project is unique, and pricing should reflect that uniqueness while providing clear value and measurable outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingApproaches?.map((approach) => (
                <div key={approach?.id} className="bg-card p-8 rounded-xl border shadow-brand hover:shadow-brand-lg transition-brand">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon name={approach?.icon} size={28} className="text-accent" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-foreground mb-4">{approach?.title}</h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{approach?.description}</p>
                  
                  <ul className="space-y-3">
                    {approach?.benefits?.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Icon name="Check" size={16} className="mr-3 text-accent flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-muted/20 p-8 rounded-xl text-center">
              <h4 className="text-xl font-bold text-foreground mb-4">
                Ready to discuss your project?
              </h4>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Every great project starts with a conversation. Let's discuss your goals, challenges, and how we can create something amazing together.
              </p>
              <Link to="/contact-gateway-connection-hub">
                <Button 
                  variant="default" 
                  size="lg"
                  iconName="MessageCircle" 
                  iconPosition="left"
                  className="bg-gradient-brand hover:opacity-90"
                >
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* Investment Tab */}
        {activeTab === 'investment' && (
          <div className="space-y-8">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Investment Ranges
              </h3>
              <p className="text-lg text-muted-foreground">
                These ranges provide a general guideline. Final pricing is always customized based on your specific needs, timeline, and project complexity.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {investmentRanges?.map((investment, index) => (
                <div key={investment?.service} className="bg-card p-8 rounded-xl border shadow-brand hover:shadow-brand-lg transition-brand">
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-foreground mb-2">{investment?.service}</h4>
                    <div className="text-3xl font-bold text-accent mb-2">{investment?.range}</div>
                    <p className="text-muted-foreground text-sm">{investment?.description}</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h5 className="font-semibold text-foreground mb-3 flex items-center">
                        <Icon name="Package" size={16} className="mr-2 text-secondary" />
                        What's Included
                      </h5>
                      <ul className="space-y-2">
                        {investment?.includes?.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <Icon name="Check" size={14} className="mr-2 text-accent flex-shrink-0 mt-1" />
                            <span className="text-muted-foreground text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-muted/30 p-3 rounded-lg">
                        <div className="flex items-center mb-1">
                          <Icon name="Clock" size={14} className="mr-2 text-accent" />
                          <span className="font-medium text-foreground text-sm">Timeline</span>
                        </div>
                        <p className="text-muted-foreground text-sm">{investment?.timeline}</p>
                      </div>
                      
                      <div className="bg-muted/30 p-3 rounded-lg">
                        <div className="flex items-center mb-1">
                          <Icon name="Users" size={14} className="mr-2 text-secondary" />
                          <span className="font-medium text-foreground text-sm">Ideal For</span>
                        </div>
                        <p className="text-muted-foreground text-sm">{investment?.ideal}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-xl border">
              <div className="text-center">
                <Icon name="Info" size={24} className="text-accent mx-auto mb-4" />
                <h4 className="text-lg font-bold text-foreground mb-3">
                  Custom Solutions Available
                </h4>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Need something different? I create custom solutions tailored to your specific requirements and budget. Let's discuss how we can work together to achieve your goals.
                </p>
                <Link to="/contact-gateway-connection-hub">
                  <Button 
                    variant="outline" 
                    iconName="ArrowRight" 
                    iconPosition="right"
                    className="border-accent text-accent hover:bg-accent hover:text-white"
                  >
                    Get Custom Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h3>
              <p className="text-lg text-muted-foreground">
                Common questions about pricing, process, and partnerships.
              </p>
            </div>

            <div className="space-y-4">
              {faqs?.map((faq, index) => (
                <div key={index} className="bg-card border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/20 transition-brand"
                  >
                    <h4 className="font-semibold text-foreground pr-4">{faq?.question}</h4>
                    <Icon 
                      name={openFaq === index ? "ChevronUp" : "ChevronDown"} 
                      size={20} 
                      className="text-muted-foreground flex-shrink-0" 
                    />
                  </button>
                  
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq?.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center bg-muted/20 p-8 rounded-xl">
              <h4 className="text-xl font-bold text-foreground mb-4">
                Still have questions?
              </h4>
              <p className="text-muted-foreground mb-6">
                I'm here to help clarify any questions about pricing, process, or how we can work together.
              </p>
              <Link to="/contact-gateway-connection-hub">
                <Button 
                  variant="default" 
                  iconName="MessageCircle" 
                  iconPosition="left"
                  className="bg-gradient-brand hover:opacity-90"
                >
                  Ask a Question
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingPhilosophy;