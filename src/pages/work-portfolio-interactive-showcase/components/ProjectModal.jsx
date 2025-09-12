import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose, relatedProjects, onRelatedProjectClick }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setActiveTab('overview');
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'process', label: 'Process', icon: 'Workflow' },
    { id: 'results', label: 'Results', icon: 'TrendingUp' },
    { id: 'testimonial', label: 'Testimonial', icon: 'MessageSquare' }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project?.gallery?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project?.gallery?.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-scale-in">
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-background rounded-2xl shadow-brand-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-card">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center">
              <Icon name="Briefcase" size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">{project?.title}</h2>
              <p className="text-sm text-muted-foreground">{project?.client} • {project?.timeline}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {project?.liveUrl && (
              <Button
                variant="outline"
                iconName="ExternalLink"
                iconPosition="left"
                onClick={() => window.open(project?.liveUrl, '_blank')}
              >
                View Live
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              iconName="X"
              onClick={onClose}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex h-[calc(90vh-80px)]">
          {/* Main Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Image Gallery */}
            <div className="relative aspect-[16/10] bg-muted">
              <Image
                src={project?.gallery?.[currentImageIndex]}
                alt={`${project?.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {project?.gallery?.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-brand"
                  >
                    <Icon name="ChevronLeft" size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-brand"
                  >
                    <Icon name="ChevronRight" size={20} />
                  </button>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {project?.gallery?.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-brand ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-border bg-card">
              <div className="flex space-x-8 px-6">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex items-center space-x-2 py-4 text-sm font-medium border-b-2 transition-brand ${
                      activeTab === tab?.id
                        ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon name={tab?.icon} size={16} />
                    <span>{tab?.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Project Overview</h3>
                    <p className="text-muted-foreground leading-relaxed">{project?.fullDescription}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Challenge</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project?.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Solution</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project?.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project?.technologies?.map((tech, index) => (
                        <span 
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'process' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground">Design Process</h3>
                  <div className="space-y-4">
                    {project?.processSteps?.map((step, index) => (
                      <div key={index} className="flex space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{step?.title}</h4>
                          <p className="text-sm text-muted-foreground">{step?.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'results' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground">Project Results</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {project?.metrics?.map((metric, index) => (
                      <div key={index} className="text-center p-4 bg-muted rounded-lg">
                        <div className="text-2xl font-bold text-primary mb-1">{metric?.value}</div>
                        <div className="text-sm text-muted-foreground">{metric?.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {project?.keyResults?.map((result, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Icon name="CheckCircle" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'testimonial' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground">Client Testimonial</h3>
                  <div className="bg-muted rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      <Image
                        src={project?.testimonial?.avatar}
                        alt={project?.testimonial?.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <blockquote className="text-foreground italic mb-4">
                          "{project?.testimonial?.quote}"
                        </blockquote>
                        <div>
                          <div className="font-semibold text-foreground">{project?.testimonial?.name}</div>
                          <div className="text-sm text-muted-foreground">{project?.testimonial?.position}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-80 border-l border-border bg-card overflow-y-auto">
            <div className="p-6 space-y-6">
              {/* Project Details */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Project Details</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <span className="text-foreground font-medium">{project?.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Industry:</span>
                    <span className="text-foreground font-medium">{project?.industry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="text-foreground font-medium">{project?.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Team Size:</span>
                    <span className="text-foreground font-medium">{project?.teamSize}</span>
                  </div>
                </div>
              </div>

              {/* Related Projects */}
              {relatedProjects && relatedProjects?.length > 0 && (
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Related Projects</h4>
                  <div className="space-y-3">
                    {relatedProjects?.slice(0, 3)?.map((relatedProject) => (
                      <div
                        key={relatedProject?.id}
                        onClick={() => onRelatedProjectClick(relatedProject)}
                        className="flex space-x-3 p-3 rounded-lg hover:bg-muted cursor-pointer transition-brand"
                      >
                        <Image
                          src={relatedProject?.image}
                          alt={relatedProject?.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h5 className="text-sm font-medium text-foreground truncate">
                            {relatedProject?.title}
                          </h5>
                          <p className="text-xs text-muted-foreground truncate">
                            {relatedProject?.client}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Download Resources */}
              {project?.downloads && project?.downloads?.length > 0 && (
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Downloads</h4>
                  <div className="space-y-2">
                    {project?.downloads?.map((download, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        iconName="Download"
                        iconPosition="left"
                        fullWidth
                        className="justify-start"
                      >
                        {download?.name}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;