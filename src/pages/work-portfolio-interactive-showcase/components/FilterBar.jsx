import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FilterBar = ({ 
  categories, 
  industries, 
  activeCategory, 
  activeIndustry, 
  onCategoryChange, 
  onIndustryChange,
  projectCount,
  viewMode,
  onViewModeChange,
  sortBy,
  onSortChange
}) => {
  const sortOptions = [
    { value: 'recent', label: 'Most Recent', icon: 'Clock' },
    { value: 'featured', label: 'Featured', icon: 'Star' },
    { value: 'alphabetical', label: 'A-Z', icon: 'ArrowUpDown' }
  ];

  return (
    <div className="bg-card rounded-xl p-6 shadow-brand mb-8">
      {/* Filter Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Icon name="Filter" size={20} className="text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Filter Projects</h3>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
            {projectCount} projects
          </span>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'ghost'}
            size="sm"
            iconName="Grid3X3"
            onClick={() => onViewModeChange('grid')}
            className="px-3"
          />
          <Button
            variant={viewMode === 'list' ? 'default' : 'ghost'}
            size="sm"
            iconName="List"
            onClick={() => onViewModeChange('list')}
            className="px-3"
          />
        </div>
      </div>
      {/* Filter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Category Filter */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">Category</label>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={activeCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onCategoryChange('all')}
              className="text-xs"
            >
              All Categories
            </Button>
            {categories?.map((category) => (
              <Button
                key={category?.value}
                variant={activeCategory === category?.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => onCategoryChange(category?.value)}
                className="text-xs"
              >
                {category?.label}
                <span className="ml-1 text-xs opacity-70">({category?.count})</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Industry Filter */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">Industry</label>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={activeIndustry === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onIndustryChange('all')}
              className="text-xs"
            >
              All Industries
            </Button>
            {industries?.map((industry) => (
              <Button
                key={industry?.value}
                variant={activeIndustry === industry?.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => onIndustryChange(industry?.value)}
                className="text-xs"
              >
                {industry?.label}
                <span className="ml-1 text-xs opacity-70">({industry?.count})</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Sort Options */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">Sort By</label>
          <div className="flex flex-wrap gap-2">
            {sortOptions?.map((option) => (
              <Button
                key={option?.value}
                variant={sortBy === option?.value ? 'default' : 'outline'}
                size="sm"
                iconName={option?.icon}
                iconPosition="left"
                onClick={() => onSortChange(option?.value)}
                className="text-xs"
              >
                {option?.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
      {/* Active Filters */}
      {(activeCategory !== 'all' || activeIndustry !== 'all') && (
        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-foreground">Active Filters:</span>
              <div className="flex items-center space-x-2">
                {activeCategory !== 'all' && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                    {categories?.find(c => c?.value === activeCategory)?.label}
                    <button
                      onClick={() => onCategoryChange('all')}
                      className="ml-2 hover:bg-white/20 rounded-full p-0.5 transition-brand"
                    >
                      <Icon name="X" size={12} />
                    </button>
                  </span>
                )}
                {activeIndustry !== 'all' && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                    {industries?.find(i => i?.value === activeIndustry)?.label}
                    <button
                      onClick={() => onIndustryChange('all')}
                      className="ml-2 hover:bg-white/20 rounded-full p-0.5 transition-brand"
                    >
                      <Icon name="X" size={12} />
                    </button>
                  </span>
                )}
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              iconName="RotateCcw"
              iconPosition="left"
              onClick={() => {
                onCategoryChange('all');
                onIndustryChange('all');
              }}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Clear All
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;