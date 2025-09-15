// import React, { useState, useEffect, useRef } from 'react';
// import { Helmet } from 'react-helmet';
// import Header from '../../components/ui/Header';
// import HeroSection from './components/HeroSection';
// import FilterBar from './components/FilterBar';
// import ProjectCard from './components/ProjectCard';
// import ProjectList from './components/ProjectList';
// import ProjectModal from './components/ProjectModal';
// import BreadcrumbNav from './components/BreadcrumbNav';
// import Icon from '../../components/AppIcon';
// import Button from '../../components/ui/Button';

// const WorkPortfolioShowcase = () => {
//   const [projects, setProjects] = useState([]);
//   const [filteredProjects, setFilteredProjects] = useState([]);
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [activeIndustry, setActiveIndustry] = useState('all');
//   const [viewMode, setViewMode] = useState('grid');
//   const [sortBy, setSortBy] = useState('recent');
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const projectsRef = useRef(null);

//   // Mock data for projects
//   const mockProjects = [
//     {
//       id: 1,
//       title: "EcoVibe Brand Identity & Digital Platform",
//       client: "EcoVibe Sustainability",
//       category: "Brand Identity",
//       industry: "Environmental",
//       type: "Brand Design",
//       timeline: "3 months",
//       duration: "12 weeks",
//       teamSize: "4 members",
//       featured: true,
//       image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
//       description: "Complete brand identity and digital platform for a sustainable lifestyle company focused on eco-friendly products and environmental awareness.",
//       fullDescription: `EcoVibe approached us to create a comprehensive brand identity that would position them as leaders in the sustainable lifestyle space. The challenge was to create a brand that felt both premium and accessible, appealing to environmentally conscious consumers across different demographics.\n\nOur approach centered on creating a visual identity that embodied growth, sustainability, and modern living. We developed a comprehensive brand system including logo design, color palette, typography, and brand guidelines that could scale across digital and physical touchpoints.`,
//       challenge: "Create a brand identity that appeals to diverse eco-conscious consumers while maintaining premium positioning and scalability across multiple touchpoints.",
//       solution: "Developed a flexible brand system with organic shapes, earth-inspired colors, and modern typography that communicates sustainability without sacrificing sophistication.",
//       keyResults: [
//         "40% increase in brand recognition",
//         "60% boost in website engagement",
//         "25% growth in social media following",
//         "35% improvement in conversion rates"
//       ],
//       technologies: ["Adobe Creative Suite", "Figma", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
//       gallery: [
//         "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=800&fit=crop",
//         "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop",
//         "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop"
//       ],
//       liveUrl: "https://ecovibe-demo.com",
//       processSteps: [
//         {
//           title: "Discovery & Research",
//           description: "Conducted market analysis and user interviews to understand the target audience and competitive landscape."
//         },
//         {
//           title: "Brand Strategy",
//           description: "Developed brand positioning, messaging framework, and visual direction based on research insights."
//         },
//         {
//           title: "Visual Identity",
//           description: "Created logo concepts, color palettes, and typography systems that reflect the brand values."
//         },
//         {
//           title: "Digital Implementation",
//           description: "Applied the brand identity across digital platforms including website and social media."
//         }
//       ],
//       metrics: [
//         { label: "Brand Recognition", value: "+40%" },
//         { label: "Website Engagement", value: "+60%" },
//         { label: "Conversion Rate", value: "+35%" }
//       ],
//       testimonial: {
//         quote: "Joseph transformed our vision into a brand identity that perfectly captures our mission. The attention to detail and strategic thinking exceeded our expectations.",
//         name: "Sarah Chen",
//         position: "Founder, EcoVibe Sustainability",
//         avatar: "https://randomuser.me/api/portraits/women/32.jpg"
//       },
//       downloads: [
//         { name: "Brand Guidelines PDF", url: "#" },
//         { name: "Logo Package", url: "#" }
//       ]
//     },
//     {
//       id: 2,
//       title: "TechFlow SaaS Platform Redesign",
//       client: "TechFlow Solutions",
//       category: "Web Design",
//       industry: "Technology",
//       type: "UI/UX Design",
//       timeline: "4 months",
//       duration: "16 weeks",
//       teamSize: "6 members",
//       featured: true,
//       image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
//       description: "Complete redesign of a B2B SaaS platform focusing on user experience optimization and conversion rate improvement.",
//       fullDescription: `TechFlow Solutions needed a complete overhaul of their existing SaaS platform to improve user experience and increase customer retention. The existing interface was cluttered and difficult to navigate, leading to high churn rates and low user engagement.\n\nWe conducted extensive user research and usability testing to identify pain points and opportunities for improvement. The redesign focused on simplifying complex workflows, improving information architecture, and creating a more intuitive user experience.`,
//       challenge: "Redesign a complex B2B SaaS platform to reduce user churn and improve overall user experience without disrupting existing workflows.",
//       solution: "Implemented a user-centered design approach with simplified navigation, improved information hierarchy, and streamlined workflows based on user research insights.",
//       keyResults: [
//         "50% reduction in user churn",
//         "75% improvement in task completion",
//         "45% increase in user satisfaction",
//         "30% boost in feature adoption"
//       ],
//       technologies: ["Figma", "React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
//       gallery: [
//         "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop",
//         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
//         "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=800&fit=crop"
//       ],
//       liveUrl: "https://techflow-demo.com",
//       processSteps: [
//         {
//           title: "User Research",
//           description: "Conducted interviews and usability tests with existing users to identify pain points and opportunities."
//         },
//         {
//           title: "Information Architecture",
//           description: "Restructured the platform\'s information hierarchy to improve navigation and findability."
//         },
//         {
//           title: "Wireframing & Prototyping",
//           description: "Created low and high-fidelity prototypes to test new design concepts with users."
//         },
//         {
//           title: "Visual Design & Development",
//           description: "Applied visual design system and collaborated with developers for implementation."
//         }
//       ],
//       metrics: [
//         { label: "User Churn", value: "-50%" },
//         { label: "Task Completion", value: "+75%" },
//         { label: "User Satisfaction", value: "+45%" }
//       ],
//       testimonial: {
//         quote: "The redesign completely transformed our platform. Our users are more engaged than ever, and we've seen significant improvements in all key metrics.",
//         name: "Michael Rodriguez",
//         position: "Product Manager, TechFlow Solutions",
//         avatar: "https://randomuser.me/api/portraits/men/45.jpg"
//       },
//       downloads: [
//         { name: "Design System", url: "#" },
//         { name: "User Research Report", url: "#" }
//       ]
//     },
//     {
//       id: 3,
//       title: "Artisan Marketplace Digital Strategy",
//       client: "Artisan Collective",
//       category: "Digital Strategy",
//       industry: "E-commerce",
//       type: "Strategy & Planning",
//       timeline: "2 months",
//       duration: "8 weeks",
//       teamSize: "3 members",
//       featured: false,
//       image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
//       description: "Comprehensive digital strategy for an artisan marketplace focusing on community building and seller empowerment.",
//       fullDescription: `Artisan Collective wanted to create a digital marketplace that would empower independent artisans while building a strong community around handmade products. The challenge was to differentiate from larger marketplaces like Etsy while providing value to both sellers and buyers.\n\nWe developed a comprehensive digital strategy that focused on community building, storytelling, and creating unique value propositions for artisans. The strategy included platform features, marketing approaches, and community engagement tactics.`,
//       challenge: "Develop a digital strategy that differentiates an artisan marketplace from established competitors while building a sustainable community.",
//       solution: "Created a community-first approach with storytelling features, artisan spotlights, and collaborative tools that foster connections between creators and customers.",
//       keyResults: [
//         "200+ artisans onboarded",
//         "85% seller retention rate",
//         "150% growth in community engagement",
//         "40% increase in average order value"
//       ],
//       technologies: ["Market Research", "User Journey Mapping", "Content Strategy", "Community Management", "Analytics"],
//       gallery: [
//         "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
//         "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop",
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop"
//       ],
//       liveUrl: "https://artisan-collective-demo.com",
//       processSteps: [
//         {
//           title: "Market Analysis",
//           description: "Analyzed competitive landscape and identified opportunities for differentiation."
//         },
//         {
//           title: "User Journey Mapping",
//           description: "Mapped out user journeys for both artisans and customers to identify key touchpoints."
//         },
//         {
//           title: "Strategy Development",
//           description: "Developed comprehensive digital strategy including platform features and marketing approach."
//         },
//         {
//           title: "Implementation Planning",
//           description: "Created detailed roadmap and implementation plan with clear milestones and metrics."
//         }
//       ],
//       metrics: [
//         { label: "Artisans Onboarded", value: "200+" },
//         { label: "Seller Retention", value: "85%" },
//         { label: "Community Growth", value: "+150%" }
//       ],
//       testimonial: {
//         quote: "Joseph\'s strategic approach helped us build more than just a marketplace - we created a thriving community of artisans and art lovers.",
//         name: "Emma Thompson",
//         position: "CEO, Artisan Collective",
//         avatar: "https://randomuser.me/api/portraits/women/28.jpg"
//       },
//       downloads: [
//         { name: "Digital Strategy Document", url: "#" },
//         { name: "Implementation Roadmap", url: "#" }
//       ]
//     },
//     {
//       id: 4,
//       title: "HealthTech Mobile App Interface",
//       client: "MediCare Plus",
//       category: "Web Design",
//       industry: "Healthcare",
//       type: "Mobile Design",
//       timeline: "3 months",
//       duration: "12 weeks",
//       teamSize: "5 members",
//       featured: false,
//       image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
//       description: "Mobile application design for a healthcare platform focusing on patient engagement and appointment management.",
//       fullDescription: `MediCare Plus needed a mobile application that would improve patient engagement and streamline appointment management. The challenge was to create an interface that would be accessible to users of all ages and technical abilities while maintaining HIPAA compliance.\n\nWe designed a clean, intuitive interface that prioritizes ease of use and accessibility. The design system was built with healthcare-specific considerations including high contrast ratios, large touch targets, and clear information hierarchy.`,
//       challenge: "Design a healthcare mobile app that is accessible to all age groups while maintaining security and compliance standards.",
//       solution: "Created an accessible design system with large touch targets, high contrast ratios, and simplified navigation optimized for healthcare workflows.",
//       keyResults: [
//         "90% user satisfaction score",
//         "65% reduction in missed appointments",
//         "80% increase in app engagement",
//         "45% improvement in patient communication"
//       ],
//       technologies: ["Figma", "React Native", "TypeScript", "Firebase", "HIPAA Compliance"],
//       gallery: [
//         "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop",
//         "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop",
//         "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop"
//       ],
//       liveUrl: null,
//       processSteps: [
//         {
//           title: "Healthcare Research",
//           description: "Studied healthcare workflows and accessibility requirements for medical applications."
//         },
//         {
//           title: "User Testing",
//           description: "Conducted usability tests with patients of different age groups and technical abilities."
//         },
//         {
//           title: "Accessibility Design",
//           description: "Implemented accessibility best practices and WCAG guidelines throughout the interface."
//         },
//         {
//           title: "Compliance Review",
//           description: "Ensured all designs met HIPAA compliance requirements and healthcare industry standards."
//         }
//       ],
//       metrics: [
//         { label: "User Satisfaction", value: "90%" },
//         { label: "Missed Appointments", value: "-65%" },
//         { label: "App Engagement", value: "+80%" }
//       ],
//       testimonial: {
//         quote: "The app design exceeded our expectations. Our patients love how easy it is to use, and we've seen significant improvements in engagement.",
//         name: "Dr. James Wilson",
//         position: "Medical Director, MediCare Plus",
//         avatar: "https://randomuser.me/api/portraits/men/52.jpg"
//       },
//       downloads: [
//         { name: "Design System Guide", url: "#" },
//         { name: "Accessibility Report", url: "#" }
//       ]
//     },
//     {
//       id: 5,
//       title: "FinanceFlow Brand Transformation",
//       client: "FinanceFlow Corp",
//       category: "Brand Identity",
//       industry: "Finance",
//       type: "Rebranding",
//       timeline: "4 months",
//       duration: "16 weeks",
//       teamSize: "4 members",
//       featured: true,
//       image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
//       description: "Complete brand transformation for a financial services company transitioning from traditional to digital-first approach.",
//       fullDescription: `FinanceFlow Corp was transitioning from a traditional financial services model to a digital-first approach and needed a brand transformation that would reflect this evolution. The existing brand felt outdated and didn't resonate with their target demographic of tech-savvy millennials and Gen Z.\n\nWe developed a modern brand identity that balanced trust and innovation, incorporating contemporary design elements while maintaining the credibility expected in financial services. The rebrand included logo design, visual identity system, and brand guidelines.`,
//       challenge: "Transform a traditional financial services brand to appeal to younger demographics while maintaining trust and credibility.",
//       solution: "Developed a modern brand identity that balances innovation with trustworthiness, using contemporary design elements and a fresh color palette.",
//       keyResults: [
//         "120% increase in brand awareness",
//         "85% improvement in brand perception",
//         "55% growth in digital engagement",
//         "40% increase in new customer acquisition"
//       ],
//       technologies: ["Adobe Creative Suite", "Figma", "Brand Strategy", "Market Research", "Typography"],
//       gallery: [
//         "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop",
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop",
//         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop"
//       ],
//       liveUrl: "https://financeflow-demo.com",
//       processSteps: [
//         {
//           title: "Brand Audit",
//           description: "Analyzed existing brand perception and identified areas for improvement and differentiation."
//         },
//         {
//           title: "Target Audience Research",
//           description: "Conducted research to understand the preferences and expectations of younger demographics."
//         },
//         {
//           title: "Brand Strategy",
//           description: "Developed new brand positioning and messaging that balances innovation with trust."
//         },
//         {
//           title: "Visual Identity Design",
//           description: "Created new logo, color palette, and visual system that reflects the modern brand positioning."
//         }
//       ],
//       metrics: [
//         { label: "Brand Awareness", value: "+120%" },
//         { label: "Brand Perception", value: "+85%" },
//         { label: "Digital Engagement", value: "+55%" }
//       ],
//       testimonial: {
//         quote: "The rebrand completely transformed how our customers perceive us. We now appeal to a younger demographic while maintaining the trust of our existing clients.",
//         name: "Lisa Park",
//         position: "CMO, FinanceFlow Corp",
//         avatar: "https://randomuser.me/api/portraits/women/41.jpg"
//       },
//       downloads: [
//         { name: "Brand Guidelines", url: "#" },
//         { name: "Logo Package", url: "#" }
//       ]
//     },
//     {
//       id: 6,
//       title: "EduTech Learning Platform",
//       client: "LearnSphere",
//       category: "Web Design",
//       industry: "Education",
//       type: "Platform Design",
//       timeline: "5 months",
//       duration: "20 weeks",
//       teamSize: "7 members",
//       featured: false,
//       image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
//       description: "Comprehensive learning platform design for online education with focus on student engagement and learning outcomes.",
//       fullDescription: `LearnSphere wanted to create an online learning platform that would rival traditional classroom experiences. The challenge was to design an interface that would keep students engaged while providing instructors with powerful tools to create and manage content.\n\nWe designed a comprehensive platform that includes student dashboards, course creation tools, interactive learning modules, and progress tracking systems. The design prioritizes user experience for both students and educators.`,
//       challenge: "Design an online learning platform that matches the engagement levels of traditional classroom learning while providing powerful tools for educators.",
//       solution: "Created an interactive platform with gamification elements, collaborative tools, and intuitive content management systems for both students and instructors.",
//       keyResults: [
//         "95% student completion rate",
//         "80% instructor satisfaction",
//         "70% increase in course engagement",
//         "60% improvement in learning outcomes"
//       ],
//       technologies: ["React", "Node.js", "MongoDB", "WebRTC", "Socket.io", "AWS"],
//       gallery: [
//         "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop",
//         "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=800&fit=crop",
//         "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=800&fit=crop"
//       ],
//       liveUrl: "https://learnsphere-demo.com",
//       processSteps: [
//         {
//           title: "Educational Research",
//           description: "Studied online learning best practices and identified key factors for student engagement."
//         },
//         {
//           title: "User Experience Design",
//           description: "Designed intuitive interfaces for both students and instructors with focus on usability."
//         },
//         {
//           title: "Interactive Features",
//           description: "Implemented gamification elements and collaborative tools to enhance engagement."
//         },
//         {
//           title: "Testing & Optimization",
//           description: "Conducted extensive testing with real users and optimized based on feedback."
//         }
//       ],
//       metrics: [
//         { label: "Completion Rate", value: "95%" },
//         { label: "Instructor Satisfaction", value: "80%" },
//         { label: "Course Engagement", value: "+70%" }
//       ],
//       testimonial: {
//         quote: "The platform design has revolutionized how we deliver online education. Both students and instructors love the intuitive interface and powerful features.",
//         name: "Prof. David Chen",
//         position: "Academic Director, LearnSphere",
//         avatar: "https://randomuser.me/api/portraits/men/38.jpg"
//       },
//       downloads: [
//         { name: "Platform Overview", url: "#" },
//         { name: "Feature Documentation", url: "#" }
//       ]
//     }
//   ];

//   // Categories and industries for filtering
//   const categories = [
//     { value: 'brand-identity', label: 'Brand Identity', count: 2 },
//     { value: 'web-design', label: 'Web Design', count: 3 },
//     { value: 'digital-strategy', label: 'Digital Strategy', count: 1 }
//   ];

//   const industries = [
//     { value: 'technology', label: 'Technology', count: 1 },
//     { value: 'healthcare', label: 'Healthcare', count: 1 },
//     { value: 'finance', label: 'Finance', count: 1 },
//     { value: 'education', label: 'Education', count: 1 },
//     { value: 'environmental', label: 'Environmental', count: 1 },
//     { value: 'e-commerce', label: 'E-commerce', count: 1 }
//   ];

//   // Initialize projects
//   useEffect(() => {
//     setIsLoading(true);
//     // Simulate loading
//     setTimeout(() => {
//       setProjects(mockProjects);
//       setFilteredProjects(mockProjects);
//       setIsLoading(false);
//     }, 1000);
//   }, []);

//   // Filter and sort projects
//   useEffect(() => {
//     let filtered = [...projects];

//     // Filter by category
//     if (activeCategory !== 'all') {
//       filtered = filtered?.filter(project => 
//         project?.category?.toLowerCase()?.replace(' ', '-') === activeCategory
//       );
//     }

//     // Filter by industry
//     if (activeIndustry !== 'all') {
//       filtered = filtered?.filter(project => 
//         project?.industry?.toLowerCase() === activeIndustry
//       );
//     }

//     // Sort projects
//     switch (sortBy) {
//       case 'featured':
//         filtered?.sort((a, b) => (b?.featured ? 1 : 0) - (a?.featured ? 1 : 0));
//         break;
//       case 'alphabetical':
//         filtered?.sort((a, b) => a?.title?.localeCompare(b?.title));
//         break;
//       case 'recent':
//       default:
//         filtered?.sort((a, b) => b?.id - a?.id);
//         break;
//     }

//     setFilteredProjects(filtered);
//   }, [projects, activeCategory, activeIndustry, sortBy]);

//   const handleProjectClick = (project) => {
//     setSelectedProject(project);
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//     setSelectedProject(null);
//   };

//   const getRelatedProjects = (currentProject) => {
//     return projects?.filter(project => 
//         project?.id !== currentProject?.id && 
//         (project?.category === currentProject?.category || project?.industry === currentProject?.industry)
//       )?.slice(0, 3);
//   };

//   const scrollToProjects = () => {
//     projectsRef?.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-background">
//         <Header />
//         <div className="flex items-center justify-center min-h-screen">
//           <div className="text-center">
//             <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//             <p className="text-muted-foreground">Loading portfolio...</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <Helmet>
//         <title>Work Portfolio - Interactive Showcase | Joseph Aro</title>
//         <meta name="description" content="Explore Joseph Aro's creative portfolio featuring brand identities, web designs, and digital strategies. Interactive showcase with detailed case studies and project insights." />
//         <meta name="keywords" content="portfolio, web design, brand identity, digital strategy, UI/UX design, creative work" />
//       </Helmet>
//       <Header />
//       <BreadcrumbNav currentProject={selectedProject} />
//       {/* Hero Section */}
//       <HeroSection onScrollToProjects={scrollToProjects} />
//       {/* Projects Section */}
//       <section ref={projectsRef} className="section-padding bg-background">
//         <div className="container-brand">
//           {/* Filter Bar */}
//           <FilterBar
//             categories={categories}
//             industries={industries}
//             activeCategory={activeCategory}
//             activeIndustry={activeIndustry}
//             onCategoryChange={setActiveCategory}
//             onIndustryChange={setActiveIndustry}
//             projectCount={filteredProjects?.length}
//             viewMode={viewMode}
//             onViewModeChange={setViewMode}
//             sortBy={sortBy}
//             onSortChange={setSortBy}
//           />

//           {/* Projects Grid/List */}
//           {filteredProjects?.length > 0 ? (
//             <>
//               {viewMode === 'grid' ? (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                   {filteredProjects?.map((project, index) => (
//                     <div
//                       key={project?.id}
//                       className="animate-slide-up"
//                       style={{ animationDelay: `${index * 100}ms` }}
//                     >
//                       <ProjectCard
//                         project={project}
//                         onProjectClick={handleProjectClick}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <ProjectList
//                   projects={filteredProjects}
//                   onProjectClick={handleProjectClick}
//                 />
//               )}
//             </>
//           ) : (
//             <div className="text-center py-16">
//               <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Icon name="Search" size={32} className="text-muted-foreground" />
//               </div>
//               <h3 className="text-xl font-semibold text-foreground mb-2">No Projects Found</h3>
//               <p className="text-muted-foreground mb-6">
//                 Try adjusting your filters to see more projects.
//               </p>
//               <Button
//                 variant="outline"
//                 iconName="RotateCcw"
//                 iconPosition="left"
//                 onClick={() => {
//                   setActiveCategory('all');
//                   setActiveIndustry('all');
//                 }}
//               >
//                 Clear Filters
//               </Button>
//             </div>
//           )}
//         </div>
//       </section>
//       {/* Call to Action */}
//       <section className="cta-section">
//         <div className="container-brand">
//           <div className="max-w-3xl mx-auto text-center">
//             <h2 className="text-3xl font-bold text-foreground mb-4">
//               Ready to Start Your Project?
//             </h2>
//             <p className="text-lg text-muted-foreground mb-8">
//               Let's collaborate to bring your vision to life. Every great project starts with a conversation.
//             </p>
//             <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//               <Button
//                 variant="default"
//                 size="lg"
//                 iconName="MessageSquare"
//                 iconPosition="left"
//                 className="bg-gradient-brand hover:opacity-90"
//               >
//                 Start a Conversation
//               </Button>
//               <Button
//                 variant="outline"
//                 size="lg"
//                 iconName="Download"
//                 iconPosition="left"
//               >
//                 Download Portfolio
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Project Modal */}
//       <ProjectModal
//         project={selectedProject}
//         isOpen={isModalOpen}
//         onClose={handleModalClose}
//         relatedProjects={selectedProject ? getRelatedProjects(selectedProject) : []}
//         onRelatedProjectClick={handleProjectClick}
//       />
//     </div>
//   );
// };

// export default WorkPortfolioShowcase;



import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import BreadcrumbNav from './components/BreadcrumbNav';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

const WorkPortfolioShowcase = () => {
  const [activeItem, setActiveItem] = useState(-1);

  // Timeline data based on the provided information
  const timelineData = [
    {
      id: 1,
      year: '2024',
      title: 'GIS Specialist / GLS Consultant',
      role: 'CANDRONE / DRAGANFLY / PRIVATE',
      type: 'corporate',
      highlights: [
        'LIDAR Data Processing, Project Management, Aerial Surveys',
        'Led LIDAR projects data acquisition for 30k hectares of surveys',
        'Project Manager for 650km aerial survey for coastal road development',
        'GIS technical lead for Ukrainian De-mining project using UAVs, GIS, and AI',
        'Technical Project manager for 1100 hectares artificial island development',
        'GIS Operator for BC wildfire detection and mapping initiatives'
      ],
      icon: 'Map'
    },
    {
      id: 2,
      year: '2022-2020',
      title: 'Chief Operations Officer | GIS Leader | Technical Project Manager',
      role: 'OEA CONSULTS LTD',
      type: 'corporate',
      highlights: [
        'Chief Data & Analytics Officer - Lead data-focused team on product development',
        'Project Manager on the GSV – Digital Twin Nigeria Project',
        'Co-Founder, Director of Operations - Grew revenue YoY by over 200%',
        'Product Manager for Lagos Waterways Geoinformation Portal',
        'Deployed over 10 Enterprise GIS and Data Solutions for FMCGS, Government Agencies',
        'Led comprehensive training for 600+ individuals on drones, GIS, and AI'
      ],
      icon: 'TrendingUp'
    },
    {
      id: 3,
      year: '2020-2018',
      title: 'Geospatial Data Analyst / Senior Project Manager',
      role: 'OEA CONSULTS LTD',
      type: 'corporate',
      highlights: [
        'Asset enumeration and mapping of the Badagry Seaport Complex',
        'Conducted aerial LiDAR surveys for 25km Redline Metro-Rail alignment',
        'Deployed aerial mapping for 500ha Lagos Island and 6500ha Omu Community',
        'Land use assessment for various state development projects'
      ],
      icon: 'BarChart3'
    },
    {
      id: 4,
      year: '2017',
      title: 'Data Coordinator & Technical Lead',
      role: 'Multiple Organizations',
      type: 'research',
      highlights: [
        'Watershed and Hydrological modelling of South-West Nigeria',
        'Data Lead for ENGULF research program - Land subsidence analysis in Lagos',
        'Transport Consultant for waterways investment projects',
        'Led bathymetric surveys of 18 commercial routes on Lagos Lagoon'
      ],
      icon: 'Navigation'
    },
    {
      id: 5,
      year: '2016-2015',
      title: 'Mapping & Profiling Data Lead',
      role: 'JUSTICE & EMPOWERMENT INITIATIVES',
      type: 'research',
      highlights: [
        'Mapping, profiling and data collection for slum communities in multiple cities',
        'Led community profiling of 44 communities with 80%+ coverage',
        'Technical lead for standardizing data toward achieving SDG goals',
        'Mapping of Nigeria Languages in Kwara State',
        'Spatial Analysis of Telecom FCG Operations',
        'Mapping of Community Health Centers and disease vector analysis'
      ],
      icon: 'MapPin'
    },
    {
      id: 6,
      year: '2014-2010',
      title: 'GIS Consultant & Researcher',
      role: 'GISOLERIC INTERNATIONAL & OTHERS',
      type: 'research',
      highlights: [
        'GIS Analyst for University of Berlin Department',
        'GIS Instructor, Masters in Geographic Information Systems',
        'Spatial Hydrological Analysis of Water Resources',
        'Vulnerability Assessment and Flood risk Mapping',
        'Analysis of Soil Erosion Potential using GIS models',
        'Mapping of all Road network in Ilorin Metropolis'
      ],
      icon: 'Globe'
    }
  ];

  // Technical skills
  const technicalSkills = [
    { name: 'LIDAR Data Processing', proficiency: 95 },
    { name: 'GIS Analysis', proficiency: 98 },
    { name: 'Project Management', proficiency: 90 },
    { name: 'Aerial Surveys', proficiency: 92 },
    { name: 'Remote Sensing', proficiency: 88 },
    { name: 'Hydrological Modeling', proficiency: 85 },
    { name: 'Spatial Data Analysis', proficiency: 96 },
    { name: 'UAV Operation', proficiency: 90 },
    { name: 'Data Visualization', proficiency: 87 },
    { name: 'Cartography', proficiency: 91 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Geo-spatial Career & Expertise | Joseph Aro</title>
        <meta name="description" content="Explore Joseph Aro's extensive geo-spatial career spanning over 12 years, featuring expertise in GIS, LIDAR, aerial surveys, and environmental analysis." />
        <meta name="keywords" content="geo-spatial, GIS, LIDAR, remote sensing, aerial surveys, environmental analysis, project management" />
      </Helmet>
      
      <Header />
      <BreadcrumbNav />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-muted/30 to-background py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-40"></div>
        
        <div className="container-brand relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Icon name="Map" size={16} className="mr-2" />
              Geo-spatial Expertise
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Over 12 Years of{' '}
              <span className="text-gradient">Geo-spatial Excellence</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Specializing in LIDAR data processing, GIS analysis, aerial surveys, and environmental 
              consulting with a proven track record of delivering complex geo-spatial solutions across multiple continents.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">12+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">30k+</div>
                <div className="text-sm text-muted-foreground">Hectares Surveyed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="section-padding bg-card">
        <div className="container-brand">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Technical Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive skills in geo-spatial technologies and data analysis with extensive field experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div 
                    className="bg-gradient-brand h-2.5 rounded-full" 
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Timeline Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-brand">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-8 md:mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
                <Icon name="Briefcase" size={16} className="mr-2" />
                Professional Journey
              </div>
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 md:mb-6">
                <span className="text-gradient">Career</span> Milestones
              </h2>
             <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 md:px-0">
                A timeline of my career progression and major accomplishments in the geo-spatial industry
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
            <div className="hidden md:block absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-secondary to-primary transform md:-translate-x-0.5"></div>

               <div className="space-y-8 md:space-y-12">
                {timelineData.map((item, index) => (
                  <div
                    key={item.id}
                    className={`relative flex flex-col md:flex-row items-start md:items-center cursor-pointer transition-brand ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                    onClick={() => setActiveItem(activeItem === index ? -1 : index)}
                  >
                    {/* Timeline Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 md:left-1/2 w-4 h-4 bg-background border-4 border-accent rounded-full transform md:-translate-x-1/2 z-10"></div>
                    
                    {/* Year Badge */}
                      <div className="absolute left-1/2 -translate-x-1/2 md:left-1/2 top-0 transform md:-translate-x-1/2 md:-translate-y-8">
                      <div className="bg-gradient-brand text-white px-3 py-1 rounded-full text-sm font-bold shadow-brand whitespace-nowrap">
                        {item.year}
                      </div>
                    </div>

                    {/* Content Card */}
                          <div className={`mt-6 md:mt-0 w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                       <div className={`card-brand p-4 md:p-6 hover:shadow-brand-lg transition-brand ${
                      activeItem === index ? 'ring-2 ring-accent shadow-brand-lg' : ''
                    }`}>
                        <div className="flex items-start space-x-3 md:space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center text-white shadow-brand">
                              <Icon name={item.icon} size={20} />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                            <div className="text-accent font-medium mb-1">{item.role}</div>
                            <div className="text-sm text-muted-foreground mb-3 capitalize">{item.type}</div>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                              {item.highlights[0]}
                            </p>
                            
                            {activeItem === index && (
                              <div className="animate-slide-up">
                                <h4 className="font-semibold text-foreground mb-2">Key Responsibilities & Achievements:</h4>
                                <ul className="space-y-1">
                                  {item.highlights.map((highlight, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                                      <Icon name="CheckCircle" size={16} className="text-accent mr-2 flex-shrink-0" />
                                      {highlight}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="mt-4 flex items-center justify-between">
                          <div className="text-xs text-muted-foreground">
                            Click to {activeItem === index ? 'collapse' : 'expand'} details
                          </div>
                          <Icon 
                            name={activeItem === index ? "ChevronUp" : "ChevronDown"} 
                            size={16} 
                            className="text-muted-foreground" 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Projects Highlight */}
      <section className="section-padding bg-card">
        <div className="container-brand">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Notable Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key geo-spatial projects that demonstrate expertise across various domains and technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl p-6 shadow-brand hover:shadow-brand-lg transition-brand">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Navigation" size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Lagos Waterways Geoportal</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Developed comprehensive geoinformation portal for Lagos waterways authority with real-time monitoring capabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary">GIS</span>
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary">Web Development</span>
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary">Hydrography</span>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-brand hover:shadow-brand-lg transition-brand">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Ukrainian De-mining Initiative</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Led GIS technical team using UAVs and AI to identify UXOs in conflict zones, identifying 3 major contaminated sites.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary">UAV</span>
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary">AI</span>
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary">Risk Assessment</span>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-brand hover:shadow-brand-lg transition-brand">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="BarChart3" size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Digital Twin Nigeria</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Project Manager for GSV initiative creating a comprehensive digital twin of Nigeria for planning and development.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary">LIDAR</span>
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary">3D Modeling</span>
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary">Project Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container-brand">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Leverage My Geo-spatial Expertise
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              With over 12 years of experience in geo-spatial technologies, I can help your organization solve complex spatial challenges and implement cutting-edge solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
              to="/contact-gateway-connection-hub"
              >
              <Button
                variant="default"
                size="lg"
                iconName="MessageSquare"
                iconPosition="right"
              >
                Contact Me
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
       {/* Footer */}
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

export default WorkPortfolioShowcase;