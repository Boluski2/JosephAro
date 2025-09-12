import Header from '../../components/ui/Header';
import ContactForm from './components/ContactForm';
import Icon from '../../components/AppIcon';

const ContactGatewayConnectionHub = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/30 to-accent/5">
        <div className="container-brand">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="MessageCircle" size={16} />
              <span>Let's Start a Conversation</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Ready to Bring Your <span className="text-gradient">Vision to Life</span>?
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Every extraordinary project begins with a simple conversation. Whether you have a clear vision or just a spark of an idea, I'm here to help transform it into something remarkable.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="Clock" size={16} className="text-accent" />
                <span className="text-sm">24hr response time</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="Shield" size={16} className="text-accent" />
                <span className="text-sm">NDA protection available</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="Globe" size={16} className="text-accent" />
                <span className="text-sm">Remote collaboration worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information Sidebar */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground mb-8">
                    Prefer to reach out directly? Here's how you can connect with me. I'm always open to discussing new projects and opportunities.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email Me</h3>
                      <p className="text-muted-foreground">hello@josepharo.com</p>
                      <p className="text-sm text-muted-foreground mt-1">Typically replies within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Call Me</h3>
                      <p className="text-muted-foreground">+234123456789</p>
                      <p className="text-sm text-muted-foreground mt-1">Mon-Fri from 9am - 5pm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Location</h3>
                      <p className="text-muted-foreground">Lagos</p>
                      <p className="text-sm text-muted-foreground mt-1">Available for remote work worldwide</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6">
                  <h3 className="font-semibold text-foreground mb-4">Follow My Work</h3>
                  <div className="flex space-x-3">
                    {['Linkedin', 'Twitter', 'Instagram', 'Dribbble']?.map((social) => (
                      <a
                        key={social}
                        href={`https://${social?.toLowerCase()}.com/josepharo`}
                        className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-brand text-accent"
                      >
                        <Icon name={social} size={18} />
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-3">What to Expect</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Personal response, no automated replies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Initial consultation at no cost</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Transparent pricing with no hidden fees</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 bg-background">
        <div className="container-brand">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Trusted by Visionaries</h2>
            <p className="text-muted-foreground">Hear what clients and collaborators have to say about working together.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Joseph transformed our vague concept into a stunning digital experience that exceeded all expectations.",
                author: "Sarah Johnson",
                role: "CEO, TechInnovate"
              },
              {
                quote: "The attention to detail and creative problem-solving approach made this collaboration truly exceptional.",
                author: "Michael Chen",
                role: "Product Director, Nexus Labs"
              },
              {
                quote: "Working with Joseph was seamless from concept to delivery. The communication was outstanding throughout.",
                author: "Elena Rodriguez",
                role: "Marketing Director, Visionary Co."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-brand border border-border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
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

export default ContactGatewayConnectionHub;