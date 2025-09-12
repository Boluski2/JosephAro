import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const ResourcesSection = () => {
  const publications = [
    {
      id: 1,
      title: "Journal Articles",
      description: "Peer-reviewed research publications in leading academic journals, focusing on rural women empowerment, digital marketing strategies, and healthcare management systems.",
      type: "Academic Papers",
      count: "15+ Articles",
      citations: "342 Citations",
      icon: "BookOpen",
      color: "primary",
      impactFactor: "4.2 avg IF",
      publications: [
        "Assessment of Rural Women in Agro Sector - International Journal of Management (2016)",
        "Digital Marketing Solutions for Efficient Positioning - Journal of Strategic Management (2018)",
        "Healthcare System Analysis - Medical Informatics Quarterly (2019)",
        "Sustainable Development Goals Implementation - Development Studies Review (2020)"
      ]
    },
    {
      id: 2,
      title: "Conference Proceedings", 
      description: "Presentations at international conferences and seminars, including IEEE, ACM, and specialized domain conferences across multiple countries.",
      type: "Conference Papers",
      count: "28+ Papers",
      citations: "156 Citations",
      icon: "Users",
      color: "accent",
      impactFactor: "H-index: 12",
      publications: [
        "Connecting Rural Variability - International Conference on Rural Development (2017)",
        "Land Use Classification - IEEE Conference on Geospatial Analysis (2018)", 
        "Digital Transformation in Healthcare - ACM Health Informatics (2019)",
        "Sustainable Agriculture Practices - World Agriculture Summit (2020)"
      ]
    },
    {
      id: 3,
      title: "Book Chapters & Web Articles",
      description: "Authored chapters in academic books and numerous web articles on contemporary issues in technology, healthcare, and social development.",
      type: "Book Publications",
      count: "12+ Chapters",
      citations: "89 Citations",
      icon: "FileText",
      color: "secondary", 
      impactFactor: "8 Books",
      publications: [
        "Rural Development Strategies - Handbook of Social Economics (2018)",
        "Digital Health Solutions - Modern Healthcare Systems (2019)",
        "Sustainable Technology Implementation - Green Technology Review (2020)",
        "Women Empowerment in Agriculture - Gender Studies Compendium (2021)"
      ]
    }
  ];

  const handleViewPublication = (publicationType) => {
    console.log(`Viewing: ${publicationType}`);
    // In a real application, this would open publication details or external links
  };

  return (
    <section className="section-padding bg-slate-900 text-white">
      <div className="container-brand">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm font-medium mb-6">
              <Icon name="Award" size={16} className="mr-2 text-blue-400" />
              Academic Contributions
            </div>
            <h2 className="text-5xl font-bold font-display mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                PUBLICATIONS
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Contributions as a tool that can be used as references, reports, and online resources across multiple academic domains and research areas.
            </p>
          </div>

          {/* Publications Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {publications?.map((publication) => (
              <div key={publication?.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-300 group hover:transform hover:scale-105">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${
                    publication?.color === 'primary' ? 'from-blue-500/20 to-blue-600/20 border-blue-500/30' :
                    publication?.color === 'accent' ? 'from-purple-500/20 to-purple-600/20 border-purple-500/30' :
                    'from-teal-500/20 to-teal-600/20 border-teal-500/30'
                  } border rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={publication?.icon} size={28} className={`${
                      publication?.color === 'primary' ? 'text-blue-400' :
                      publication?.color === 'accent' ? 'text-purple-400' :
                      'text-teal-400'
                    }`} />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-400 font-medium">{publication?.citations}</div>
                    <div className="flex items-center text-xs text-slate-400 mt-1">
                      <Icon name="TrendingUp" size={12} className="mr-1" />
                      {publication?.impactFactor}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {publication?.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                    {publication?.description}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-slate-400 mb-6 bg-slate-900/30 rounded-lg p-3">
                    <div className="flex items-center">
                      <Icon name="FileType" size={14} className="mr-2" />
                      {publication?.type}
                    </div>
                    <div className="flex items-center">
                      <Icon name="Hash" size={14} className="mr-2" />
                      {publication?.count}
                    </div>
                  </div>

                  {/* Recent Publications */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white text-sm flex items-center">
                      <Icon name="Star" size={14} className="mr-2 text-yellow-400" />
                      Recent Publications:
                    </h4>
                    <ul className="space-y-2">
                      {publication?.publications?.slice(0, 3).map((pub, index) => (
                        <li key={index} className="flex items-start text-xs text-slate-400 leading-relaxed">
                          <Icon name="ChevronRight" size={12} className={`${
                            publication?.color === 'primary' ? 'text-blue-400' :
                            publication?.color === 'accent' ? 'text-purple-400' :
                            'text-teal-400'
                          } mr-2 mt-0.5 flex-shrink-0`} />
                          <span className="hover:text-slate-300 transition-colors cursor-pointer">
                            {pub}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* View Button */}
                <Button
                  variant="outline"
                  fullWidth
                  iconName="ExternalLink"
                  iconPosition="right"
                  onClick={() => handleViewPublication(publication?.title)}
                  className={`${
                    publication?.color === 'primary' ? 'border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400/50' :
                    publication?.color === 'accent' ? 'border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400/50' :
                    'border-teal-500/30 text-teal-400 hover:bg-teal-500/10 hover:border-teal-400/50'
                  } transition-all duration-300 group-hover:transform group-hover:translateY-1`}
                >
                  View Publications
                </Button>
              </div>
            ))}
          </div>

          {/* Academic Profile CTA */}
          <div className="relative overflow-hidden bg-gradient-to-r from-slate-800/80 via-slate-700/80 to-slate-800/80 backdrop-blur-sm border border-slate-600/30 rounded-3xl p-8 md:p-12 text-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }} />
            </div>
            
            <div className="relative max-w-3xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Icon name="GraduationCap" size={40} className="text-blue-400" />
              </div>
              
              <h3 className="text-3xl font-bold font-display mb-4 text-white">
                Research Collaboration
              </h3>
              <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                Interested in collaborative research or citing these publications? 
                Connect with me to explore opportunities for joint research projects and academic partnerships.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                to= "/contact-gateway-connection-hub"
                >
                <Button
                  variant="default"
                  iconName="Mail"
                  iconPosition="left"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 text-white font-medium"
                >
                  Contact for Collaboration
                </Button>
                </Link>
              </div>
              
              <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-slate-400">
                <div className="flex items-center">
                  <Icon name="Award" size={16} className="mr-2 text-yellow-400" />
                  <span>H-index: 15</span>
                </div>
                <div className="flex items-center">
                  <Icon name="BarChart" size={16} className="mr-2 text-green-400" />
                  <span>587 Total Citations</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Users" size={16} className="mr-2 text-blue-400" />
                  <span>12 Co-authors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;