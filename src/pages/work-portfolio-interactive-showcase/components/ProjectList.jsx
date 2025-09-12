import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectList = ({ projects, onProjectClick }) => {
  return (
    <div className="space-y-6">
      {projects?.map((project, index) => (
        <div
          key={project?.id}
          className="bg-card rounded-xl shadow-brand hover:shadow-brand-lg transition-brand cursor-pointer animate-slide-up"
          style={{ animationDelay: `${index * 100}ms` }}
          onClick={() => onProjectClick(project)}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Project Image */}
            <div className="lg:w-1/3 relative">
              <div className="aspect-[4/3] lg:aspect-square overflow-hidden rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none">
                <Image
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-full object-cover transition-brand hover:scale-105"
                />
                
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
            </div>

            {/* Project Content */}
            <div className="lg:w-2/3 p-6 lg:p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {project?.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{project?.timeline}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 hover:text-primary transition-brand">
                    {project?.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project?.description}
                  </p>
                </div>
                
                <Icon name="ArrowUpRight" size={20} className="text-muted-foreground hover:text-primary transition-brand ml-4" />
              </div>

              {/* Client & Industry */}
              <div className="flex items-center space-x-6 mb-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Building" size={16} className="text-muted-foreground" />
                  <span className="text-foreground font-medium">{project?.client}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Tag" size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">{project?.industry}</span>
                </div>
              </div>

              {/* Key Results */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Key Results</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {project?.keyResults?.slice(0, 3)?.map((result, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="TrendingUp" size={14} className="text-accent flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project?.technologies?.slice(0, 4)?.map((tech, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project?.technologies?.length > 4 && (
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-accent/10 text-accent">
                      +{project?.technologies?.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                <Button
                  variant="default"
                  size="sm"
                  iconName="Eye"
                  iconPosition="left"
                  onClick={(e) => {
                    e?.stopPropagation();
                    onProjectClick(project);
                  }}
                >
                  View Case Study
                </Button>
                
                {project?.liveUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="left"
                    onClick={(e) => {
                      e?.stopPropagation();
                      window.open(project?.liveUrl, '_blank');
                    }}
                  >
                    Live Site
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;