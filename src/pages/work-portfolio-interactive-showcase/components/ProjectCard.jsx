import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';


const ProjectCard = ({ project, onProjectClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-card rounded-xl overflow-hidden shadow-brand hover:shadow-brand-lg transition-brand cursor-pointer animate-scale-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onProjectClick(project)}
    >
      {/* Project Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover transition-brand group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent transition-brand ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-white">
                {project?.category}
              </span>
              <Icon name="ExternalLink" size={20} className="text-white/80" />
            </div>
            
            <h3 className="text-lg font-bold mb-2 line-clamp-2">{project?.title}</h3>
            <p className="text-sm text-white/90 mb-3 line-clamp-2">{project?.description}</p>
            
            {/* Key Results */}
            <div className="flex items-center space-x-4 text-xs">
              {project?.keyResults?.slice(0, 2)?.map((result, index) => (
                <div key={index} className="flex items-center space-x-1">
                  <Icon name="TrendingUp" size={14} className="text-accent" />
                  <span className="text-white/90">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Type Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-white/90 text-primary">
            {project?.type}
          </span>
        </div>

        {/* Featured Badge */}
        {project?.featured && (
          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
              <Icon name="Star" size={16} className="text-white fill-current" />
            </div>
          </div>
        )}
      </div>
      {/* Card Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-brand line-clamp-1">
            {project?.title}
          </h3>
          <Icon name="ArrowUpRight" size={16} className="text-muted-foreground group-hover:text-primary transition-brand" />
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project?.description}
        </p>

        {/* Client & Timeline */}
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <span className="font-medium">{project?.client}</span>
          <span>{project?.timeline}</span>
        </div>

        {/* Technologies/Skills */}
        <div className="flex flex-wrap gap-2">
          {project?.technologies?.slice(0, 3)?.map((tech, index) => (
            <span 
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project?.technologies?.length > 3 && (
            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-accent/10 text-accent">
              +{project?.technologies?.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;