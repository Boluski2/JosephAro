import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Lightbox = ({ 
  image, 
  isOpen, 
  onClose, 
  onPrevious, 
  onNext, 
  currentIndex, 
  totalImages 
}) => {
  
  const handleKeyDown = useCallback((e) => {
    if (!isOpen) return;
    
    switch (e?.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        onPrevious();
        break;
      case 'ArrowRight':
        onNext();
        break;
      default:
        break;
    }
  }, [isOpen, onClose, onPrevious, onNext]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!image) return null;

  const getCollectionColor = (collection) => {
    const colors = {
      'brand-expressions': 'text-coral-300 border-coral-500/30',
      'digital-artistry': 'text-blue-300 border-blue-500/30',
      'process-documentation': 'text-navy-300 border-navy-500/30',
      'creative-experiments': 'text-accent border-accent/30'
    };
    return colors?.[collection] || 'text-muted-foreground border-border';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center justify-center text-white"
            aria-label="Close lightbox"
          >
            <Icon name="X" size={24} />
          </button>

          {/* Navigation Counter */}
          <div className="absolute top-6 left-6 z-10 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">
            {currentIndex + 1} of {totalImages}
          </div>

          {/* Previous Button */}
          {totalImages > 1 && (
            <button
              onClick={(e) => {
                e?.stopPropagation();
                onPrevious();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center justify-center text-white"
              aria-label="Previous image"
            >
              <Icon name="ChevronLeft" size={24} />
            </button>
          )}

          {/* Next Button */}
          {totalImages > 1 && (
            <button
              onClick={(e) => {
                e?.stopPropagation();
                onNext();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center justify-center text-white"
              aria-label="Next image"
            >
              <Icon name="ChevronRight" size={24} />
            </button>
          )}

          {/* Main Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="max-w-6xl max-h-[90vh] mx-6 flex flex-col lg:flex-row gap-6 bg-background/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e?.stopPropagation()}
          >
            {/* Image Section */}
            <div className="flex-1 relative bg-muted/20 flex items-center justify-center min-h-[400px] lg:min-h-[600px]">
              {/* Mock Image Display */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <Icon name="Image" size={80} className="mx-auto mb-4 text-muted-foreground" />
                  <p className="text-lg text-muted-foreground font-medium">{image?.alt}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {image?.dimensions?.width} × {image?.dimensions?.height}px
                  </p>
                </div>
              </div>

              {/* Collection Badge */}
              <div className="absolute top-6 left-6">
                <span className={`px-4 py-2 rounded-full text-sm font-medium border backdrop-blur-sm ${getCollectionColor(image?.collection)}`}>
                  {image?.collection?.replace('-', ' ')?.replace(/\b\w/g, l => l?.toUpperCase())}
                </span>
              </div>
            </div>

            {/* Info Section */}
            <div className="lg:w-80 p-8 flex flex-col">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground mb-3 font-display">
                  {image?.title}
                </h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {image?.description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center text-sm">
                    <Icon name="Calendar" size={16} className="mr-3 text-primary" />
                    <span className="text-muted-foreground">Created:</span>
                    <span className="ml-2 font-medium text-foreground">
                      {new Date(image.date)?.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>

                  <div className="flex items-center text-sm">
                    <Icon name="Zap" size={16} className="mr-3 text-primary" />
                    <span className="text-muted-foreground">Technique:</span>
                    <span className="ml-2 font-medium text-foreground">
                      {image?.technique}
                    </span>
                  </div>

                  <div className="flex items-center text-sm">
                    <Icon name="Layers" size={16} className="mr-3 text-primary" />
                    <span className="text-muted-foreground">Medium:</span>
                    <span className="ml-2 font-medium text-foreground capitalize">
                      {image?.medium?.replace('-', ' ')}
                    </span>
                  </div>

                  <div className="flex items-center text-sm">
                    <Icon name="Expand" size={16} className="mr-3 text-primary" />
                    <span className="text-muted-foreground">Dimensions:</span>
                    <span className="ml-2 font-medium text-foreground">
                      {image?.dimensions?.width} × {image?.dimensions?.height}px
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <Button
                  variant="default"
                  fullWidth
                  iconName="Download"
                  iconPosition="left"
                  className="bg-gradient-brand hover:opacity-90"
                  onClick={() => {
                    // Mock download functionality
                    console.log('Downloading image:', image?.title);
                  }}
                >
                  Download Image
                </Button>
                
                <Button
                  variant="outline"
                  fullWidth
                  iconName="ExternalLink"
                  iconPosition="left"
                  onClick={() => {
                    // Mock view project functionality
                    console.log('View project:', image?.title);
                  }}
                >
                  View Full Project
                </Button>
              </div>

              {/* Keyboard Shortcuts */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wide">
                  Keyboard Shortcuts
                </p>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Close</span>
                    <kbd className="px-2 py-1 bg-muted rounded text-xs">Esc</kbd>
                  </div>
                  {totalImages > 1 && (
                    <>
                      <div className="flex justify-between">
                        <span>Previous</span>
                        <kbd className="px-2 py-1 bg-muted rounded text-xs">←</kbd>
                      </div>
                      <div className="flex justify-between">
                        <span>Next</span>
                        <kbd className="px-2 py-1 bg-muted rounded text-xs">→</kbd>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;