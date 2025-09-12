import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('design');

  const skillCategories = {
    design: {
      title: "Design & Creative",
      icon: "Palette",
      color: "accent",
      skills: [
        { name: "UI/UX Design", level: 95, icon: "Smartphone" },
        { name: "Brand Identity", level: 90, icon: "Star" },
        { name: "Typography", level: 88, icon: "Type" },
        { name: "Color Theory", level: 92, icon: "Droplet" },
        { name: "Illustration", level: 85, icon: "PenTool" },
        { name: "Photography", level: 80, icon: "Camera" }
      ]
    },
    technical: {
      title: "Technical Skills",
      icon: "Code",
      color: "secondary",
      skills: [
        { name: "HTML/CSS", level: 95, icon: "Code2" },
        { name: "JavaScript", level: 88, icon: "Zap" },
        { name: "React", level: 85, icon: "Layers" },
        { name: "Figma", level: 98, icon: "Figma" },
        { name: "Adobe Creative Suite", level: 95, icon: "Image" },
        { name: "Prototyping", level: 90, icon: "Play" }
      ]
    },
    strategy: {
      title: "Strategy & Business",
      icon: "Target",
      color: "primary",
      skills: [
        { name: "Design Strategy", level: 92, icon: "Compass" },
        { name: "User Research", level: 88, icon: "Search" },
        { name: "Project Management", level: 90, icon: "CheckSquare" },
        { name: "Client Relations", level: 95, icon: "Users" },
        { name: "Brand Strategy", level: 87, icon: "TrendingUp" },
        { name: "Business Analysis", level: 83, icon: "BarChart3" }
      ]
    }
  };

  const tools = [
    { name: "Figma", icon: "Figma", category: "Design" },
    { name: "Adobe XD", icon: "Square", category: "Design" },
    { name: "Photoshop", icon: "Image", category: "Design" },
    { name: "Illustrator", icon: "PenTool", category: "Design" },
    { name: "Sketch", icon: "Edit3", category: "Design" },
    { name: "InVision", icon: "Eye", category: "Prototype" },
    { name: "Principle", icon: "Play", category: "Animation" },
    { name: "After Effects", icon: "Film", category: "Animation" }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-brand">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              <Icon name="Zap" size={16} className="mr-2" />
              Skills & Expertise
            </div>
            <h2 className="text-4xl font-bold font-display mb-6">
              Technical <span className="text-gradient">Mastery</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit built over years of hands-on experience, combining creative excellence with technical precision.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(skillCategories)?.map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-brand ${
                  activeCategory === key
                    ? `bg-${category?.color} text-white shadow-brand`
                    : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <Icon name={category?.icon} size={20} className="mr-2" />
                {category?.title}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories?.[activeCategory]?.skills?.map((skill, index) => (
              <div key={index} className="card-brand p-6 hover:shadow-brand-lg transition-brand">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-${skillCategories?.[activeCategory]?.color}/10 text-${skillCategories?.[activeCategory]?.color} rounded-lg flex items-center justify-center`}>
                      <Icon name={skill?.icon} size={20} />
                    </div>
                    <span className="font-semibold text-foreground">{skill?.name}</span>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{skill?.level}%</span>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`bg-gradient-to-r from-${skillCategories?.[activeCategory]?.color} to-${skillCategories?.[activeCategory]?.color}/80 h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill?.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tools Section */}
          <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold font-display mb-4">Favorite Tools</h3>
              <p className="text-muted-foreground">The arsenal that powers my creative process</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {tools?.map((tool, index) => (
                <div key={index} className="group">
                  <div className="bg-card rounded-xl p-4 text-center hover:shadow-brand transition-brand group-hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center text-white mx-auto mb-3 shadow-brand">
                      <Icon name={tool?.icon} size={24} />
                    </div>
                    <div className="text-sm font-medium text-foreground mb-1">{tool?.name}</div>
                    <div className="text-xs text-muted-foreground">{tool?.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;