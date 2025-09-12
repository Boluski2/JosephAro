import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import InsightsCenterThoughtLeadershipHub from './pages/insights-center-thought-leadership-hub';
import AboutExperiencePage from './pages/about-experience-personal-brand-story';
// import ServicesHubCapabilityShowcase from './pages/services-hub-capability-showcase';
import WorkPortfolioShowcase from './pages/work-portfolio-interactive-showcase';
import HomepageCreativePortfolioHub from './pages/homepage-creative-portfolio-hub';
import ContactGatewayConnectionHub from './pages/contact-gateway-connection-hub';
import GalleryVisualShowcaseCollection from './pages/gallery-visual-showcase-collection';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<HomepageCreativePortfolioHub />} />
        <Route path="/insights-center-thought-leadership-hub" element={<InsightsCenterThoughtLeadershipHub />} />
        <Route path="/about-experience-personal-brand-story" element={<AboutExperiencePage />} />
        {/* <Route path="/services-hub-capability-showcase" element={<ServicesHubCapabilityShowcase />} /> */}
        <Route path="/work-portfolio-interactive-showcase" element={<WorkPortfolioShowcase />} />
        <Route path="/homepage-creative-portfolio-hub" element={<HomepageCreativePortfolioHub />} />
        <Route path="/contact-gateway-connection-hub" element={<ContactGatewayConnectionHub />} />
        <Route path="/gallery-visual-showcase-collection" element={<GalleryVisualShowcaseCollection />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;