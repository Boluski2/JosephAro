import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';

const GalleryVisualShowcaseCollection = () => {
  const [images, setImages] = useState([]);

  // Mock gallery data with more variety
  const galleryImages = [
    {
      id: 1,
      src: '/image/Act.png',
      alt: 'Corporate Identity Design',
      area: 'brand',
      category: 'Branding'
    },
    {
      id: 2,
      src: '/image/Abyss.png',
      alt: '3D Visualization',
      area: 'threeD',
      category: '3D Art'
    },
    {
      id: 3,
      src: '/image/Descent.png',
      alt: 'Design System',
      area: 'design',
      category: 'UI/UX'
    },
    {
      id: 4,
      src: '/image/jor1.png',
      alt: 'Generative Art',
      area: 'pattern',
      category: 'Experimental'
    },
    {
      id: 5,
      src: '/image/jor2.png',
      alt: 'Logo Design',
      area: 'logo',
      category: 'Branding'
    },
    {
      id: 6,
      src: '/image/jor4.png',
      alt: 'Motion Graphics',
      area: 'motion',
      category: 'Motion'
    },
    {
      id: 7,
      src: '/image/jor5.png',
      alt: 'Typography Exploration',
      area: 'type',
      category: 'Typography'
    },
    {
      id: 8,
      src: '/image/jor1.png',
      alt: 'Packaging Design',
      area: 'package',
      category: 'Packaging'
    },
    {
      id: 9,
      src: '/image/jor8.png',
      alt: 'Digital Illustration',
      area: 'character',
      category: 'Illustration'
    },
    {
      id: 10,
      src: '/image/jor12.png',
      alt: 'Web Design',
      area: 'web',
      category: 'Web Design'
    },
    {
      id: 11,
      src: '/image/jor13.png',
      alt: 'Photography',
      area: 'photo',
      category: 'Photography'
    },
    {
      id: 12,
      src: '/image/jor9.png',
      alt: 'Art Direction',
      area: 'art',
      category: 'Art Direction'
    }
  ];

  useEffect(() => {
    // Simulate loading images
    setImages(galleryImages);
  }, []);

  // Function to get grid area class
  const getGridAreaClass = (area) => {
    return `area-${area}`;
  };

  // Added missing function
  const handleImageClick = (image, index) => {
    console.log('Image clicked:', image, index);
    // Add your image click logic here
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Gallery - Visual Showcase Collection | Joseph Aro</title>
        <meta name="description" content="Explore Joseph Aro's visual gallery featuring curated collections of creative work across various disciplines and mediums." />
        <meta name="keywords" content="gallery, creative portfolio, design, art, photography, branding" />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section with Background Image */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{ 
              backgroundImage: 'url(/image/jor.png)',
              backgroundAttachment: 'fixed'
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-7xl md:text-9xl font-bold mb-6 font-display tracking-tight">
                GALLERY
            </h1>
            <p className="text-sm md:text-sm mb-8 leading-relaxed max-w-2xl mx-auto">
             Joseph Aro receiving a plaque from G. Shelby. Esri Representative at the 2023 GIS 
             ​Day Event where he was invited as Keynote Speaker
            </p>
          </div>
        </section>

        {/* Gallery Grid Section with Grid Template Areas */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Image Grid with Template Areas */}
            <div className="gallery-grid">
              {images.map((image, index) => (
                <div 
                  key={image.id}
                  className={`gallery-item ${getGridAreaClass(image.area)} group`}
                  onClick={() => handleImageClick(image, index)}
                >
                  {/* Actual image without gradient overlay */}
                  <div className="w-full h-full relative">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover absolute inset-0"
                      onError={(e) => {
                        // If image fails to load, show fallback
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback in case image doesn't load */}
                    <div 
                      className="w-full h-full bg-gray-200 hidden items-center justify-center"
                    >
                      <div className="text-center p-6">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-gray-600 text-sm">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} Joseph Aro. All rights reserved. Crafted with passion and precision.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: repeat(8, 100px);
          gap: 1rem;
          grid-template-areas:
            "brand brand brand brand threeD threeD threeD threeD design design design design"
            "brand brand brand brand threeD threeD threeD threeD design design design design"
            "pattern pattern pattern pattern pattern logo logo logo logo motion motion motion"
            "pattern pattern pattern pattern pattern logo logo logo logo motion motion motion"
            "type type type package package package package character character character web web"
            "type type type package package package package character character character web web"
            "photo photo photo photo photo art art art art art art art"
            "photo photo photo photo photo art art art art art art art";
        }

        .area-brand { grid-area: brand; }
        .area-threeD { grid-area: threeD; }
        .area-design { grid-area: design; }
        .area-pattern { grid-area: pattern; }
        .area-logo { grid-area: logo; }
        .area-motion { grid-area: motion; }
        .area-type { grid-area: type; }
        .area-package { grid-area: package; }
        .area-character { grid-area: character; }
        .area-web { grid-area: web; }
        .area-photo { grid-area: photo; }
        .area-art { grid-area: art; }

        .gallery-item {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(6, 1fr);
            grid-template-rows: repeat(16, 80px);
            grid-template-areas:
              "brand brand brand threeD threeD threeD"
              "brand brand brand threeD threeD threeD"
              "design design design design design design"
              "design design design design design design"
              "pattern pattern pattern pattern pattern pattern"
              "pattern pattern pattern pattern pattern pattern"
              "logo logo logo motion motion motion"
              "logo logo logo motion motion motion"
              "type type type package package package"
              "type type type package package package"
              "character character character web web web"
              "character character character web web web"
              "photo photo photo photo photo photo"
              "photo photo photo photo photo photo"
              "art art art art art art"
              "art art art art art art";
          }
        }

        @media (max-width: 640px) {
          .gallery-grid {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(12, 200px);
            grid-template-areas:
              "brand"
              "threeD"
              "design"
              "pattern"
              "logo"
              "motion"
              "type"
              "package"
              "character"
              "web"
              "photo"
              "art";
          }
        }
      `}</style>
    </div>
  );
};

export default GalleryVisualShowcaseCollection;