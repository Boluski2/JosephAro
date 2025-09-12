import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const benefits = [
    "Weekly creative insights and design trends",
    "Exclusive templates and resources",
    "Behind-the-scenes project breakdowns",
    "Early access to new content and tools"
  ];

  // Sample data for the 3x3 grid
  const gridItems = [
    {
      title: "Abyss of Deceptions",
      date: "2030",
      image: '/image/Abyss.png',
      description: "A gripping coastal thriller that masterfully combines the serene charm of a coastal setting with an enthralling mystery."
    },
    {
      title: "The Midnight EnigmaI",
      date: "2026",
      image: '/image/Midnight .png',
      description: "A mind-bending psychological thriller that follows a ​detective on a race against time to solve a series ​of cryptic and interconnected mysteries."
    },
    {
      title: "10,000 Ha Aerial Mapping - IPERU",
      date: "2021 - Project Manager",
      image: '/image/Project.png',
      description: "Aerial LiDAR & Photogrammetric Survey towards ​urban Planning and Flood Risk Assessment of ​Iperu-Remo."
    },
    {
      title: "Abyss of Deceptions",
      date: "2030",
      image: '/image/Abyss.png',
      description: "A gripping coastal thriller that masterfully combines the serene charm of a coastal setting with an enthralling mystery."
    },
    {
      title: "The Midnight EnigmaI",
      date: "2026",
      image:  '/image/Midnight .png',
      description: "A mind-bending psychological thriller that follows a ​detective on a race against time to solve a series ​of cryptic and interconnected mysteries."
    },
    {
      title: "Microinteractions",
      date: "Sep 10, 2023",
      image: '/image/Project.png',
      description: "Small details that make a big impact on user engagement."
    },
    {
      title: "Cryptic Descent",
      date: "2018",
      image: '/image/Descent.png',
      description: "Making your designs usable for everyone regardless of abilities."
    },
    {
      title: "The Vanishing Act",
      date: "2016",
      image: '/image/Act.png',
      description: "Tools and techniques for effective design team collaboration."
    },
    {
      title: "Reflections of Fear",
      date: "2013",
      image: '/image/vid.png',
      description: "Adding purposeful animation to enhance user experience."
    }
  ];

  if (isSubscribed) {
    return (
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container-brand">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={32} className="text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Welcome to the Creative Community!
            </h2>
            <p className="text-gray-300 mb-6">
              Thank you for subscribing! Check your inbox for a welcome email with exclusive resources.
            </p>
            <Button 
              variant="outline" 
              onClick={() => setIsSubscribed(false)}
              iconName="RefreshCw" 
              iconPosition="left"
              className="border-gray-600 text-gray-200 hover:bg-gray-700"
            >
              Subscribe Another Email
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container-brand">
        {/* Header with bold text on left and other text on right */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-5xl lg:text-8xl font-bold text-white">
              Humanitarian
            </h2>
          </div>
          <div className="text-gray-400 max-w-md text-right">
            <p className="md:text-xl sm:text-lg">
              Over 12 years of experience in deploying Geo-spatial Solutions. Started out as ​an Instructor at the University teaching Postgraduate GIS, then progressed to ​Geo-spatial Consultancy deploying over 100 GIS projects and Products across ​Engineering, urban Planning, Agric and Environments
            </p>
          </div>
        </div>

        {/* 3x3 Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {gridItems.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 transition-all hover:shadow-xl hover:border-accent/50">
              <div className="p-4">
                {/* Date at the top */}
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xl text-gray-400">{item.date}</span>
                </div>
                
                {/* Title below the date */}
                <h3 className="font-bold text-white text-lg mb-4">{item.title}</h3>
                
                <div className="h-48 bg-gray-700 rounded-lg overflow-hidden mb-4">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-300 text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;