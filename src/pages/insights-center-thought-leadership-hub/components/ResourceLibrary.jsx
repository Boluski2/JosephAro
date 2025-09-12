import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ResourceLibrary = ({ resources }) => {
  // Since the mock data doesn't include type, we'll infer it from title or use default
  const getResourceTypeFromTitle = (title) => {
    if (title?.toLowerCase().includes('training')) return 'guide';
    if (title?.toLowerCase().includes('mapping')) return 'framework';
    return 'template'; // default type
  };

  const getResourceTypeName = (type) => {
    const names = {
      template: 'Template',
      guide: 'Guide',
      framework: 'Framework',
      toolkit: 'Toolkit',
      checklist: 'Checklist'
    };
    return names?.[type] || 'Resource';
  };

  const getResourceTypeIcon = (type) => {
    const icons = {
      template: 'FileText',
      guide: 'BookOpen',
      framework: 'Grid3x3',
      toolkit: 'Package',
      checklist: 'CheckSquare'
    };
    return icons?.[type] || 'File';
  };

  const getResourceTypeColor = (type) => {
    const colors = {
      template: 'text-secondary bg-secondary/10',
      guide: 'text-primary bg-primary/10',
      framework: 'text-accent bg-accent/10',
      toolkit: 'text-purple-600 bg-purple-50',
      checklist: 'text-green-600 bg-green-50'
    };
    return colors?.[type] || 'text-muted-foreground bg-muted';
  };

  // Generate mock features based on resource description
  const getResourceFeatures = (resource) => {
    const features = [];
    if (resource?.title?.toLowerCase().includes('mapping')) {
      features.push('Geospatial Data', 'High Resolution', 'GIS Ready');
    }
    if (resource?.title?.toLowerCase().includes('training')) {
      features.push('Step-by-Step', 'Best Practices', 'Expert Tips');
    }
    if (resource?.description?.toLowerCase().includes('uav') || resource?.description?.toLowerCase().includes('rov')) {
      features.push('Drone Technology', 'Safety Protocols', 'Operational Guide');
    }
    
    // Ensure we have at least some features
    if (features.length === 0) {
      features.push('Professional Grade', 'Ready to Use', 'Comprehensive');
    }
    
    return features.slice(0, 3);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50/80 to-indigo-50/60">
      <div className="container-brand">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Project Resource Library
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access case studies, project templates, and technical resources from our extensive portfolio of geo-spatial projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {resources?.map((resource) => {
            const resourceType = getResourceTypeFromTitle(resource?.title);
            const resourceTypeName = getResourceTypeName(resourceType);
            const features = getResourceFeatures(resource);
            
            return (
              <div key={resource?.id} className="card-brand group hover:shadow-brand-lg transition-brand bg-white/80 backdrop-blur-sm">
                {/* Preview Image */}
                <div className="relative h-40 overflow-hidden rounded-t-lg ">
                  <Image
                    src={resource?.image}
                    alt={resource?.title}
                    className="w-full h-full object-cover transition-brand group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Resource Type Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getResourceTypeColor(resourceType)}`}>
                      <Icon name={getResourceTypeIcon(resourceType)} size={12} className="mr-1" />
                      {resourceTypeName}
                    </span>
                  </div>
                  
                  {/* Year Badge - Made bold with better contrast */}
                  <div className="absolute top-3 right-3 bg-background/95 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-bold bg-blue-600 text-white px-2 py-1 rounded-full">
                      {resource?.year}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-brand">
                    {resource?.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {resource?.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {features?.map((feature, index) => (
                        <span key={index} className="text-xs bg-white border border-border rounded-full px-2 py-1 text-muted-foreground">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Simplified action area */}
                  {/* <div className="flex items-center justify-center">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="BarChart3" size={14} className="text-blue-600" />
                      <span className="font-medium">Project Case Study</span>
                    </div>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResourceLibrary;