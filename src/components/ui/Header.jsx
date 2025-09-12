import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage-creative-portfolio-hub', icon: 'Home' },
     { name: 'About', path: '/about-experience-personal-brand-story', icon: 'User' },
    { name: 'Work', path: '/work-portfolio-interactive-showcase', icon: 'Briefcase' },
    { name: 'Insights', path: '/insights-center-thought-leadership-hub', icon: 'BookOpen' },
    { name: 'Gallery', path: '/gallery-visual-showcase-collection', icon: 'Images' },
  ];

  const secondaryItems = [
    { name: 'Contact', path: '/contact-gateway-connection-hub', icon: 'Mail' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const Logo = () => (
    <Link 
      to="/homepage-creative-portfolio-hub" 
      className="flex items-center space-x-2 transition-brand hover:opacity-80"
      onClick={closeMenu}
    >
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center shadow-brand">
          <span className="text-white font-bold text-lg font-display">JA</span>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-pulse-subtle"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold text-white font-display">Joseph Aro</span>
      </div>
    </Link>
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900 shadow-lg border-b border-gray-700' 
          : 'bg-gray-900/95'
      }`}
    >
      <div className="container-brand">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`px-4 py-2.5 rounded-lg transition-all duration-300 flex items-center font-bold ${
                  isActivePath(item?.path)
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-200 bg-gray-800 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <Icon name={item?.icon} size={16} className="mr-2" />
                {item?.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact-gateway-connection-hub">
              <Button 
                variant="primary" 
                iconName="Mail" 
                iconPosition="left"
                className="font-bold bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition-colors shadow-md"
              >
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="relative bg-gray-800 hover:bg-gray-700 text-white"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span 
                  className={`absolute block h-0.5 w-6 bg-current transform transition-transform duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : '-translate-y-1'
                  }`}
                />
                <span 
                  className={`absolute block h-0.5 w-6 bg-current transform transition-opacity duration-300 translate-y-2 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span 
                  className={`absolute block h-0.5 w-6 bg-current transform transition-transform duration-300 translate-y-4 ${
                    isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                  }`}
                />
              </div>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-gray-900 border-t border-gray-700 shadow-lg">
          <div className="container-brand py-4">
            <nav className="flex flex-col space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`flex items-center px-4 py-3 rounded-lg transition-all font-bold ${
                    isActivePath(item?.path)
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-200 bg-gray-800 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <Icon name={item?.icon} size={20} className="mr-3" />
                  <span className="font-bold">{item?.name}</span>
                  {isActivePath(item?.path) && (
                    <Icon name="ChevronRight" size={16} className="ml-auto text-white" />
                  )}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-700 mt-4">
                {secondaryItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    onClick={closeMenu}
                    className={`flex items-center px-4 py-3 rounded-lg transition-all font-bold ${
                      isActivePath(item?.path)
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-200 bg-gray-800 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <Icon name={item?.icon} size={20} className="mr-3" />
                    <span className="font-bold">{item?.name}</span>
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;