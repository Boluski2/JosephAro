import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories?.map((category) => (
        <button
          key={category?.id}
          onClick={() => onCategoryChange(category?.id)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-brand ${
            activeCategory === category?.id
              ? 'bg-primary text-primary-foreground shadow-brand'
              : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
          }`}
        >
          <Icon name={category?.icon} size={16} />
          <span className="font-medium">{category?.name}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            activeCategory === category?.id
              ? 'bg-primary-foreground/20 text-primary-foreground'
              : 'bg-background text-muted-foreground'
          }`}>
            {category?.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;