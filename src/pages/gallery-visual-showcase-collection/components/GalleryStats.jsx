import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const GalleryStats = ({ images, collections }) => {
  const stats = [
    {
      icon: 'Image',
      label: 'Total Pieces',
      value: images?.length || 0,
      color: 'text-primary'
    },
    {
      icon: 'Layers',
      label: 'Collections',
      value: collections?.filter(c => c?.id !== 'all')?.length || 0,
      color: 'text-accent'
    },
    {
      icon: 'Calendar',
      label: 'Years Active',
      value: '3+',
      color: 'text-secondary'
    },
    {
      icon: 'Zap',
      label: 'Techniques',
      value: new Set(images?.map(img => img.technique))?.size || 0,
      color: 'text-coral-500'
    }
  ];

  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
    >
      {stats?.map((stat, index) => (
        <motion.div
          key={stat?.label}
          variants={item}
          className="text-center group"
        >
          <div className="relative inline-flex items-center justify-center w-16 h-16 mb-3 rounded-2xl bg-muted/30 border border-border/50 transition-all duration-300 group-hover:bg-muted/50 group-hover:border-primary/30 group-hover:scale-110">
            <Icon 
              name={stat?.icon} 
              size={24} 
              className={`${stat?.color} transition-colors duration-300 group-hover:scale-110`} 
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-foreground font-display group-hover:text-primary transition-colors duration-300">
              {stat?.value}
            </p>
            <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              {stat?.label}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GalleryStats;