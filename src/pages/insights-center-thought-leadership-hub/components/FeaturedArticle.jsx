import React from 'react';
import Image from '../../../components/AppImage';

const FeaturedArticle = ({ article }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Content Section */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center space-x-3 mb-6">
            <span className="badge-primary text-xs font-semibold px-3 py-1 rounded-full">
              Featured Article
            </span>
            <span className="text-sm text-muted-foreground">
              {article?.readTime} min read
            </span>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
            {article?.title}
          </h1>
          
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {article?.excerpt}
          </p>
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-semibold text-sm">JA</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">Joseph Aro</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="relative h-64 lg:h-full">
          <div className="absolute inset-0 "></div>
          <Image
            src={article?.image}
            alt={article?.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;