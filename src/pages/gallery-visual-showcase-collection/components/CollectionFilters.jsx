import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CollectionFilters = ({
  collections,
  mediums,
  colorPalettes,
  selectedCollection,
  selectedMedium,
  selectedColor,
  onCollectionChange,
  onMediumChange,
  onColorChange
}) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const getCollectionColorClass = (colorId) => {
    const colors = {
      'coral': 'bg-coral-500',
      'electric-blue': 'bg-blue-500',
      'navy': 'bg-navy-500',
      'accent': 'bg-accent',
      'neutral': 'bg-muted-foreground'
    };
    return colors?.[colorId] || 'bg-muted-foreground';
  };

  const CollectionButton = ({ collection, isSelected, onClick }) => (
    <button
      onClick={() => onClick(collection?.id)}
      className={`flex items-center px-4 py-2 rounded-xl border transition-all duration-200 ${
        isSelected
          ? 'bg-primary text-primary-foreground border-primary shadow-sm'
          : 'bg-background hover:bg-muted border-border hover:border-primary/30 text-foreground'
      }`}
    >
      <div className={`w-2 h-2 rounded-full mr-2 ${getCollectionColorClass(collection?.color)}`} />
      <span className="font-medium">{collection?.name}</span>
      <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
        isSelected 
          ? 'bg-primary-foreground/20 text-primary-foreground'
          : 'bg-muted text-muted-foreground'
      }`}>
        {collection?.count}
      </span>
    </button>
  );

  const FilterDropdown = ({ label, options, selected, onChange, icon }) => {
    const isOpen = activeDropdown === label?.toLowerCase();
    const selectedOption = options?.find(opt => opt?.id === selected);

    return (
      <div className="relative">
        <Button
          variant="outline"
          onClick={() => toggleDropdown(label?.toLowerCase())}
          className="justify-between min-w-[160px]"
          iconName={icon}
          iconPosition="left"
        >
          <span className="truncate">{selectedOption?.name || label}</span>
          <Icon 
            name="ChevronDown" 
            size={16} 
            className={`ml-2 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`} 
          />
        </Button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-xl shadow-lg z-50 py-2"
            >
              {options?.map((option) => (
                <button
                  key={option?.id}
                  onClick={() => {
                    onChange(option?.id);
                    setActiveDropdown(null);
                  }}
                  className={`w-full text-left px-4 py-2.5 transition-colors duration-150 ${
                    selected === option?.id
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted text-foreground'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{option?.name}</span>
                    {selected === option?.id && (
                      <Icon name="Check" size={16} className="text-current" />
                    )}
                  </div>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Collection Filters */}
      <div>
        <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">
          Collections
        </h3>
        <div className="flex flex-wrap gap-2">
          {collections?.map((collection) => (
            <CollectionButton
              key={collection?.id}
              collection={collection}
              isSelected={selectedCollection === collection?.id}
              onClick={onCollectionChange}
            />
          ))}
        </div>
      </div>
      {/* Advanced Filters */}
      <div>
        <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">
          Advanced Filters
        </h3>
        <div className="flex flex-wrap gap-3">
          <FilterDropdown
            label="Medium"
            options={mediums}
            selected={selectedMedium}
            onChange={onMediumChange}
            icon="Layers"
          />
          <FilterDropdown
            label="Color Palette"
            options={colorPalettes}
            selected={selectedColor}
            onChange={onColorChange}
            icon="Palette"
          />
        </div>
      </div>
      {/* Active Filters Summary */}
      {(selectedCollection !== 'all' || selectedMedium !== 'all' || selectedColor !== 'all') && (
        <div className="flex items-center gap-2 pt-2 border-t border-border">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          <div className="flex flex-wrap gap-1">
            {selectedCollection !== 'all' && (
              <span className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary rounded-md text-xs">
                {collections?.find(c => c?.id === selectedCollection)?.name}
                <button
                  onClick={() => onCollectionChange('all')}
                  className="ml-1 hover:bg-primary/20 rounded p-0.5"
                >
                  <Icon name="X" size={10} />
                </button>
              </span>
            )}
            {selectedMedium !== 'all' && (
              <span className="inline-flex items-center px-2 py-1 bg-accent/10 text-accent rounded-md text-xs">
                {mediums?.find(m => m?.id === selectedMedium)?.name}
                <button
                  onClick={() => onMediumChange('all')}
                  className="ml-1 hover:bg-accent/20 rounded p-0.5"
                >
                  <Icon name="X" size={10} />
                </button>
              </span>
            )}
            {selectedColor !== 'all' && (
              <span className="inline-flex items-center px-2 py-1 bg-secondary/10 text-secondary-foreground rounded-md text-xs">
                {colorPalettes?.find(c => c?.id === selectedColor)?.name}
                <button
                  onClick={() => onColorChange('all')}
                  className="ml-1 hover:bg-secondary/20 rounded p-0.5"
                >
                  <Icon name="X" size={10} />
                </button>
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              onCollectionChange('all');
              onMediumChange('all');
              onColorChange('all');
            }}
            className="text-xs ml-auto"
          >
            Clear All
          </Button>
        </div>
      )}
    </div>
  );
};

export default CollectionFilters;