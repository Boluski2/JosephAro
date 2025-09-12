import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "What\'s your typical project timeline?",
      answer: `Project timelines vary based on scope and complexity:\n\n• Brand Identity: 3-4 weeks\n• Website Design & Development: 6-12 weeks\n• UI/UX Design: 4-8 weeks\n• Consultation Projects: 1-2 weeks\n\nI always provide detailed timelines during our initial consultation, including key milestones and review phases.`
    },
    {
      question: "How do you handle project budgets?",
      answer: `I believe in transparent pricing and value-based investment:\n\n• Fixed-price projects with clear scope definition\n• 50% deposit to begin, 50% upon completion\n• No hidden fees or surprise costs\n• Budget ranges start from $5,000 for comprehensive projects\n\nEvery project includes strategy, design, development, and post-launch support.`
    },
    {
      question: "What information do you need to get started?",
      answer: `To provide the most accurate proposal, I'll need:\n\n• Project goals and target audience\n• Preferred timeline and budget range\n• Brand guidelines or style preferences\n• Technical requirements or constraints\n• Examples of designs you admire\n\nDon't worry if you don't have everything - we'll work together to define the details.`
    },
    {
      question: "Do you work with clients remotely?",
      answer: `Absolutely! I've successfully collaborated with clients worldwide:\n\n• Video calls for all major discussions\n• Collaborative design tools for real-time feedback\n• Regular progress updates and milestone reviews\n• Flexible scheduling across time zones\n\nMany of my best projects have been with remote clients. Distance is never a barrier to great work.`
    },
    {
      question: "What\'s included in your design process?",
      answer: `My comprehensive process ensures exceptional results:\n\n• Discovery & Strategy Phase\n• Concept Development & Wireframing\n• Visual Design & Prototyping\n• Development & Implementation\n• Testing & Quality Assurance\n• Launch Support & Training\n\nYou'll be involved at every stage with regular check-ins and feedback sessions.`
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: `Yes! Every project includes:\n\n• 30 days of complimentary post-launch support\n• Training on content management systems\n• Performance monitoring and optimization\n• Optional maintenance packages available\n• Priority support for future enhancements\n\nI'm committed to your long-term success, not just project completion.`
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <div className="bg-card rounded-2xl shadow-brand p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground">
          Quick answers to common questions about working together
        </p>
      </div>
      <div className="space-y-4">
        {faqs?.map((faq, index) => (
          <div
            key={index}
            className="border border-border rounded-lg overflow-hidden transition-brand hover:border-accent/50"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/30 transition-brand"
            >
              <span className="font-semibold text-foreground pr-4">{faq?.question}</span>
              <Icon
                name={openFAQ === index ? 'ChevronUp' : 'ChevronDown'}
                size={20}
                className={`text-muted-foreground transition-brand ${
                  openFAQ === index ? 'text-accent' : ''
                }`}
              />
            </button>
            
            <div
              className={`transition-all duration-300 ease-in-out ${
                openFAQ === index 
                  ? 'max-h-96 opacity-100' :'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-6 pb-4">
                <div className="pt-2 border-t border-border">
                  <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                    {faq?.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-6 bg-accent/5 border border-accent/20 rounded-lg text-center">
        <Icon name="MessageCircle" size={24} className="text-accent mx-auto mb-3" />
        <h3 className="font-semibold text-foreground mb-2">Still have questions?</h3>
        <p className="text-muted-foreground text-sm">
          Don't hesitate to reach out. I'm here to help clarify anything about the process, timeline, or investment.
        </p>
      </div>
    </div>
  );
};

export default FAQSection;