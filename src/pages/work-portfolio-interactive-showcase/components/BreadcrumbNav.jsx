import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const BreadcrumbNav = ({ currentProject }) => {
  const breadcrumbs = [
    { label: 'Home', path: '/homepage-creative-portfolio-hub', icon: 'Home' },
    { label: 'Work', path: '/work-portfolio-interactive-showcase', icon: 'Briefcase' }
  ];

  if (currentProject) {
    breadcrumbs?.push({
      label: currentProject?.title,
      path: null,
      icon: 'FileText'
    });
  }

  return (
    <nav className="bg-card border-b border-border py-4">
      <div className="container-brand">
        <div className="flex items-center space-x-2 text-sm">
          {breadcrumbs?.map((crumb, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
              )}
              
              {crumb?.path ? (
                <Link
                  to={crumb?.path}
                  className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-brand"
                >
                  <Icon name={crumb?.icon} size={14} />
                  <span>{crumb?.label}</span>
                </Link>
              ) : (
                <div className="flex items-center space-x-1 text-foreground font-medium">
                  <Icon name={crumb?.icon} size={14} />
                  <span className="truncate max-w-xs">{crumb?.label}</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BreadcrumbNav;