import React from 'react';
// import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ArticleCard = ({ article }) => {
  const getCategoryColor = (category) => {
    const colors = {
      'creative-process': 'text-secondary bg-secondary/10 border-secondary/20',
      'design-trends': 'text-accent bg-accent/10 border-accent/20',
      'technical-tutorials': 'text-primary bg-primary/10 border-primary/20',
      'strategic-insights': 'text-orange-600 bg-orange-50 border-orange-200'
    };
    return colors?.[category] || 'text-muted-foreground bg-muted border-border';
  };

  return (
    <article className="card-brand group cursor-pointer overflow-hidden">
      {/* <Link to={`/insights/${article?.slug}`} className="block"> */}
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={article?.image}
            alt={article?.title}
            className="w-full h-full object-cover transition-brand group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-brand"></div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getCategoryColor(article?.category)}`}>
              <Icon name={article?.categoryIcon} size={12} className="mr-1" />
              {article?.categoryName}
            </span>
          </div>
          
          {/* Reading Time */}
          <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1">
            <span className="text-xs font-medium text-foreground">{article?.readTime}m</span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-brand">
            {article?.title}
          </h3>
          
          <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
            {article?.excerpt}
          </p>
        </div>
    </article>
  );
};

export default ArticleCard;