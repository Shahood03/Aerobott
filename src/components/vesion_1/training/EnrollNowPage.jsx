// import React, { useState, useEffect } from 'react';
// import { ArrowLeft, Calendar, MapPin, Clock, Award, User, DollarSign, ShoppingCart, CreditCard, Check, Star } from 'lucide-react';
// import { useParams, useNavigate } from 'react-router-dom';

// const EnrollNowPage = () => {
//   const { trainingId } = useParams();
//   const navigate = useNavigate();
  
//   // State management
//   const [training, setTraining] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [availableDates, setAvailableDates] = useState([]);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const baseurl = process.env.REACT_APP_API_URL;
  
//   // Fetch training details
//   useEffect(() => {
//     const fetchTrainingDetails = async () => {
//       try {
//         setIsLoading(true);
//         setError(null);
        
//         const response = await fetch(`${baseurl}/api/training/${trainingId}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch training details');
//         }
        
//         const data = await response.json();
        
//         // Transform data
//         const transformedData = {
//           id: data._id,
//           title: data.title,
//           description: data.description,
//           location: data.location,
//           mode: data.instructor, // Backend stores 'mode' as 'instructor'
//           price: parseFloat(data.price),
//           rating: parseFloat(data.rating),
//           details: data.details,
//           date: data.date,
//           hasImage: !!data.image_filename,
//           requirements: [
//             "Valid ID/Passport",
//             "Basic computer skills",
//             "Suitable for ages 16+",
//             "No prior experience required"
//           ],
//           includes: [
//             "Professional drone equipment",
//             "Course materials and handouts",
//             "Certificate upon completion",
//             "Access to online resources"
//           ]
//         };
        
//         setTraining(transformedData);
        
//         // Generate available dates (in a real app, this would come from the API)
//         const today = new Date();
//         const dates = [];
//         for (let i = 7; i <= 60; i += 7) {
//           const date = new Date();
//           date.setDate(today.getDate() + i);
//           dates.push(date);
//         }
//         setAvailableDates(dates);
//         setSelectedDate(dates[0]);
        
//       } catch (err) {
//         console.error("Error fetching training details:", err);
//         setError('Failed to load training details. Please try again later.');
//       } finally {
//         setIsLoading(false);
//       }
//     };
    
//     if (trainingId) {
//       fetchTrainingDetails();
//     }
//   }, [trainingId]);

//   // Get image URL
//   const getTrainingImageUrl = () => {
//     return `${baseurl}/api/training/image/${trainingId}`;
//   };

//   // Format date
//   const formatDate = (date) => {
//     return date.toLocaleDateString('en-US', {
//       weekday: 'short',
//       month: 'short', 
//       day: 'numeric',
//       year: 'numeric'
//     });
//   };

//   // Handle add to cart
//   const handleAddToCart = () => {
//     // In a real app, this would dispatch to a cart context/redux store
//     console.log("Added to cart:", {
//       trainingId,
//       quantity,
//       selectedDate: selectedDate ? formatDate(selectedDate) : null,
//       price: training.price * quantity
//     });
    
//     // Show success message
//     setShowSuccessMessage(true);
//     setTimeout(() => setShowSuccessMessage(false), 3000);
//   };

//   // Handle buy now
//   const handleBuyNow = () => {
//     // In a real app, this would redirect to checkout with the item pre-added
//     console.log("Proceeding to checkout:", {
//       trainingId,
//       quantity,
//       selectedDate: selectedDate ? formatDate(selectedDate) : null,
//       price: training.price * quantity
//     });
    
//     // For demo purposes, just show success message
//     setShowSuccessMessage(true);
//     setTimeout(() => setShowSuccessMessage(false), 3000);
//   };

//   // Generate star rating display
//   const renderStars = (rating) => {
//     return (
//       <div className="flex">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <Star 
//             key={star} 
//             className={`h-5 w-5 ${star <= Math.round(rating) ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} 
//           />
//         ))}
//         <span className="ml-1 text-amber-500 font-medium">{rating.toFixed(1)}</span>
//       </div>
//     );
//   };

//   // Handle quantity change
//   const handleQuantityChange = (amount) => {
//     const newQuantity = quantity + amount;
//     if (newQuantity >= 1 && newQuantity <= 5) {
//       setQuantity(newQuantity);
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex justify-center items-center">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
//       </div>
//     );
//   }

//   if (error || !training) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
//         <div className="bg-red-50 text-red-800 p-6 rounded-lg max-w-md text-center shadow-lg">
//           <h2 className="text-xl font-bold mb-2">Error</h2>
//           <p>{error || "Failed to load training details"}</p>
//           <button 
//             className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white"
//             onClick={() => navigate(-1)}
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800 pb-16">
//       {/* Success Message */}
//       {showSuccessMessage && (
//         <div className="fixed top-4 right-4 bg-green-100 text-green-800 px-4 py-3 rounded-lg shadow-lg z-50 flex items-center border border-green-200">
//           <Check className="h-5 w-5 mr-2 text-green-600" />
//           <span>Successfully added to cart!</span>
//         </div>
//       )}
      
//       {/* Header */}
//       <div className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
//           <button 
//             className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
//             onClick={() => navigate(-1)}
//           >
//             <ArrowLeft className="h-5 w-5 mr-2" />
//             Back to Courses
//           </button>
//         </div>
//       </div>
      
//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
//           {/* Left Column - Course Details */}
//           <div className="lg:col-span-2">
//             {/* Course Image */}
//             <div className="rounded-xl overflow-hidden h-64 sm:h-96 mb-8 shadow-lg">
//               {training.hasImage ? (
//                 <img 
//                   src={getTrainingImageUrl()} 
//                   alt={training.title}
//                   className="w-full h-full object-cover"
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = "/api/placeholder/800/600?text=Drone+Training";
//                   }}
//                 />
//               ) : (
//                 <img 
//                   src="/api/placeholder/800/600?text=Drone+Training" 
//                   alt={training.title}
//                   className="w-full h-full object-cover"
//                 />
//               )}
//             </div>
            
//             {/* Course Info */}
//             <div className="mb-8">
//               <div className="flex items-center justify-between mb-4">
//                 <h1 className="text-3xl font-bold text-gray-900">{training.title}</h1>
//                 {renderStars(training.rating)}
//               </div>
              
//               <div className="flex flex-wrap gap-4 mb-6">
//                 <div className="flex items-center text-blue-600">
//                   <MapPin className="h-5 w-5 mr-2" />
//                   <span>{training.location}</span>
//                 </div>
//                 <div className="flex items-center text-blue-600">
//                   <User className="h-5 w-5 mr-2" />
//                   <span>{training.mode}</span>
//                 </div>
//                 <div className="flex items-center text-blue-600">
//                   <Calendar className="h-5 w-5 mr-2" />
//                   <span>Available Dates Below</span>
//                 </div>
//               </div>
              
//               <p className="text-gray-700 mb-6">{training.description}</p>
//             </div>
            
//             {/* Course Details Tabs */}
//             <div className="bg-white rounded-xl p-6 mb-8 shadow-lg border border-gray-200">
//               <h2 className="text-xl font-bold text-gray-900 mb-4">Course Details</h2>
//               <p className="text-gray-700 mb-6">{training.details}</p>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {/* What's Included */}
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Included</h3>
//                   <ul className="space-y-2">
//                     {training.includes.map((item, index) => (
//                       <li key={index} className="flex items-start">
//                         <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
//                         <span className="text-gray-700">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
                
//                 {/* Requirements */}
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h3>
//                   <ul className="space-y-2">
//                     {training.requirements.map((item, index) => (
//                       <li key={index} className="flex items-start">
//                         <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
//                         <span className="text-gray-700">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
              
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
//                 <div className="bg-blue-50 p-4 rounded-lg flex flex-col items-center text-center border border-blue-100">
//                   <Clock className="h-6 w-6 text-blue-600 mb-2" />
//                   <span className="text-sm text-gray-700">2-4 Weeks</span>
//                 </div>
//                 <div className="bg-blue-50 p-4 rounded-lg flex flex-col items-center text-center border border-blue-100">
//                   <Award className="h-6 w-6 text-blue-600 mb-2" />
//                   <span className="text-sm text-gray-700">Certificate</span>
//                 </div>
//                 <div className="bg-blue-50 p-4 rounded-lg flex flex-col items-center text-center border border-blue-100">
//                   <User className="h-6 w-6 text-blue-600 mb-2" />
//                   <span className="text-sm text-gray-700">Max 12 Students</span>
//                 </div>
//                 <div className="bg-blue-50 p-4 rounded-lg flex flex-col items-center text-center border border-blue-100">
//                   <MapPin className="h-6 w-6 text-blue-600 mb-2" />
//                   <span className="text-sm text-gray-700">{training.mode} Formats</span>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Right Column - Enrollment Section */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-xl p-6 sticky top-8 shadow-lg border border-gray-200">
//               <h2 className="text-xl font-bold text-gray-900 mb-4">Enrollment Details</h2>
              
//               {/* Price */}
//               <div className="flex items-center justify-between mb-6">
//                 <span className="text-gray-700">Price:</span>
//                 <div className="flex items-center">
//                   <DollarSign className="h-5 w-5 text-blue-600" />
//                   <span className="text-2xl font-bold text-gray-900">{training.price.toFixed(2)}</span>
//                 </div>
//               </div>
              
//               {/* Quantity Selector */}
//               <div className="mb-6">
//                 <label className="block text-gray-700 mb-2">Number of Students:</label>
//                 <div className="flex items-center">
//                   <button 
//                     className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-l-lg border border-gray-300"
//                     onClick={() => handleQuantityChange(-1)}
//                     disabled={quantity <= 1}
//                   >
//                     -
//                   </button>
//                   <span className="bg-gray-50 text-gray-800 px-4 py-1 border-y border-gray-300">{quantity}</span>
//                   <button 
//                     className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-r-lg border border-gray-300"
//                     onClick={() => handleQuantityChange(1)}
//                     disabled={quantity >= 5}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
              
//               {/* Date Selector */}
//               <div className="mb-6">
//                 <label className="block text-gray-700 mb-2">Select Start Date:</label>
//                 <div className="grid grid-cols-2 gap-2">
//                   {availableDates.slice(0, 4).map((date, index) => (
//                     <button
//                       key={index}
//                       className={`text-sm p-2 rounded-lg transition-colors ${
//                         selectedDate && selectedDate.getTime() === date.getTime()
//                           ? 'bg-blue-600 text-white'
//                           : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300'
//                       }`}
//                       onClick={() => setSelectedDate(date)}
//                     >
//                       {formatDate(date)}
//                     </button>
//                   ))}
//                 </div>
//               </div>
              
//               {/* Total */}
//               <div className="flex items-center justify-between mb-6 py-3 border-y border-gray-200">
//                 <span className="text-gray-700">Total:</span>
//                 <div className="flex items-center">
//                   <DollarSign className="h-5 w-5 text-blue-600" />
//                   <span className="text-2xl font-bold text-gray-900">
//                     {(training.price * quantity).toFixed(2)}
//                   </span>
//                 </div>
//               </div>
              
//               {/* Action Buttons */}
//               <div className="space-y-3">
//                 <button 
//                   className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex justify-center items-center shadow-md"
//                   onClick={handleBuyNow}
//                 >
//                   <CreditCard className="h-5 w-5 mr-2" />
//                   Buy Now
//                 </button>
                
//                 <button 
//                   className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors flex justify-center items-center border border-gray-300"
//                   onClick={handleAddToCart}
//                 >
//                   <ShoppingCart className="h-5 w-5 mr-2" />
//                   Add to Cart
//                 </button>
//               </div>
              
//               {/* Additional Info */}
//               <div className="mt-6 text-sm text-gray-600">
//                 <p className="flex items-start mb-2">
//                   <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
//                   Free cancellation up to 7 days before start date
//                 </p>
//                 <p className="flex items-start">
//                   <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
//                   Group discounts available for 3+ students
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Related Courses */}
//         <div className="mt-16">
//           <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Courses You Might Like</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {/* These would be dynamically populated in a real app */}
//             {[1, 2, 3].map((item) => (
//               <div key={item} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
//                 <div className="h-48 bg-gray-100">
//                   <img 
//                     src={`/api/placeholder/400/320?text=Related+Course+${item}`}
//                     alt={`Related Course ${item}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-4">
//                   <h3 className="text-lg font-bold text-gray-900 mb-2">Advanced Drone Photography</h3>
//                   <div className="flex justify-between items-center">
//                     <span className="text-blue-600 font-medium">$199.99</span>
//                     <div className="flex">
//                       {[1, 2, 3, 4, 5].map((star) => (
//                         <Star 
//                           key={star} 
//                           className={`h-4 w-4 ${star <= 4 ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} 
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EnrollNowPage;



//dummy info
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, MapPin, Clock, Award, User, ShoppingCart, CreditCard, Check, Star } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

// Static dummy data - matches the data from DroneTrainingUserPage
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
    image: '/images/training/t14.avif'
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
    image: '/images/training/t15.avif'
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
    image: '/images/training/t16.avif'
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
    image: '/images/training/t13.avif'
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
    image: '/images/training/t1.avif'
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
    image: '/images/training/t6.avif'
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
    image: '/images/training/t11.avif'
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
    image: '/images/training/t5.avif'
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
    image: '/images/training/t12.avif'
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
    image: '/images/training/t7.avif'
  },
  {
    id: '11',
    heading: 'Agricultural Drone Spraying Training',
    description: 'Application Specific Training for RPC Holders in Agricutural Spraying',
    location: 'Mumbai',
    mode: 'Online',
    rating: 4.5,
    details: 'Application Specific Training for RPC Holders in Agricutural Spraying',
    date: '2024-06-25',
    has_image: true,
    image: '/images/agri/a3.avif'
  }
];

// Related courses data
const RELATED_COURSES = [
  {
    id: 'r1',
    heading: 'Advanced Drone Photography',
    rating: 4.5,
    image: '/images/training/r1.avif'
  },
  {
    id: 'r2',
    heading: 'Drone Cinematography Pro',
    rating: 4.8,
    image: '/images/training/r2.avif'
  },
  {
    id: 'r3',
    heading: 'Industrial Inspection Drones',
    rating: 4.7,
    image: '/images/training/r3.avif'
  }
];

const EnrollNowPage = () => {
  const { trainingId } = useParams();
  const navigate = useNavigate();
  
  // State management
  const [training, setTraining] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [availableDates, setAvailableDates] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  // Load static training data
  useEffect(() => {
    const loadTrainingDetails = () => {
      setIsLoading(true);
      setError(null);
      
      // Simulate loading delay
      setTimeout(() => {
        // Find training by ID
        const foundTraining = DUMMY_TRAININGS.find(t => t.id === trainingId);
        
        if (foundTraining) {
          setTraining(foundTraining);
          
          // Generate available dates (next 8 weeks, every week)
          const today = new Date();
          const dates = [];
          for (let i = 7; i <= 60; i += 7) {
            const date = new Date();
            date.setDate(today.getDate() + i);
            dates.push(date);
          }
          setAvailableDates(dates);
          
          setIsLoading(false);
        } else {
          setError('Training course not found');
          setIsLoading(false);
        }
      }, 1000);
    };
    
    if (trainingId) {
      loadTrainingDetails();
    }
  }, [trainingId]);

  // Get image URL - now uses static paths from training data
  const getTrainingImageUrl = (training) => {
    return training.image || `/images/training/t${training.id}.avif`;
  };

  // Get mode color styling
  const getModeColor = (mode) => {
    switch (mode) {
      case 'Online': return 'bg-blue-100 text-blue-800';
      case 'Onsite': return 'bg-green-100 text-green-800';
      case 'Hybrid': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Format date
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Add state for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Handle enrollment form submission
  const handleEnrollNow = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Get form data
      const formData = new FormData(e.target.form || e.target);
      const enrollmentData = {
        trainingId,
        trainingTitle: training.heading,
        name: formData.get('name'),
        contact: formData.get('contact'),
        message: formData.get('message')
      };
      
      // Validate required fields
      if (!enrollmentData.name || !enrollmentData.contact) {
        setSubmitError('Please fill in all required fields');
        setIsSubmitting(false);
        return;
      }
      
      // Submit to backend
      const response = await fetch('https://aerocamp-backend-1081453250479.us-central1.run.app/api/enrollment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(enrollmentData)
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Show success message
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 5000);
        
        // Reset form
        e.target.reset();
        
        console.log("Enrollment submitted successfully:", result.enrollmentId);
      } else {
        setSubmitError(result.message || 'Failed to submit enrollment. Please try again.');
      }
      
    } catch (error) {
      console.error('Error submitting enrollment:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate star rating display
  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star} 
            className={`h-5 w-5 ${star <= Math.round(rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
          />
        ))}
        <span className="ml-1 text-yellow-600 font-medium">{rating.toFixed(1)}</span>
      </div>
    );
  };

  // Handle related course click
  const handleRelatedCourseClick = (courseId) => {
    console.log(`Navigating to course: ${courseId}`);
    // In a real app: navigate(`/enroll/${courseId}`);
    alert(`Would navigate to course: ${courseId}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !training) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
        <div className="bg-red-50 text-red-700 p-6 rounded-lg max-w-md text-center shadow-lg border border-red-200">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error || "Failed to load training details"}</p>
          <button 
            className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white transition-colors shadow-sm"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pb-16">
      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-4 right-4 bg-green-100 text-green-800 px-6 py-4 rounded-lg shadow-lg z-50 flex items-center border border-green-200 max-w-md">
          <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" />
          <span>Enrollment request submitted successfully! We will contact you within 24 hours.</span>
        </div>
      )}
      
      {/* Error Message */}
      {submitError && (
        <div className="fixed top-4 right-4 bg-red-100 text-red-800 px-6 py-4 rounded-lg shadow-lg z-50 flex items-center border border-red-200 max-w-md">
          <span className="text-red-600 mr-2">⚠</span>
          <span>{submitError}</span>
        </div>
      )}
      
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <button 
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Courses
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Course Details */}
          <div className="lg:col-span-2">
            {/* Course Image */}
            <div className="rounded-xl overflow-hidden h-64 sm:h-96 mb-8 shadow-lg border border-gray-200 relative">
              <img 
                src={getTrainingImageUrl(training)} 
                alt={training.heading}
                className="w-full h-full object-cover"
              />
              
              {/* Mode Badge */}
              <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${getModeColor(training.mode)} shadow-sm`}>
                {training.mode}
              </span>
            </div>
            
            {/* Course Info */}
            <div className="mb-8">
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-800">{training.heading}</h1>
                <div className="ml-4">
                  {renderStars(training.rating)}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-blue-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{training.location}</span>
                </div>
                <div className="flex items-center text-blue-600">
                  <User className="h-4 w-4 mr-2" />
                  <span>{training.mode}</span>
                </div>
                <div className="flex items-center text-blue-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Available Dates Below</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 line-clamp-3">{training.description}</p>
            </div>
            
            {/* Course Details Section */}
            <div className="bg-white rounded-xl p-6 mb-8 shadow-lg border border-gray-200">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Course Details</h2>
              <p className="text-gray-600 mb-6">{training.details}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center border border-gray-200">
                  <Clock className="h-5 w-5 text-blue-600 mb-1" />
                  <span className="text-sm text-gray-700">2-4 Weeks</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center border border-gray-200">
                  <Award className="h-5 w-5 text-blue-600 mb-1" />
                  <span className="text-sm text-gray-700">Certificate</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center border border-gray-200">
                  <User className="h-5 w-5 text-blue-600 mb-1" />
                  <span className="text-sm text-gray-700">Max 12 Students</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center border border-gray-200">
                  <MapPin className="h-5 w-5 text-blue-600 mb-1" />
                  <span className="text-sm text-gray-700">{training.mode} Format</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Enrollment Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 sticky top-8 shadow-lg border border-gray-200">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Enrollment Form</h2>
              
              {/* Enrollment Form */}
              <form className="space-y-4" onSubmit={handleEnrollNow}>
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Contact Number Field */}
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="+91 12345 67890"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 resize-none bg-white text-gray-700 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Tell us about your experience level, specific interests, or any questions you have about this course..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors flex justify-center items-center shadow-sm mt-6"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <User className="h-5 w-5 mr-2" />
                      Submit Enrollment Request
                    </>
                  )}
                </button>
              </form>
              
              {/* Additional Info */}
              <div className="mt-6 pt-4 border-t border-gray-200 text-sm text-gray-600">
                <p className="flex items-start mb-2">
                  <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  We'll contact you within 24 hours
                </p>
                <p className="flex items-start">
                  <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  Free consultation to discuss your training needs
                </p>
              </div>
            </div>
          </div>
        </div>
        
      
      </div>
    </div>
  );
};

export default EnrollNowPage;