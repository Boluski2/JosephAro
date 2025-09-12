import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TimelineSection = () => {
  const [activeItem, setActiveItem] = useState(0);

  const timelineData = [
    {
      year: "2016",
      title: "Pr​oject Management",
      role: "Mic​ro-Credential: University of Victoria",
      // company: "Mic​ro-Credential: University of Victoria",
      description: "Predictive Project management | Agile Project management | Lean ​Project management.",
      achievements: ["First design award", "Completed 25+ projects", "Learned Adobe Creative Suite"],
      icon: "Play"
    },
    {
      year: "2018",
      title: "Climate Change and its Impacts",
      role: "Summer Course - Brown International Advanced ​Research Institutes, Watson Institute for International ​andPublic Affairs, Brown University, Providence, Rhode ​Island, USA",
      // company: "Digital Innovations Ltd.",
      description: "Climate change and its impacts: Connecting local variability in a ​global system |Climate Physics and dynamics | Climate Financing | ​Climate Adaptation in Indigenous communities.",
      achievements: ["Led team of 3 designers", "Increased user engagement by 40%", "Launched 15+ digital products"],
      icon: "TrendingUp"
    },
    {
      year: "2020",
      title: "Master of Science in Geography",
      role: "University of Ilorin, Nigeria",
      // company: "Brand Strategy Group",
      description: "Specialization: Climate Change & Land Use Change in Sub-Saharan ​Africa.",
      achievements: ["Managed $2M+ projects", "Worked with Fortune 500 companies", "Developed design systems"],
      icon: "Target"
    },
    {
      year: "2022",
      title: "Bachelor of Technology in Geography",
      role: "Federal University of Technology, Yola, Nigeria(Now Modibbo Adama University)",
      // company: "Innovation Hub",
      description: "Concentration: Deploying GIS and Process Automation in Facility Management Honors: Best Graduating Student; Dean’s List",
      achievements: ["Built team of 12 creatives", "Won 5 industry awards", "Increased revenue by 60%"],
      icon: "Crown"
    },
    
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-brand">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
              <Icon name="Clock" size={16} className="mr-2" />
             Education Journey
            </div>
            <h2 className="text-4xl font-bold font-display mb-6">
              <span className="text-gradient">Milestones</span> & Growth
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every step of my journey has been a building block toward becoming the Creative Architect I am today.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-secondary to-primary transform md:-translate-x-0.5"></div>

            <div className="space-y-12">
              {timelineData?.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center cursor-pointer transition-brand ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  onClick={() => setActiveItem(activeItem === index ? -1 : index)}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-background border-4 border-accent rounded-full transform md:-translate-x-1/2 z-10"></div>
                  
                  {/* Year Badge */}
                  <div className="absolute left-16 md:left-1/2 top-0 transform md:-translate-x-1/2 md:-translate-y-8">
                    <div className="bg-gradient-brand text-white px-3 py-1 rounded-full text-sm font-bold shadow-brand">
                      {item?.year}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className={`card-brand p-6 hover:shadow-brand-lg transition-brand ${
                      activeItem === index ? 'ring-2 ring-accent shadow-brand-lg' : ''
                    }`}>
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center text-white shadow-brand">
                            <Icon name={item?.icon} size={20} />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-bold text-foreground mb-1">{item?.title}</h3>
                          <div className="text-accent font-medium mb-1">{item?.role}</div>
                          <div className="text-sm text-muted-foreground mb-3">{item?.company}</div>
                          <p className="text-muted-foreground leading-relaxed mb-4">{item?.description}</p>
                          
                          {activeItem === index && (
                            <div className="animate-slide-up">
                              <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                              <ul className="space-y-1">
                                {item?.achievements?.map((achievement, idx) => (
                                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                                    <Icon name="CheckCircle" size={16} className="text-accent mr-2 flex-shrink-0" />
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="mt-4 flex items-center justify-between">
                        <div className="text-xs text-muted-foreground">
                          Click to {activeItem === index ? 'collapse' : 'expand'} details
                        </div>
                        <Icon 
                          name={activeItem === index ? "ChevronUp" : "ChevronDown"} 
                          size={16} 
                          className="text-muted-foreground" 
                        />
                      </div>
                    </div>
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

export default TimelineSection;