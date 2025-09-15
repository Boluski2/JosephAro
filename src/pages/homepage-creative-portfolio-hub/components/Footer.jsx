import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const navigationLinks = [
    { name: 'Home', path: '/homepage-creative-portfolio-hub' },
    { name: 'Work', path: '/work-portfolio-interactive-showcase' },
    { name: 'About', path: '/about-experience-personal-brand-story' },
    { name: 'Insights', path: '/insights-center-thought-leadership-hub' },
    { name: 'Contact', path: '/contact-gateway-connection-hub' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', url: '#', color: 'hover:text-[#0A66C2]' },
    { name: 'Dribbble', icon: 'Dribbble', url: '#', color: 'hover:text-[#EA4C89]' },
    { name: 'Behance', icon: 'Eye', url: '#', color: 'hover:text-[#1769FF]' },
    { name: 'Instagram', icon: 'Instagram', url: '#', color: 'hover:text-[#E4405F]' },
    { name: 'Twitter', icon: 'Twitter', url: '#', color: 'hover:text-[#1DA1F2]' }
  ];

  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-5 gap-10 mb-16">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <Link 
                to="/homepage-creative-portfolio-hub" 
                className="inline-flex items-center space-x-3 mb-6 group"
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-gray-700/30 transition-all duration-300">
                    <span className="text-white font-bold text-xl font-sans">JA</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold font-sans group-hover:text-emerald-400 transition-colors duration-300">Joseph Aro</span>
                </div>
              </Link>
              
              <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
                Crafting digital experiences that resonate. Where creativity meets strategy, and ideas become compelling realities.
              </p>
              
              <div className="flex gap-3 mb-8">
                {socialLinks?.map((social, index) => (
                  <a
                    key={index}
                    href={social?.url}
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-750 hover:scale-110 ${social?.color}`}
                    aria-label={social?.name}
                  >
                    <Icon name={social?.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-2 font-sans text-gray-300">Explore</h3>
              <div className="grid grid-cols-1 ">
                {navigationLinks?.map((link, index) => (
                  <Link
                    key={index}
                    to={link?.path}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 py-2 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link?.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 font-sans text-gray-300">Connect</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Icon name="MapPin" size={16} className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-400">Lagos, Nigeria </span>
                </div>
                <div className="flex items-start">
                  <Icon name="Mail" size={16} className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                  <a href="mailto:hello@josepharo.com" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                    hello@josepharo.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-500">
                <p>&copy; {currentYear} Joseph Aro. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;