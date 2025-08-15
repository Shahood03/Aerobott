// import React, { useState, useEffect } from 'react';
// import { Search, Filter, Star, MapPin, Clock, DollarSign, Award, ChevronDown } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// // const baseurl=process.env.REACT_APP_API_URL;
// const DroneTrainingUserPage = () => {
//   // Add useNavigate hook for routing
//   const navigate = useNavigate();
  
//   // State management (keeping all your existing state)
//   const [trainings, setTrainings] = useState([]);
//   const [filteredTrainings, setFilteredTrainings] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedMode, setSelectedMode] = useState('');
//   const [selectedRating, setSelectedRating] = useState(0);
//   const [selectedLocation, setSelectedLocation] = useState('');
//   const [showFilters, setShowFilters] = useState(false);
//   const [activeTraining, setActiveTraining] = useState(null);
//   const [sortBy, setSortBy] = useState('rating');
//   const [sortOrder, setSortOrder] = useState('desc');
//   const baseurl = process.env.REACT_APP_API_URL;
  
//   // Fetch trainings data
//   useEffect(() => {
//     const fetchTrainings = async () => {
//       try {
//         setIsLoading(true);
//         setError(null);
        
//         const response = await fetch(`${baseurl}/api/training?sort_by=${sortBy}&sort_dir=${sortOrder}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch trainings');
//         }
        
//         const data = await response.json();
        
//         // Transform data format from backend to frontend format
//         const transformedData = (data.trainings || []).map(item => ({
//           id: item._id,
//           heading: item.title,
//           description: item.description,
//           location: item.location,
//           mode: item.instructor, // Backend stores 'mode' as 'instructor'
//           price: parseFloat(item.price),
//           rating: parseFloat(item.rating),
//           details: item.details,
//           date: item.date,
//           has_image: !!item.image_filename
//         }));
        
//         setTrainings(transformedData);
//         setFilteredTrainings(transformedData);
//       } catch (err) {
//         console.error("Error fetching trainings:", err);
//         setError('Failed to load training courses. Please try again later.');
//       } finally {
//         setIsLoading(false);
//       }
//     };
    
//     fetchTrainings();
//   }, [sortBy, sortOrder, baseurl]);

//   // Apply filters and search
//   useEffect(() => {
//     let result = [...trainings];
    
//     // Apply search
//     if (searchTerm) {
//       const searchLower = searchTerm.toLowerCase();
//       result = result.filter(
//         training => 
//           training.heading.toLowerCase().includes(searchLower) ||
//           training.description.toLowerCase().includes(searchLower) ||
//           training.location.toLowerCase().includes(searchLower)
//       );
//     }
    
//     // Apply mode filter
//     if (selectedMode) {
//       result = result.filter(training => training.mode === selectedMode);
//     }
    
//     // Apply rating filter
//     if (selectedRating > 0) {
//       result = result.filter(training => training.rating >= selectedRating);
//     }
    
//     // Apply location filter
//     if (selectedLocation) {
//       result = result.filter(training => 
//         training.location.toLowerCase().includes(selectedLocation.toLowerCase())
//       );
//     }
    
//     setFilteredTrainings(result);
//   }, [searchTerm, selectedMode, selectedRating, selectedLocation, trainings]);

//   // Handle enrollment
//   const handleEnrollNow = (trainingId) => {
//     navigate(`/enroll/${trainingId}`);
//   };

//   // Helper functions
//   const getTrainingImageUrl = (trainingId) => {
//     return `${baseurl}/api/training/image/${trainingId}`;
//   };

//   const getModeColor = (mode) => {
//     switch (mode) {
//       case 'Online': return 'bg-blue-100 text-blue-800';
//       case 'Onsite': return 'bg-green-100 text-green-800';
//       case 'Hybrid': return 'bg-purple-100 text-purple-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const renderStars = (rating) => {
//     return (
//       <div className="flex">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <Star 
//             key={star} 
//             className={`h-4 w-4 ${star <= Math.round(rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
//           />
//         ))}
//         <span className="ml-1 text-yellow-600 font-medium">{rating.toFixed(1)}</span>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800">
//       {/* Hero Section */}
//       <div className="relative bg-white">
//         <div className="absolute inset-0 overflow-hidden opacity-10">
//           <img 
//             src="/images/drone/d5.svg" 
//             alt="Drone flying" 
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
//           <h1 className="text-4xl font-extrabold tracking-tight text-blue-800 sm:text-5xl lg:text-6xl">
//             Drone Training Courses
//           </h1>
//           <p className="mt-6 text-xl text-gray-600 max-w-3xl">
//             Master the art of drone flight with our professional training programs. 
//             Whether you're a beginner or looking to advance your skills, we have courses 
//             for every level.
//           </p>
//         </div>
//       </div>
      
//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
//         {/* Search and Filter Section */}
//         <div className="mb-12">
//           <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
//             <div className="relative w-full md:w-96">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Search className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 className="block w-full bg-white border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-gray-700 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
//                 placeholder="Search by name, description, or location..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//             <button 
//               className="flex items-center gap-2 bg-white hover:bg-gray-100 border border-gray-300 px-4 py-2 rounded-lg text-gray-700 shadow-sm transition-colors"
//               onClick={() => setShowFilters(!showFilters)}
//             >
//               <Filter className="h-5 w-5" />
//               <span>Filters</span>
//               <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
//             </button>
//           </div>
          
//           {/* Filter Panel */}
//           {showFilters && (
//             <div className="bg-white rounded-lg p-6 mb-6 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-md border border-gray-200">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Course Type
//                 </label>
//                 <select
//                   className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
//                   value={selectedMode}
//                   onChange={(e) => setSelectedMode(e.target.value)}
//                 >
//                   <option value="">All Types</option>
//                   <option value="Online">Online</option>
//                   <option value="Onsite">Onsite</option>
//                   <option value="Hybrid">Hybrid</option>
//                 </select>
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Minimum Rating
//                 </label>
//                 <select
//                   className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
//                   value={selectedRating}
//                   onChange={(e) => setSelectedRating(Number(e.target.value))}
//                 >
//                   <option value="0">Any Rating</option>
//                   <option value="3">3+ Stars</option>
//                   <option value="4">4+ Stars</option>
//                   <option value="4.5">4.5+ Stars</option>
//                 </select>
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Location
//                 </label>
//                 <input
//                   type="text"
//                   className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
//                   placeholder="Enter location..."
//                   value={selectedLocation}
//                   onChange={(e) => setSelectedLocation(e.target.value)}
//                 />
//               </div>
              
//               <div className="md:col-span-3 flex justify-end gap-4">
//                 <button
//                   className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium"
//                   onClick={() => {
//                     setSelectedMode('');
//                     setSelectedRating(0);
//                     setSelectedLocation('');
//                     setSearchTerm('');
//                   }}
//                 >
//                   Clear All
//                 </button>
//                 <div className="flex items-center gap-2">
//                   <span className="text-sm text-gray-600">Sort by:</span>
//                   <select
//                     className="bg-white border border-gray-300 rounded-md py-1 px-2 text-gray-700 text-sm focus:ring-blue-500 focus:border-blue-500 shadow-sm"
//                     value={`${sortBy}-${sortOrder}`}
//                     onChange={(e) => {
//                       const [newSortBy, newSortOrder] = e.target.value.split('-');
//                       setSortBy(newSortBy);
//                       setSortOrder(newSortOrder);
//                     }}
//                   >
//                     <option value="rating-desc">Highest Rated</option>
//                     <option value="price-asc">Price: Low to High</option>
//                     <option value="price-desc">Price: High to Low</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
        
//         {/* Loading State */}
//         {isLoading && (
//           <div className="flex justify-center my-12">
//             <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
//           </div>
//         )}
        
//         {/* Error Message */}
//         {error && (
//           <div className="my-12 p-6 bg-red-50 text-red-700 border border-red-200 rounded-lg shadow-sm">
//             <p>{error}</p>
//           </div>
//         )}
        
//         {/* No Results */}
//         {!isLoading && !error && filteredTrainings.length === 0 && (
//           <div className="my-12 text-center">
//             <h3 className="text-xl font-medium text-gray-600">No training courses found</h3>
//             <p className="mt-2 text-gray-500">Try adjusting your search or filters</p>
//           </div>
//         )}
        
//         {/* Training Cards */}
//         {!isLoading && !error && filteredTrainings.length > 0 && (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredTrainings.map((training) => (
//               <div 
//                 key={training.id} 
//                 className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-blue-200 transition-shadow border border-gray-200"
//               >
//                 {/* Course Image */}
//                 <div className="h-48 relative">
//                   {training.has_image ? (
//                     <img 
//                       src={getTrainingImageUrl(training.id)} 
//                       alt={training.heading}
//                       className="w-full h-full object-cover"
//                       onError={(e) => {
//                         e.target.onerror = null;
//                         e.target.src = "/api/placeholder/400/320?text=Drone+Training";
//                       }}
//                     />
//                   ) : (
//                     <img 
//                       src="/api/placeholder/400/320?text=Drone+Training" 
//                       alt={training.heading}
//                       className="w-full h-full object-cover"
//                     />
//                   )}
                  
//                   {/* Mode Badge */}
//                   <span className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-semibold ${getModeColor(training.mode)}`}>
//                     {training.mode}
//                   </span>
//                 </div>
                
//                 {/* Course Content */}
//                 <div className="p-6">
//                   {/* Title and Rating */}
//                   <div className="flex justify-between items-start mb-2">
//                     <h3 className="text-xl font-bold text-gray-800">{training.heading}</h3>
//                     {renderStars(training.rating)}
//                   </div>
                  
//                   {/* Description */}
//                   <p className="text-gray-600 mb-4 line-clamp-2">{training.description}</p>
                  
//                   {/* Course Details */}
//                   <div className="space-y-2 mb-6">
//                     <div className="flex items-center text-gray-700">
//                       <MapPin className="h-4 w-4 mr-2 text-blue-600" />
//                       <span>{training.location}</span>
//                     </div>
//                     <div className="flex items-center text-gray-700">
//                       <DollarSign className="h-4 w-4 mr-2 text-blue-600" />
//                       <span>${training.price.toFixed(2)}</span>
//                     </div>
//                   </div>
                  
//                   {/* Buttons */}
//                   <div className="flex gap-3">
//                     <button 
//                       className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors shadow-sm"
//                       onClick={() => handleEnrollNow(training.id)}
//                     >
//                       Enroll Now
//                     </button>
//                     <button 
//                       className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors border border-gray-300 shadow-sm"
//                       onClick={() => setActiveTraining(activeTraining === training.id ? null : training.id)}
//                     >
//                       Details
//                     </button>
//                   </div>
                  
//                   {/* Expanded Details */}
//                   {activeTraining === training.id && (
//                     <div className="mt-6 pt-4 border-t border-gray-200">
//                       <h4 className="font-medium text-gray-800 mb-2">Course Details</h4>
//                       <p className="text-gray-600 mb-4">{training.details}</p>
//                       <div className="grid grid-cols-2 gap-4">
//                         <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center border border-gray-200">
//                           <Clock className="h-5 w-5 text-blue-600 mb-1" />
//                           <span className="text-sm text-gray-700">2-4 Weeks</span>
//                         </div>
//                         <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center border border-gray-200">
//                           <Award className="h-5 w-5 text-blue-600 mb-1" />
//                           <span className="text-sm text-gray-700">Certificate</span>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
        
//         {/* Call to Action */}
//         <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center border border-blue-100 shadow-lg">
//           <h2 className="text-2xl font-bold text-blue-800 mb-4">Ready to take your drone skills to new heights?</h2>
//           <p className="text-blue-700 mb-6 max-w-2xl mx-auto">
//             Join thousands of certified drone pilots who started their journey with our training programs.
//             Get personalized guidance from industry experts.
//           </p>
//           <button 
//             className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-full transition-colors shadow-md"
//             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           >
//             Get Started Today
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DroneTrainingUserPage;



// dummy start

import React, { useState, useEffect } from 'react';
import { Search, Filter, Star, MapPin, Clock, Award, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Static dummy data
const DUMMY_TRAININGS = [
  {
    id: '8',
    heading: 'Remote Pilot Course - Small, Rotorcraft [DGCA CERTIFIED]',
    description: 'DGCA-Approved training program offering Small, Rotorcraft, VLOS Certification. Best in Class Flight Simulators & high quality, NPNT-Ready, Make in India Drones. Top-rated DGCA-approved Instructors offering 1-1 Flying Lessons & Individual attention.',
    location: 'Mumbai,chandigarh',
    mode: 'Hybrid',
    rating: 4.8,
    details: 'DGCA-Approved training program offering Small, Rotorcraft, VLOS Certification. Best in Class Flight Simulators & high quality, NPNT-Ready, Make in India Drones. Top-rated DGCA-approved Instructors offering 1-1 Flying Lessons & Individual attention.',
    date: '2024-06-15',
    has_image: true,
    image: '/images/training/t14.jpeg'
  }, {
    id: '9',
    heading: ' Drone Instructor Course - Small, Rotorcraft [DGCA CERTIFIED] Including 20 Hours Flying Completion',
    description: 'This is a 09-Day DGCA-authorised Train the Trainer Course for aspiring Drone professionals who wish to become DGCA-authorised Drone Instructors (Remote Pilot Instructors) on Small, Rotorcraft Drones. ',
    location: 'Mumbai',
    mode: 'Hybrid',
    rating: 4.8,
    details: 'This is a 09-Day DGCA-authorised Train the Trainer Course for aspiring Drone professionals who wish to become DGCA-authorised Drone Instructors (Remote Pilot Instructors) on Small, Rotorcraft Drones. ',
    date: '2024-06-15',
    has_image: true,
    image: '/images/agri/a4.png'
  }, {
    id: '10',
    heading: ' Remote Pilot Course - Medium, Rotorcraft [DGCA CERTIFIED]',
    description: 'DGCA-Approved training program offering Medium (upto 50kg), Rotorcraft, VLOS Certification. Best in Class Flight Simulators & high quality, NPNT-Ready, Make in India Drones. Top-rated DGCA-approved Instructors offering 1-1 Flying Lessons & Individual attention.',
    location: 'chandigarh',
    mode: 'Hybrid',
    rating: 4.8,
    details: 'DGCA-Approved training program offering Medium (upto 50kg), Rotorcraft, VLOS Certification. Best in Class Flight Simulators & high quality, NPNT-Ready, Make in India Drones. Top-rated DGCA-approved Instructors offering 1-1 Flying Lessons & Individual attention.',
    date: '2024-06-15',
    has_image: true,
    image: '/images/training/t16.jpeg'
  },


  {
    id: '1',
    heading: 'Mapping, Modeling & Surveying Course (RPTO)',
    description: 'The Drone Survey, Mapping & Modeling Course provides specialized training in using drones for precision surveying, accurate mapping, and detailed 3D modeling. Participants will learn to plan and execute drone surveys, process geospatial data, and create high-quality maps and models using industry-standard software. Ideal for professionals in construction, agriculture, and environmental monitoring, this course equips you with the skills to leverage drone technology for advanced spatial analysis and project planning',
    location: 'Mumbai',
    mode: 'Hybrid',
    rating: 4.8,
    details: 'This comprehensive course covers drone basics, FAA regulations, safety procedures, and hands-on flight training. You\'ll learn pre-flight checks, basic maneuvers, emergency procedures, and how to operate drones safely in various environments.',
    date: '2024-06-15',
    has_image: true,
    image: '/images/training/t13.png'
  },
  {
    id: '2',
    heading: 'Drone Manufacturing',
    description: 'The Drone Manufacturing Course is designed to provide in-depth knowledge and hands-on experience in designing, building, and testing drones. This course covers the entire manufacturing process, from initial concept and design to assembly and quality control, ensuring participants gain the skills needed to produce high-quality drones.',
    location: 'Mumbai',
    mode: 'Onsite',
    rating: 4.9,
    details: 'Intensive training program designed for aspiring commercial drone pilots. Covers Part 107 exam preparation, advanced flight techniques, aerial photography, mapping, inspection procedures, and business aspects of drone operations.',
    date: '2024-07-01',
    has_image: true,
    image: '/images/training/t1.jpg'
  },
  {
    id: '3',
    heading: 'Drone Repair & Maintenance',
    description: 'Thecourse focuses on diagnosing, repairing, and maintaining various types of drones. Participants will learn to troubleshoot common issues, perform routine maintenance, and replace faulty components to ensure optimal drone performance. The course includes hands-on workshops with real-world scenarios, enabling practical skill development. Ideal for both hobbyists and professionals, this course equips you with the expertise to keep your drones in top condition. Enroll now to become proficient in drone repair and maintenance, enhancing your capabilities and extending the lifespan of your equipment..',
    location: 'Mumbai',
    mode: 'Online',
    rating: 4.7,
    details: 'Learn professional aerial photography techniques, camera settings, composition, post-processing, and storytelling through aerial imagery. Includes hands-on projects and portfolio development.',
    date: '2024-06-30',
    has_image: true,
    image: '/images/training/t6.jpg'
  },
  {
    id: '4',
    heading: 'AI/ML For UAVs',
    description: 'The AI for Drones Course provides cutting-edge training on integrating artificial intelligence with drone technology. Participants will learn to develop and apply AI algorithms for autonomous navigation, object detection, and data analysis, enhancing drone capabilities. The course covers machine learning, computer vision, and real-time data processing, tailored for various drone applications. Perfect for tech enthusiasts and professionals, this course equips you with the skills to innovate and optimize drone operations using AI. Enroll now to lead the future of drone technology with AI expertise..',
    location: 'Mumbai',
    mode: 'Onsite',
    rating: 4.9,
    details: 'Professional training for first responders and emergency personnel. Covers thermal imaging, night operations, coordination with ground teams, legal considerations, and mission planning for SAR operations.',
    date: '2024-07-15',
    has_image: true,
    image: '/images/training/t11.png'
  },
  {
    id: '5',
    heading: 'Drone Aerial Photography',
    description: 'The Drone Aerial Photography Course offers comprehensive training in capturing stunning aerial images and videos using drones. Participants will learn essential techniques for planning, shooting, and editing aerial footage, utilizing industry-standard equipment and software. Ideal for photographers, videographers, and hobbyists. This course provides the skills needed to produce professional-quality aerial content for various applications, from real estate to filmmaking..',
    location: 'Mumbai',
    mode: 'Hybrid',
    rating: 4.6,
    details: 'Learn the exciting world of drone racing with FPV (First Person View) flying, racing drone setup, advanced maneuvers, racing strategies, and competition preparation.',
    date: '2024-08-01',
    has_image: true,
    image: '/images/training/t5.jpg'
  },
  {
    id: '6',
    heading: 'Drone Data Processing Capsule Course',
    description: 'This course covers the full data processing workflow, from data acquisition to advanced analysis techniques, enabling participants to turn raw drone data into actionable.It consists of online sessions, practical lab sessions, and project-based learning to ensure a comprehensive understanding of drone data processing..',
    location: 'Mumbai',
    mode: 'Onsite',
    rating: 4.8,
    details: 'Comprehensive training on agricultural drone applications including crop monitoring, precision spraying, field mapping, data analysis, and integration with farm management systems.',
    date: '2024-07-20',
    has_image: true,
    image: '/images/training/t12.png'
  },
  {
    id: '7',
    heading: 'Remote Pilot Certification',
    description: 'The Remote Pilot Certificate Course is designed to provide comprehensive training for individuals seeking to become certified remote pilots for small/medium class drones. This course covers all essential aspects of unmanned aircraft systems (UAS) operations, ensuring that participants gain the knowledge and skills required to operate drones safely and legally..',
    location: 'Mumbai',
    mode: 'Online',
    rating: 4.5,
    details: 'Learn drone electronics, motor systems, battery management, troubleshooting common issues, preventive maintenance, and basic repair techniques to keep your drones in optimal condition.',
    date: '2024-06-25',
    has_image: true,
    image: '/images/training/t7.jpeg'
  },{
    id: '11',
    heading: 'Agricultural Drone Spraying Training',
    description: 'Application Specific Training for RPC Holders in Agricutural Spraying',
    location: 'Mumbai',
    mode: 'Online',
    rating: 4.5,
    details: 'Application Specific Training for RPC Holders in Agricutural Spraying',
    date: '2024-06-25',
    has_image: true,
    image: '/images/agri/a3.png'
  },
  


];

const DroneTrainingUserPage = () => {
  // Add useNavigate hook for routing
  const navigate = useNavigate();
  
  // State management
  const [trainings, setTrainings] = useState([]);
  const [filteredTrainings, setFilteredTrainings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMode, setSelectedMode] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [activeTraining, setActiveTraining] = useState(null);
  const [sortBy, setSortBy] = useState('rating');
  const [sortOrder, setSortOrder] = useState('desc');
  
  // Load static data on component mount
  useEffect(() => {
    const loadStaticData = () => {
      setIsLoading(true);
      
      // Simulate loading delay
      setTimeout(() => {
        let sortedData = [...DUMMY_TRAININGS];
        
        // Apply sorting (removed price sorting since price is not displayed)
        sortedData.sort((a, b) => {
          let aValue, bValue;
          
          switch (sortBy) {
            case 'rating':
              aValue = a.rating;
              bValue = b.rating;
              break;
            default:
              return 0;
          }
          
          if (sortOrder === 'asc') {
            return aValue - bValue;
          } else {
            return bValue - aValue;
          }
        });
        
        setTrainings(sortedData);
        setFilteredTrainings(sortedData);
        setIsLoading(false);
      }, 1000);
    };
    
    loadStaticData();
  }, [sortBy, sortOrder]);

  // Apply filters and search
  useEffect(() => {
    let result = [...trainings];
    
    // Apply search
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(
        training => 
          training.heading.toLowerCase().includes(searchLower) ||
          training.description.toLowerCase().includes(searchLower) ||
          training.location.toLowerCase().includes(searchLower)
      );
    }
    
    // Apply mode filter
    if (selectedMode) {
      result = result.filter(training => training.mode === selectedMode);
    }
    
    // Apply rating filter
    if (selectedRating > 0) {
      result = result.filter(training => training.rating >= selectedRating);
    }
    
    // Apply location filter
    if (selectedLocation) {
      result = result.filter(training => 
        training.location.toLowerCase().includes(selectedLocation.toLowerCase())
      );
    }
    
    setFilteredTrainings(result);
  }, [searchTerm, selectedMode, selectedRating, selectedLocation, trainings]);

  // Handle enrollment
  const handleEnrollNow = (trainingId) => {
    navigate(`/enroll/${trainingId}`);
  };

  // Helper functions
  const getTrainingImageUrl = (training) => {
    // Use the static image path from the training data
    return training.image || `/images/training/t${training.id}.jpg`;
  };

  const getModeColor = (mode) => {
    switch (mode) {
      case 'Online': return 'bg-blue-100 text-blue-800';
      case 'Onsite': return 'bg-green-100 text-green-800';
      case 'Hybrid': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star} 
            className={`h-4 w-4 ${star <= Math.round(rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
          />
        ))}
        <span className="ml-1 text-yellow-600 font-medium">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gray-400">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <img 
            src="/images/drone/b3.jpg" 
            alt="Drone flying" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-blue-800 sm:text-5xl lg:text-6xl">
            Drone Training Courses
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl">
            Master the art of drone flight with our professional training programs. 
            Whether you're a beginner or looking to advance your skills, we have courses 
            for every level.
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full bg-white border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-gray-700 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                placeholder="Search by name, description, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button 
              className="flex items-center gap-2 bg-white hover:bg-gray-100 border border-gray-300 px-4 py-2 rounded-lg text-gray-700 shadow-sm transition-colors"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>
          
          {/* Filter Panel */}
          {showFilters && (
            <div className="bg-white rounded-lg p-6 mb-6 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-md border border-gray-200">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Type
                </label>
                <select
                  className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  value={selectedMode}
                  onChange={(e) => setSelectedMode(e.target.value)}
                >
                  <option value="">All Types</option>
                  <option value="Online">Online</option>
                  <option value="Onsite">Onsite</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Rating
                </label>
                <select
                  className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  value={selectedRating}
                  onChange={(e) => setSelectedRating(Number(e.target.value))}
                >
                  <option value="0">Any Rating</option>
                  <option value="3">3+ Stars</option>
                  <option value="4">4+ Stars</option>
                  <option value="4.5">4.5+ Stars</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  placeholder="Enter location..."
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                />
              </div>
              
              <div className="md:col-span-3 flex justify-end gap-4">
                <button
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium"
                  onClick={() => {
                    setSelectedMode('');
                    setSelectedRating(0);
                    setSelectedLocation('');
                    setSearchTerm('');
                  }}
                >
                  Clear All
                </button>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select
                    className="bg-white border border-gray-300 rounded-md py-1 px-2 text-gray-700 text-sm focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                    value={`${sortBy}-${sortOrder}`}
                    onChange={(e) => {
                      const [newSortBy, newSortOrder] = e.target.value.split('-');
                      setSortBy(newSortBy);
                      setSortOrder(newSortOrder);
                    }}
                  >
                    <option value="rating-desc">Highest Rated</option>
                    <option value="rating-asc">Lowest Rated</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center my-12">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}
        
        {/* Error Message */}
        {error && (
          <div className="my-12 p-6 bg-red-50 text-red-700 border border-red-200 rounded-lg shadow-sm">
            <p>{error}</p>
          </div>
        )}
        
        {/* No Results */}
        {!isLoading && !error && filteredTrainings.length === 0 && (
          <div className="my-12 text-center">
            <h3 className="text-xl font-medium text-gray-600">No training courses found</h3>
            <p className="mt-2 text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
        
        {/* Training Cards */}
        {!isLoading && !error && filteredTrainings.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrainings.map((training) => (
              <div 
                key={training.id} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-blue-200 transition-shadow border border-gray-200"
              >
                {/* Course Image */}
                <div className="h-48 relative">
                  <img 
                    src={getTrainingImageUrl(training)} 
                    alt={training.heading}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Mode Badge */}
                  <span className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-semibold ${getModeColor(training.mode)}`}>
                    {training.mode}
                  </span>
                </div>
                
                {/* Course Content */}
                <div className="p-6">
                  {/* Title and Rating */}
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{training.heading}</h3>
                    {renderStars(training.rating)}
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-2">{training.description}</p>
                  
                  {/* Course Details - Removed Price Section */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-700">
                      <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{training.location}</span>
                    </div>
                  </div>
                  
                  {/* Buttons */}
                  <div className="flex gap-3">
                    <button 
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors shadow-sm"
                      onClick={() => handleEnrollNow(training.id)}
                    >
                      Enroll Now
                    </button>
                    <button 
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors border border-gray-300 shadow-sm"
                      onClick={() => setActiveTraining(activeTraining === training.id ? null : training.id)}
                    >
                      Details
                    </button>
                  </div>
                  
                  {/* Expanded Details */}
                  {activeTraining === training.id && (
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <h4 className="font-medium text-gray-800 mb-2">Course Details</h4>
                      <p className="text-gray-600 mb-4">{training.details}</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center border border-gray-200">
                          <Clock className="h-5 w-5 text-blue-600 mb-1" />
                          <span className="text-sm text-gray-700">2-4 Weeks</span>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center border border-gray-200">
                          <Award className="h-5 w-5 text-blue-600 mb-1" />
                          <span className="text-sm text-gray-700">Certificate</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        
  
      </div>
    </div>
  );
};

export default DroneTrainingUserPage;