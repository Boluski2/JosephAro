import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CapabilityMatrix = () => {
  const [activeCategory, setActiveCategory] = useState('design');

  const capabilities = {
    design: {
      title: 'Design & Creative',
      icon: 'Palette',
      color: 'accent',
      description: 'Visual design expertise across digital and print mediums',
      skills: [
        { name: 'Brand Identity Design', level: 95, experience: '8+ years' },
        { name: 'UI/UX Design', level: 92, experience: '7+ years' },
        { name: 'Web Design', level: 98, experience: '9+ years' },
        { name: 'Print Design', level: 85, experience: '6+ years' },
        { name: 'Illustration', level: 78, experience: '5+ years' },
        { name: 'Motion Graphics', level: 72, experience: '4+ years' }
      ]
    },
    technical: {
      title: 'Technical & Development',
      icon: 'Code',
      color: 'secondary',
      description: 'Frontend development and modern web technologies',
      skills: [
        { name: 'React & Next.js', level: 90, experience: '6+ years' },
        { name: 'JavaScript/TypeScript', level: 88, experience: '7+ years' },
        { name: 'HTML/CSS', level: 95, experience: '9+ years' },
        { name: 'Tailwind CSS', level: 92, experience: '4+ years' },
        { name: 'Node.js', level: 75, experience: '4+ years' },
        { name: 'Git & Version Control', level: 85, experience: '6+ years' }
      ]
    },
    strategy: {
      title: 'Strategy & Consulting',
      icon: 'Target',
      color: 'primary',
      description: 'Strategic thinking and business-focused creative solutions',
      skills: [
        { name: 'Brand Strategy', level: 88, experience: '7+ years' },
        { name: 'User Research', level: 82, experience: '5+ years' },
        { name: 'Project Management', level: 90, experience: '8+ years' },
        { name: 'Creative Direction', level: 85, experience: '6+ years' },
        { name: 'Business Analysis', level: 78, experience: '5+ years' },
        { name: 'Client Relations', level: 92, experience: '8+ years' }
      ]
    },
    tools: {
      title: 'Tools & Software',
      icon: 'Tool',
      color: 'accent',
      description: 'Proficiency in industry-standard design and development tools',
      skills: [
        { name: 'Figma', level: 95, experience: '5+ years' },
        { name: 'Adobe Creative Suite', level: 90, experience: '8+ years' },
        { name: 'Sketch', level: 85, experience: '6+ years' },
        { name: 'Webflow', level: 80, experience: '4+ years' },
        { name: 'Framer', level: 75, experience: '3+ years' },
        { name: 'Notion', level: 88, experience: '4+ years' }
      ]
    }
  };

  const categories = Object.keys(capabilities);
  const currentCapability = capabilities?.[activeCategory];

  const getSkillColor = (level) => {
    if (level >= 90) return 'bg-accent';
    if (level >= 80) return 'bg-secondary';
    if (level >= 70) return 'bg-primary';
    return 'bg-muted-foreground';
  };

  const getSkillLabel = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Proficient';
    return 'Intermediate';
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-brand">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Capability <span className="text-accent">Matrix</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, creative expertise, and strategic capabilities developed through years of hands-on experience.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories?.map((category) => {
            const cap = capabilities?.[category];
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center px-6 py-3 rounded-xl transition-brand ${
                  activeCategory === category
                    ? `bg-${cap?.color} text-white shadow-brand-lg`
                    : 'bg-card text-muted-foreground hover:bg-muted/50 hover:text-foreground border'
                }`}
              >
                <Icon name={cap?.icon} size={20} className="mr-3" />
                <span className="font-medium">{cap?.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Category Info */}
          <div className="lg:col-span-1">
            <div className="bg-card p-8 rounded-xl border shadow-brand sticky top-8">
              <div className={`w-16 h-16 bg-${currentCapability?.color} rounded-xl flex items-center justify-center mb-6`}>
                <Icon name={currentCapability?.icon} size={32} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {currentCapability?.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {currentCapability?.description}
              </p>

              {/* Legend */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground mb-3">Skill Levels</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-accent rounded mr-3"></div>
                    <span className="text-sm text-muted-foreground">Expert (90%+)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-secondary rounded mr-3"></div>
                    <span className="text-sm text-muted-foreground">Advanced (80-89%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-primary rounded mr-3"></div>
                    <span className="text-sm text-muted-foreground">Proficient (70-79%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentCapability?.skills?.map((skill, index) => (
                <div
                  key={skill?.name}
                  className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-brand transition-brand"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{skill?.name}</h4>
                      <p className="text-sm text-muted-foreground">{skill?.experience}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-foreground">{skill?.level}%</div>
                      <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                        skill?.level >= 90 ? 'bg-accent/10 text-accent' :
                        skill?.level >= 80 ? 'bg-secondary/10 text-secondary' :
                        skill?.level >= 70 ? 'bg-primary/10 text-primary': 'bg-muted text-muted-foreground'
                      }`}>
                        {getSkillLabel(skill?.level)}
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative">
                    <div className="w-full bg-muted/30 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${getSkillColor(skill?.level)}`}
                        style={{ width: `${skill?.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Category Summary */}
            <div className="mt-8 bg-muted/20 p-6 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-accent mb-1">
                    {Math.round(currentCapability?.skills?.reduce((acc, skill) => acc + skill?.level, 0) / currentCapability?.skills?.length)}%
                  </div>
                  <div className="text-sm text-muted-foreground">Average Proficiency</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary mb-1">
                    {currentCapability?.skills?.filter(skill => skill?.level >= 90)?.length}
                  </div>
                  <div className="text-sm text-muted-foreground">Expert Level Skills</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">
                    {Math.max(...currentCapability?.skills?.map(skill => parseInt(skill?.experience)))}+
                  </div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilityMatrix;