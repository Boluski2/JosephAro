
// import React, { useState } from 'react';
// import Image from 'components/AppImage';

// const TrendingTopics = () => {
//    const [activeBox, setActiveBox] = useState(0);

//     const projectData = [
//     {
//       id: 1,
//       title: 'LiDAR Mapping - 10k Ha',
//       year: '2023',
//       description: 'Deploying UAVs and ROVs towards Search and ​Rescue Operations on the Lagos Waterways',
//       image: '/image/LIDAR.png'
//     },
//     {
//       id: 2,
//       title: 'ROV Training',
//       year: '2022',
//       description: 'Deploying UAVs and ROVs towards Search and ​Rescue Operations on the Lagos Waterways',
//       image: '/image/jor.png'
//     },
//     {
//       id: 3,
//       title: 'Security Mapping - 4k Ha',
//       year: '2023',
//       description: 'Aerial Surveillance and Risk Assessment of large scale AEC projects',
//       image: '/image/jor1.png'
//     },
//     {
//       id: 4,
//       title: 'UAV Training',
//       year: '2022',
//       description: 'UAV training for the Lagos Waterways Authority',
//       image: '/image/jor2.png'
//     },
//     {
//       id: 5,
//       title: 'LSecurity Mapping - 10k Ha',
//       year: '2023',
//       description: 'Deploying UAVs and ROVs towards Search and ​Rescue Operations on the Lagos Waterways',
//       image: '/image/jor1.png'
//     },
//     {
//       id: 6,
//       title: 'UAV Training',
//       year: '2022',
//       description: 'Deploying UAVs and ROVs towards Search and ​Rescue Operations on the Lagos Waterways',
//       image: '/image/jor2.png'
//     }
//   ];

//   return (
//  <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-12">
//         <div className="flex flex-col lg:flex-row gap-12">
//           {/* Left Column - Image */}
//           <div className="lg:w-1/2">
//             <div className="relative h-96 lg:h-full rounded-xl overflow-hidden shadow-lg">
//               <Image
//                 src="/image/LIDAR.png"
//                 alt="Professional drone operation in field"
//                 fill
//                 style={{ objectFit: 'cover' }}
//                 priority
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
//               <div className="absolute bottom-6 left-6 text-white">
//                 <p className="text-sm font-light">Surveying mining operations in Chile, 2022</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Content */}
//           <div className="lg:w-1/2">
//             <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
//               Unmanned Systems
//             </h1>
            
//             <div className="mb-10">
//               <div className="flex flex-wrap gap-4 mb-6">
//                 <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
//                   Remote Pilot License (SACAA)
//                 </span>
//                 <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
//                   Advanced Pilot License (Transport Canada)
//                 </span>
//                 <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
//                   ROV Pilot - Underwater Systems
//                 </span>
//                 <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
//                   LiDAR Expert
//                 </span>
//               </div>
              
//               <p className="text-gray-700 text-lg leading-relaxed">
//                 With over 600 hours of remote flight operations across 3 continents, and, over 200k hectares mapped in the last 3 years spanning ROW assessments, Mining Operations, AEC projects, Urban Planning, Telecoms assets & utility mapping, Deep Sea Port Modelling among many others.
//               </p>
//             </div>
            
//             <div>
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Projects</h2>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {projectData.map((project, index) => (
//                   <div 
//                     key={project.id}
//                     className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer border-2 ${activeBox === index ? 'border-blue-500' : 'border-white'}`}
//                     onMouseEnter={() => setActiveBox(index)}
//                     onClick={() => setActiveBox(index)}
//                   >
//                     <div className="relative h-40">
//                       <Image
//                         src={project.image}
//                         alt={project.title}
//                         fill
//                         style={{ objectFit: 'cover' }}
//                       />
//                       <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
//                         {project.year}
//                       </div>
//                     </div>
//                     <div className="p-4">
//                       <h3 className="font-bold text-lg text-gray-800 mb-1">{project.title}</h3>
//                       <p className="text-gray-600 text-sm">{project.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default TrendingTopics;



import React, { useState } from 'react';

const TrendingTopics = () => {
   const [activeBox, setActiveBox] = useState(0);

    const projectData = [
    {
      id: 1,
      title: 'LiDAR Mapping - 10k Ha',
      year: '2023',
      description: 'Deploying UAVs and ROVs towards Search and ​Rescue Operations on the Lagos Waterways',
      image: '/image/LIDAR.png'
    },
    {
      id: 2,
      title: 'ROV Training',
      year: '2022',
      description: 'Deploying UAVs and ROVs towards Search and ​Rescue Operations on the Lagos Waterways',
      image: '/image/jor.png'
    },
    {
      id: 3,
      title: 'Security Mapping - 4k Ha',
      year: '2023',
      description: 'Aerial Surveillance and Risk Assessment of large scale AEC projects',
      image: '/image/jor1.png'
    },
    {
      id: 4,
      title: 'UAV Training',
      year: '2022',
      description: 'UAV training for the Lagos Waterways Authority',
      image: '/image/jor2.png'
    },
    {
      id: 5,
      title: 'Security Mapping - 10k Ha',
      year: '2023',
      description: 'Deploying UAVs and ROVs towards Search and ​Rescue Operations on the Lagos Waterways',
      image: '/image/jor1.png'
    },
    {
      id: 6,
      title: 'UAV Training',
      year: '2022',
      description: 'Deploying UAVs and ROVs towards Search and ​Rescue Operations on the Lagos Waterways',
      image: '/image/jor2.png'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column - Image */}
          <div className="lg:w-1/2 flex flex-col">
            <div className="relative flex-1 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/image/jor2.png" // Replace with your actual image path
                alt="Professional Drone Operations - Surveying mining operations in Chile, 2022"
                className="w-full h-full object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end">
                <div className="text-white p-8 w-full">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">Professional Drone Operations</h3>
                  <p className="text-blue-100 text-sm text-center">Surveying mining operations in Chile, 2022</p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-1/2 flex flex-col">
            <div className="mb-6 lg:mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 lg:mb-8 leading-tight">
                Unmanned Systems
              </h1>
              
              <div className="mb-8">
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-semibold">
                    Remote Pilot License (SACAA)
                  </span>
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-semibold">
                    Advanced Pilot License
                  </span>
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-semibold">
                    ROV Pilot - Underwater
                  </span>
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-semibold">
                    LiDAR Expert
                  </span>
                </div>
                
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  With over 600 hours of remote flight operations across 3 continents, and over 200k hectares mapped in the last 3 years spanning ROW assessments, Mining Operations, AEC projects, Urban Planning, and Telecoms assets.
                </p>
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 lg:mb-6">Featured Projects</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {projectData.map((project, index) => (
                  <div 
                    key={project.id}
                    className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer border-2 ${activeBox === index ? 'border-blue-500 scale-[1.02]' : 'border-white hover:border-gray-200'}`}
                    onMouseEnter={() => setActiveBox(index)}
                    onClick={() => setActiveBox(index)}
                  >
                    <div className="relative h-32 sm:h-36">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden  w-full h-full bg-gradient-to-br from-gray-300 to-gray-400  items-center justify-center absolute inset-0">
                        <div className="text-gray-600">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {project.year}
                      </div>
                    </div>
                    <div className="p-3 sm:p-4">
                      <h3 className="font-bold text-sm sm:text-base text-gray-800 mb-1 line-clamp-2">{project.title}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingTopics;