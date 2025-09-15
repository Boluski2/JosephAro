import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import FeaturedArticle from './components/FeaturedArticle';
import CategoryFilter from './components/CategoryFilter';
import ArticleCard from './components/ArticleCard';
import ResourceLibrary from './components/ResourceLibrary';
import NewsletterSignup from './components/NewsletterSignup';
import SearchBar from './components/SearchBar';
import TrendingTopics from './components/TrendingTopics';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const InsightsCenterThoughtLeadershipHub = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);

  // Mock data for featured article
  const featuredArticle = {
    id: 1,
    title: "12 Years of Geospatial Solutions: From Academia to Industry Impact",
    excerpt: `Reflecting on over a decade of experience deploying GIS solutions across multiple sectors including engineering, urban planning, agriculture, and environmental protection.`,
    image: '/image/jor.png',
    slug: "geospatial-solutions-decade-review"
  };

  // Mock data for categories
  const categories = [
    { id: 'all', name: 'All Articles', icon: 'Grid3x3', count: 47 },
    { id: 'geospatial', name: 'Geospatial', icon: 'Map', count: 18 },
    { id: 'urban-planning', name: 'Urban Planning', icon: 'Building', count: 9 },
    { id: 'environmental', name: 'Environmental', icon: 'TreePine', count: 12 },
    { id: 'risk-assessment', name: 'Risk Assessment', icon: 'AlertTriangle', count: 8 }
  ];

  // Updated articles with geospatial content
  const articles = [
    {
      id: 2,
      title: "Hydrologic Modelling - Several",
      excerpt: "Watershed Modelling & Management | Sediment Transport | ​Water Quality Assessment | River Basin Hydrology | Environmental ​Toxicology | Dam Assessments",
      image: "/image/LIDAR.png",
      category: 'geospatial',
      categoryName: 'Geospatial',
      categoryIcon: 'Map',
      slug: "hydrogeological-modeling-techniques"
    },
    {
      id: 3,
      title: "Ge​ostatistical Analysis + Modelling",
      excerpt: "A mind-bending psychological thriller that follows a detective on a race against time to solve a series of cryptic and interconnected mysteries.",
      image:  "/image/people.png",
      category: 'geospatial',
      categoryName: 'Geospatial',
      categoryIcon: 'Map',
      publishDate: "Jan 10, 2025",
      slug: "geostatistical-analysis-environmental"
    },
    {
      id: 4,
      title: "Spatial Decision Support System - MCA| AHP",
      excerpt: "Aerial LiDAR & Photogrammetric Survey towards ​urban Planning and Flood Risk Assessment of ​Iperu-Remo",
      image: "/image/map.png",
      category: 'geospatial',
      categoryName: 'Geospatial',
      categoryIcon: 'Map',
      slug: "decision-support-systems-mcv-app"
    },
    {
      id: 5,
      title: "Ur​ban Planning",
      excerpt: "City Planning | Urban Data Analytics | Masterplan Development | ​Transport Impact Assessments | ESIA | Consultancy",
      image: "/image/auto.png",
      category: 'urban-planning',
      categoryName: 'Urban Planning',
      categoryIcon: 'Building',
      slug: "lidar-photogrammetry-urban-planning"
    },
    {
      id: 6,
      title: "La​nd Use Modelling",
      excerpt: "A mind-bending psychological thriller that follows a detective on a ​race against time to solve a series of cryptic and interconnected ​mysteries.",
      image: "/image/LULC.png",
      category: 'urban-planning',
      categoryName: 'Urban Planning',
      categoryIcon: 'Building',
      slug: "land-use-modeling-sustainable-development"
    },
    {
      id: 7,
      title: "Fo​restry",
      excerpt: "Aerial LiDAR & Photogrammetric Survey towards urban Planning ​and Flood Risk Assessment of Iperu-Remo",
      image: "/image/forest.png",
      category: 'urban-planning',
      categoryName: 'Urban Planning',
      categoryIcon: 'Building',
      slug: "urban-risk-analysis-transportation"
    },
    {
      id: 8,
      title: "Gr​oundwater Quality Assessment",
      excerpt: "A gripping coastal thriller that masterfully combines the serene charm of a coastal setting with an enthralling mystery.",
      image: "/image/jor9.png",
      category: 'environmental',
      categoryName: 'Environmental',
      categoryIcon: 'TreePine',
      slug: "groundwater-quality-assessment-methods"
    },
    {
      id: 9,
      title: "Transport Modelling - Network Analysis",
      excerpt: "A mind-bending psychological thriller that follows a detective on a race against time to solve a series of cryptic and interconnected mysteries.",
      image: "/image/people.png",
      category: 'urban-planning',
      categoryName: 'Urban Planning',
      categoryIcon: 'Building',
      slug: "transport-modeling-network-analysis"
    },
    {
      id: 10,
      title: "Te​lecommunications",
      excerpt: "Aerial LiDAR & Photogrammetric Survey towards urban Planning ​and Flood Risk Assessment of Iperu-Remo",
      image: "/image/people1.png",
      category: 'risk-assessment',
      categoryName: 'Risk Assessment',
      categoryIcon: 'AlertTriangle',
      slug: "disaster-risk-management-resilience"
    },
     {
      id: 11,
      title: "Fl​ood Assessment",
      excerpt: "A gripping coastal thriller that masterfully combines the serene ​charm of a coastal setting with an enthralling mystery.",
      image: "/image/jor9.png",
      category: 'environmental',
      categoryName: 'Environmental',
      categoryIcon: 'TreePine',
      slug: "groundwater-quality-assessment-methods"
    },
    {
      id: 12,
      title: "Di​saster & Risk Management",
      excerpt: "A mind-bending psychological thriller that follows a detective on a ​race against time to solve a series of cryptic and interconnected ​mysteries.",
      image: "/image/people.png",
      category: 'environmental',
      categoryName: 'Environmental',
      categoryIcon: 'TreePine',
      slug: "food-security-assessment-geo-spatial"
    },
    {
      id: 13,
      title: "Te​lecommunications",
      excerpt: "Aerial LiDAR & Photogrammetric Survey towards urban Planning ​and Flood Risk Assessment of Iperu-Remo",
      image: "/image/people1.png",
      category: 'environmental',
      categoryName: 'Environmental',
      categoryIcon: 'TreePine',
      slug: "food-security-assessment-geo-spatial"
    }
  ];

  // Mock data for resources
  const resources = [
   {
      id: 1,
      title: 'Data Consultant',
      year: '2024',
      description: 'ENGULF; University of Italy',
      image: '/image/LIDAR.png'
    },
    {
      id: 2,
      title: 'Hydrographic Consultant',
      year: '2023',
      description: 'A mind-bending psychological thriller that follows a detective on a race against time to solve a series of cryptic and interconnected mysteries.',
      image: '/image/jor.png'
    },
    {
      id: 3,
      title: 'Technical Lead, Remapping Land Tenure Security II',
      year: '2022',
      description: 'Aerial LiDAR & Photogrammetric Survey towards ​urban Planning and Flood Risk Assessment of ​Iperu-Remo.',
      image: '/image/jor1.png'
    },
    {
      id: 4,
      title: 'Needs Assessment of Low-Cost ​Housing',
      year: '2021',
      description: 'ENGULF; University of Italy',
      image: '/image/jor2.png'
    },
    {
      id: 5,
      title: 'Technical Lead, Remapping Land Tenure ​Security I',
      year: '2020',
      description: 'AFD; Adam Smith International; Infrastructure Delivery International.',
      image: '/image/jor1.png'
    },
    {
      id: 6,
      title: 'Technical Lead, Remapping Land Tenure Security II',
      year: '2022',
      description: 'Global Land Alliance (GLA); PRINDEX',
      image: '/image/jor2.png'
    },
    {
      id: 7,
      title: 'Needs Assessment of Low-Cost ​Housing',
      year: '2021',
      description: 'ENGULF; University of Italy',
      image: '/image/jor2.png'
    },
    {
      id: 8,
      title: 'Technical Lead, Remapping Land Tenure ​Security I',
      year: '2020',
      description: 'AFD; Adam Smith International; Infrastructure Delivery International.',
      image: '/image/jor2.png'
    },
    {
      id: 9,
      title: 'Technical Lead, Remapping Land Tenure Security II',
      year: '2022',
      description: 'Global Land Alliance (GLA); PRINDEX',
      image: '/image/jor2.png'
    }
  ];

 
  
  
  // Filter articles based on category and search term
  useEffect(() => {
    let filtered = articles;

    if (activeCategory !== 'all') {
      filtered = filtered?.filter(article => article?.category === activeCategory);
    }

    if (searchTerm) {
      filtered = filtered?.filter(article =>
        article?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        article?.excerpt?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        article?.categoryName?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      );
    }

    setFilteredArticles(filtered);
  }, [activeCategory, searchTerm]);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Insights Center - Geo-spatial Expertise & Thought Leadership | Joseph Aro</title>
        <meta name="description" content="Explore geo-spatial insights, urban planning strategies, environmental assessments, and risk management approaches from Joseph Aro. Join the community and stay informed about industry developments." />
        <meta name="keywords" content="geo-spatial insights, urban planning, environmental assessment, risk management, geo-statistical analysis, thought leadership, GIS community" />
      </Helmet>
      <Header />
      <main className="pt-20">
        {/* Hero Section with Featured Article */}
        <section className="section-padding bg-gradient-to-br from-background to-muted/30">
          <div className="container-brand">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Geo-spatial Expertise & 
                <span className="text-gradient block">Thought Leadership</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore the intersection of geo-spatial technology, urban planning, and environmental science through in-depth articles, case studies, and resources that advance your professional practice.
              </p>
            </div>

            <FeaturedArticle article={featuredArticle} />
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-background border-b border-border">
          <div className="container-brand">
            <div className="max-w-2xl mx-auto mb-8">
              <SearchBar onSearch={handleSearch} />
            </div>
            
            <CategoryFilter 
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>
        </section>

        {/* Articles Grid */}
        <section className="section-padding bg-background">
          <div className="container-brand">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                {activeCategory === 'all' ? 'Latest Articles' : categories?.find(cat => cat?.id === activeCategory)?.name}
              </h2>
              <p className="text-muted-foreground">
                {filteredArticles?.length} article{filteredArticles?.length !== 1 ? 's' : ''} found
              </p>
            </div>

            {filteredArticles?.length > 0 ? (
              <div className="grid text-sm md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles?.map((article) => (
                  <ArticleCard key={article?.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Search" size={24} className="text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">No articles found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search terms or browse different categories.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Trending Topics */}
        <TrendingTopics  />

        {/* Resource Library */}
        <ResourceLibrary resources={resources} />

        {/* Newsletter Signup */}
        <NewsletterSignup />

        {/* Footer CTA */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5 border-t border-border">
          <div className="container-brand text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Advance Your Geo-spatial Projects?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next project and leverage geo-spatial expertise to solve complex challenges in urban planning, environmental management, and risk assessment.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default"
                iconName="ArrowRight" 
                iconPosition="right"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                Start a Project
              </Button>
              <Button 
                variant="outline"
                iconName="Calendar" 
                iconPosition="left"
              >
                Schedule Consultation
              </Button>
            </div> */}
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white section-padding">
        <div className="container-brand">
          <div className="text-center">
            <p className="text-sm opacity-80">
              © {new Date()?.getFullYear()} Joseph Aro. All rights reserved. Crafted with passion and precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InsightsCenterThoughtLeadershipHub;