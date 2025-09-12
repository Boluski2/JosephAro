import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const ctaOptions = [
    {
      title: "Strengthening Social & Climate Justice through Geo-spatial Analysis",
      subtitle: "CENTER FOR HUMAN RIGHTS & HUMANITARIAN STUDIES",
      description: "Ready to transform your vision into reality? Let's discuss your project and explore how we can create something amazing together.",
      color: "accent",
      link: "/contact-gateway-connection-hub",
      buttonText: "Read more",
      buttonIcon: "ArrowRight",
      image: "/image/jor7.png"
    },
    {
      title: "OEA Consults- An Indigenous Company Providing Novel Geospatial Services across Africa",
      subtitle: "SPACE IN AFRICA",
      description: "AFRICA The space scene in Africa is still miles away from the level we all hope it attains. However, the international development partners and agencies, the Digital Earth Africa, Africa Geoportal, and several other initiatives across the continent are focused on improving the use of earth observation data across Africa and driving sustainable developments from the solutions.",
      color: "secondary",
      link: "/work-portfolio-interactive-showcase",
      buttonText: "Read more",
      buttonIcon: "ExternalLink",
      image: "/image/jor9.png"
    },
    {
      title: "Selection Committee on Best Practices and Advances in data Analysis",
      subtitle: "American Association of Geography",
      description: "The Selection Committee on Best Practices and Advances in Data Analysis is composed of faculty at all levels and a graduate student: Dr. Jessica Morgan (Chair, University of Rhode Island), Dr. Michael Richard Desjardins (Member, Johns Hopkins Bloomberg School of Public Health), Dr. Will B. Payne (Member, Rutgers University), Dr. Ayodeji Iyanda (Member, Prairie View A&M University), and Joseph Aro (Graduate Student Member, University of Lagos, Observatory Earth Analytics).",
      color: "primary", 
      link: "/services-hub-capability-showcase",
      buttonText: "Read more",
      buttonIcon: "Compass",
      image: "/image/jor2.png"
    }
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-10"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container-brand">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-8 tracking-tight">
              Press
            </h2>
            <div className="w-24 h-1 bg-gray-800"></div>
          </div>

          {/* CTA Options Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {ctaOptions?.map((option, index) => (
              <div key={index} className="group cursor-pointer flex flex-col">
                <Link to={option?.link} className=" flex-1 flex flex-col">
                  <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-500 h-full border border-gray-200 flex flex-col">
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
                      
                      {/* Image */}
                      <img 
                        src={option.image} 
                        alt={option.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Overlay Content */}
                      <div className="absolute bottom-4 left-4 z-20">
                        <div className="text-xs font-bold text-white tracking-wider">
                          {option?.subtitle}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors line-clamp-3">
                        {option?.title}
                      </h3>
                      
                      <p className="text-gray-700 leading-relaxed mb-6 text-sm flex-1 line-clamp-5">
                        {option?.description}
                      </p>
                      
                      {/* CTA Button with Border */}
                      <div className="border border-gray-300 rounded px-4 py-2 inline-block group-hover:border-gray-700 group-hover:bg-gray-50 transition-colors mt-auto w-fit">
                        <span className="text-gray-800 font-medium text-sm tracking-wide">
                          {option?.buttonText}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;