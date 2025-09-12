import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const GalleryGrid = ({ images, onImageClick }) => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [hoveredImage, setHoveredImage] = useState(null);
  const gridRef = useRef(null);

  // Mock image loading - in real app would use actual images
  useEffect(() => {
    images?.forEach((image, index) => {
      setTimeout(() => {
        setLoadedImages(prev => new Set([...prev, image.id]));
      }, index * 100);
    });
  }, [images]);

  const getCollectionColor = (collection) => {
    const colors = {
      'brand-expressions': 'border-coral-500/20 bg-coral-500/5',
      'digital-artistry': 'border-blue-500/20 bg-blue-500/5',
      'process-documentation': 'border-navy-500/20 bg-navy-500/5',
      'creative-experiments': 'border-accent/20 bg-accent/5'
    };
    return colors?.[collection] || 'border-border/20 bg-muted/5';
  };

  const getImageHeight = (index, dimensions) => {
    // Create masonry effect with varying heights
    const baseHeight = 280;
    const variation = [1, 1.3, 0.8, 1.1, 0.9, 1.2]?.[index % 6];
    return Math.floor(baseHeight * variation);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
      ref={gridRef}
      variants={container}
      initial="hidden"
      animate="show"
      className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
    >
      {images?.map((image, index) => {
        const isLoaded = loadedImages?.has(image?.id);
        const isHovered = hoveredImage === image?.id;
        
        return (
          <motion.div
            key={image?.id}
            variants={item}
            layout
            className={`break-inside-avoid mb-6 group cursor-pointer ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-500`}
            onClick={() => onImageClick?.(image, index)}
            onMouseEnter={() => setHoveredImage(image?.id)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className={`relative rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
              getCollectionColor(image?.collection)
            } ${isHovered ? 'transform scale-[1.02] shadow-2xl' : 'shadow-lg hover:shadow-xl'}`}>
              
              {/* Image Container */}
              <div 
                className="relative bg-muted/20 flex items-center justify-center"
                style={{ 
                  height: `${getImageHeight(index, image?.dimensions)}px`,
                  minHeight: '200px'
                }}
              >
                {/* Placeholder while loading */}
                {!isLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
                  </div>
                )}
                
                {/* Mock Image Display */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-center p-6">
                    <Icon name="Image" size={40} className="mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground font-medium">{image?.alt}</p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                } flex items-center justify-center`}>
                  <div className="text-white text-center p-6 transform transition-transform duration-300 ${
                    isHovered ? 'translate-y-0 scale-100' : 'translate-y-4 scale-95'
                  }">
                    <Icon name="ZoomIn" size={24} className="mx-auto mb-2" />
                    <p className="text-sm font-medium">Click to view full size</p>
                  </div>
                </div>

                {/* Collection Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${
                    image?.collection === 'brand-expressions' ? 'bg-coral-500/20 text-coral-300 border-coral-500/30' :
                    image?.collection === 'digital-artistry' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                    image?.collection === 'process-documentation' ? 'bg-navy-500/20 text-navy-300 border-navy-500/30' :
                    image?.collection === 'creative-experiments' ? 'bg-accent/20 text-accent-foreground border-accent/30' :
                    'bg-muted/20 text-muted-foreground border-border/30'
                  }`}>
                    {image?.collection?.replace('-', ' ')?.replace(/\b\w/g, l => l?.toUpperCase())}
                  </span>
                </div>

                {/* Expand Icon */}
                <div className="absolute top-4 right-4">
                  <div className={`w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                    isHovered ? 'bg-white/30 scale-110' : ''
                  }`}>
                    <Icon name="Expand" size={16} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Image Info */}
              <div className="p-4 bg-background/95 backdrop-blur-sm">
                <h3 className="font-semibold text-foreground mb-1 truncate">
                  {image?.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                  {image?.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center">
                    <Icon name="Calendar" size={12} className="mr-1" />
                    {new Date(image.date)?.toLocaleDateString('en-US', { 
                      month: 'short', 
                      year: 'numeric' 
                    })}
                  </span>
                  <span className="flex items-center">
                    <Icon name="Zap" size={12} className="mr-1" />
                    {image?.technique}
                  </span>
                </div>
              </div>

              {/* Interactive Border Effect */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-300 ${
                isHovered ? 'border-primary/50 shadow-lg shadow-primary/20' : ''
              } pointer-events-none`} />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default GalleryGrid;