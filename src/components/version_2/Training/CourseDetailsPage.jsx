import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, MapPin, Award, CheckCircle, Star, ArrowLeft, User, Phone, MessageSquare } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

// Complete course data with detailed information for all courses
const courseDetails = {
  1: {
    title: "Remote Pilot Training – Small Rotorcraft [DGCA Certified]",
    duration: "5 to 8 Days",
    location: "Mumbai and Chandigarh",
    image: "/images/training/t14.jpeg",
    price: "₹45,000",
    rating: 4.8,
    students: 150,
    description: "DGCA-Approved training program offering Small, Rotorcraft, VLOS Certification. Best in Class Flight Simulators & high quality, NPNT-Ready, Make in India Drones. Top-rated DGCA-approved Instructors offering 1-1 Flying Lessons & Individual attention.",
    highlights: [
      "DGCA Certified Course",
      "Hands-on Flying Experience", 
      "Best in Class Flight Simulators",
      "NPNT-Ready Make in India Drones",
      "1-on-1 Flying Lessons",
      "Individual Attention from Instructors"
    ],
    curriculum: [
      "Drone Regulations & Legal Framework",
      "Flight Theory & Aerodynamics", 
      "Weather & Meteorology",
      "Navigation & Emergency Procedures",
      "Hands-on Simulator Training",
      "Practical Flight Training",
      "Safety Protocols & Risk Management",
      "DGCA Examination Preparation"
    ],
    prerequisites: [
      "Minimum 18 years of age",
      "Class 10th Pass Certificate",
      "Valid Government ID", 
      "Medical Fitness Certificate"
    ],
    certification: "DGCA Remote Pilot Certificate - Small Rotorcraft"
  },
  2: {
    title: "Remote Pilot Training – Medium Rotorcraft [DGCA Certified]",
    duration: "5 to 8 Days",
    location: "Chandigarh",
    image: "/images/training/t16.jpeg",
    price: "₹55,000",
    rating: 4.9,
    students: 95,
    description: "DGCA-Approved training program offering Medium (upto 50kg), Rotorcraft, VLOS Certification. Advanced training for professional drone operations with comprehensive practical experience.",
    highlights: [
      "DGCA Certified Medium Category",
      "Advanced Flight Operations",
      "Commercial Drone Applications", 
      "Professional Grade Equipment",
      "Industry Expert Instructors",
      "Job Placement Assistance"
    ],
    curriculum: [
      "Advanced Drone Regulations",
      "Medium Category Flight Operations",
      "Commercial Applications",
      "Advanced Navigation Systems",
      "Payload Management", 
      "Advanced Weather Analysis",
      "Commercial Flight Planning",
      "Professional Certification Exam"
    ],
    prerequisites: [
      "Minimum 18 years of age",
      "Class 12th Pass Certificate",
      "Valid Government ID",
      "Medical Fitness Certificate",
      "Basic drone knowledge preferred"
    ],
    certification: "DGCA Remote Pilot Certificate - Medium Rotorcraft"
  },
  3: {
    title: "20 Hours of Comprehensive Flight - Small Rotorcraft",
    duration: "15 Days", 
    location: "Mumbai and Chandigarh",
    image: "/images/training/t7.jpeg",
    price: "₹35,000",
    rating: 4.7,
    students: 120,
    description: "Intensive practical flight training program designed to provide comprehensive hands-on experience with small rotorcraft drones. Perfect for those seeking extensive flight practice.",
    highlights: [
      "20 Hours Practical Flight Training",
      "Small Rotorcraft Specialization",
      "Intensive Practice Sessions",
      "Real-world Flight Scenarios", 
      "Personal Flight Log Maintenance",
      "Advanced Maneuvering Techniques"
    ],
    curriculum: [
      "Basic Flight Operations",
      "Advanced Maneuvering",
      "Emergency Procedures Practice",
      "Precision Flying Techniques",
      "Real-world Scenarios",
      "Flight Log Documentation",
      "Performance Assessment",
      "Final Flight Evaluation"
    ],
    prerequisites: [
      "Valid DGCA Remote Pilot Certificate",
      "Basic drone operation knowledge",
      "Medical fitness for flying"
    ],
    certification: "20 Hours Flight Training Certificate"
  },
  4: {
    title: "20 Hours of Comprehensive Flight - Medium Rotorcraft",
    duration: "15 Days",
    location: "Chandigarh", 
    image: "/images/training/t1.jpg",
    price: "₹45,000",
    rating: 4.8,
    students: 85,
    description: "Advanced flight training for medium rotorcraft operations with comprehensive practical experience focusing on commercial applications and professional-grade operations.",
    highlights: [
      "20 Hours Advanced Flight Training",
      "Medium Rotorcraft Operations",
      "Commercial Flight Scenarios",
      "Professional Equipment Training",
      "Advanced Safety Protocols", 
      "Industry Standard Certification"
    ],
    curriculum: [
      "Medium Category Operations",
      "Advanced Flight Planning",
      "Payload Operations",
      "Emergency Response",
      "Commercial Applications",
      "Weather Analysis",
      "Maintenance Procedures",
      "Final Assessment"
    ],
    prerequisites: [
      "Valid DGCA Medium Category Certificate",
      "Advanced drone operation knowledge",
      "Medical fitness for flying"
    ],
    certification: "20 Hours Medium Flight Training Certificate"
  },
  5: {
    title: "Agriculture Specific Drone Training",
    duration: "15 Days",
    location: "Chandigarh",
    image: "/images/agri/a4.png",
    price: "₹40,000",
    rating: 4.6,
    students: 110,
    description: "Specialized training for agricultural drone applications including crop monitoring, precision spraying, and advanced farming techniques using cutting-edge drone technology.",
    highlights: [
      "Agricultural Applications Focus",
      "Crop Monitoring Techniques",
      "Precision Spraying Training",
      "Farm Management Integration",
      "Soil Analysis Methods",
      "Yield Optimization Strategies"
    ],
    curriculum: [
      "Agricultural Drone Basics",
      "Crop Health Assessment",
      "Spraying Techniques",
      "Data Collection Methods",
      "Farm Mapping",
      "Equipment Maintenance",
      "Regulatory Compliance",
      "Practical Field Training"
    ],
    prerequisites: [
      "Valid DGCA Remote Pilot Certificate",
      "Basic agricultural knowledge",
      "Physical fitness for field work"
    ],
    certification: "Agricultural Drone Specialist Certificate"
  },
  6: {
    title: "Drone Technician Training",
    duration: "3 months",
    location: "Mumbai",
    image: "/images/training/t6.jpg",
    price: "₹75,000",
    rating: 4.9,
    students: 65,
    description: "Comprehensive technical training for drone maintenance, repair, and assembly operations. Learn to diagnose, troubleshoot, and fix various drone systems and components.",
    highlights: [
      "Complete Technical Training",
      "Hands-on Repair Experience",
      "Assembly Techniques",
      "Diagnostic Skills",
      "Component Knowledge",
      "Industry Certification"
    ],
    curriculum: [
      "Drone Architecture",
      "Electronic Systems",
      "Motor & Propulsion",
      "Flight Controllers",
      "Sensor Technology",
      "Troubleshooting",
      "Repair Techniques",
      "Quality Control"
    ],
    prerequisites: [
      "Technical background preferred",
      "Basic electronics knowledge",
      "Manual dexterity skills"
    ],
    certification: "Certified Drone Technician"
  },
  7: {
    title: "FPV Drone Racing",
    duration: "15 Days",
    location: "Mumbai",
    image: "/images/training/t5.jpg",
    price: "₹30,000",
    rating: 4.5,
    students: 80,
    description: "High-speed FPV drone racing training with competitive racing techniques, equipment mastery, and professional racing strategies for tournament participation.",
    highlights: [
      "FPV Racing Techniques",
      "High-Speed Maneuvering",
      "Racing Equipment Setup",
      "Competition Preparation",
      "Safety Protocols",
      "Team Training"
    ],
    curriculum: [
      "FPV System Setup",
      "Racing Line Techniques",
      "Speed Control",
      "Obstacle Navigation",
      "Competition Rules",
      "Equipment Maintenance",
      "Practice Sessions",
      "Racing Tournaments"
    ],
    prerequisites: [
      "Basic drone flying experience",
      "Good hand-eye coordination",
      "Physical fitness"
    ],
    certification: "FPV Racing Pilot Certificate"
  },
  8: {
    title: "Aerial Cinematography",
    duration: "15 Days",
    location: "Mumbai",
    image: "/images/training/t11.png",
    price: "₹50,000",
    rating: 4.8,
    students: 95,
    description: "Professional aerial cinematography training covering advanced camera work, cinematic composition, lighting techniques, and post-production workflows for film and media industry.",
    highlights: [
      "Professional Camera Techniques",
      "Cinematic Composition",
      "Post-Production Skills",
      "Industry Equipment",
      "Portfolio Development",
      "Client Management"
    ],
    curriculum: [
      "Camera Setup & Operation",
      "Cinematic Flight Patterns",
      "Lighting Techniques",
      "Video Editing",
      "Color Grading",
      "Client Briefing",
      "Portfolio Creation",
      "Industry Standards"
    ],
    prerequisites: [
      "Valid DGCA Remote Pilot Certificate",
      "Basic photography knowledge",
      "Creative aptitude"
    ],
    certification: "Aerial Cinematography Specialist"
  },
  9: {
    title: "GIS Survey and Mapping",
    duration: "15 Days",
    location: "Mumbai",
    image: "/images/training/t13.png",
    price: "₹60,000",
    rating: 4.7,
    students: 70,
    description: "Advanced GIS surveying and mapping techniques using drone technology for precision data collection, analysis, and professional mapping applications across various industries.",
    highlights: [
      "GIS Data Collection",
      "Precision Mapping",
      "Survey Techniques",
      "Data Processing",
      "Software Training",
      "Industry Applications"
    ],
    curriculum: [
      "GIS Fundamentals",
      "Survey Planning",
      "Data Collection Methods",
      "Software Operation",
      "Map Creation",
      "Data Analysis",
      "Quality Control",
      "Project Management"
    ],
    prerequisites: [
      "Valid DGCA Remote Pilot Certificate",
      "Basic GIS knowledge",
      "Computer literacy"
    ],
    certification: "GIS Survey Specialist Certificate"
  },
  10: {
    title: "Drone Instructor Course - Small, Rotorcraft [DGCA CERTIFIED]",
    duration: "9 Days",
    location: "Mumbai",
    image: "/images/agri/a3.png",
    price: "₹85,000",
    rating: 4.9,
    students: 45,
    description: "DGCA-authorized train-the-trainer program for aspiring drone instructors specializing in small rotorcraft training. Comprehensive instructor development course.",
    highlights: [
      "DGCA Instructor Authorization",
      "Training Methodology",
      "Assessment Techniques",
      "Curriculum Development",
      "Safety Standards",
      "Professional Development"
    ],
    curriculum: [
      "Instructor Fundamentals",
      "Training Methodology",
      "Student Assessment",
      "Curriculum Design",
      "Safety Management",
      "Regulatory Compliance",
      "Communication Skills",
      "Certification Process"
    ],
    prerequisites: [
      "Valid DGCA Remote Pilot Certificate",
      "Minimum 2 years flying experience",
      "Teaching aptitude"
    ],
    certification: "DGCA Authorized Drone Instructor"
  },
  11: {
    title: "AI/ML For UAVs",
    duration: "20 Days",
    location: "Mumbai",
    image: "/images/training/t12.png",
    price: "₹70,000",
    rating: 4.8,
    students: 60,
    description: "Cutting-edge training on integrating artificial intelligence and machine learning with drone technology for autonomous operations, computer vision, and advanced data analytics.",
    highlights: [
      "AI Algorithm Development",
      "Machine Learning Integration",
      "Autonomous Navigation",
      "Computer Vision",
      "Data Analytics",
      "Future Technologies"
    ],
    curriculum: [
      "AI Fundamentals",
      "Machine Learning Basics",
      "Computer Vision",
      "Neural Networks",
      "Autonomous Systems",
      "Data Processing",
      "Algorithm Implementation",
      "Project Development"
    ],
    prerequisites: [
      "Programming knowledge",
      "Valid DGCA Certificate",
      "Technical background"
    ],
    certification: "AI/ML Drone Specialist"
  },
  12: {
    title: "Mapping, Modeling & Surveying Course (RPTO)",
    duration: "15 Days",
    location: "Mumbai",
    image: "/images/training/t13.png",
    price: "₹65,000",
    rating: 4.7,
    students: 75,
    description: "Comprehensive training in drone-based mapping, 3D modeling, and surveying for professional applications including construction, mining, and infrastructure development.",
    highlights: [
      "3D Modeling Techniques",
      "Survey-Grade Accuracy",
      "Professional Software",
      "Industry Standards",
      "Project Management",
      "Quality Assurance"
    ],
    curriculum: [
      "Survey Fundamentals",
      "3D Modeling",
      "Photogrammetry",
      "Data Processing",
      "Software Training",
      "Accuracy Assessment",
      "Report Generation",
      "Client Delivery"
    ],
    prerequisites: [
      "Valid DGCA Remote Pilot Certificate",
      "Basic surveying knowledge",
      "Computer proficiency"
    ],
    certification: "Professional Mapping & Surveying Certificate"
  }
};

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get course details based on courseId from URL
  const course = courseDetails[courseId] || courseDetails['1'];

  // Scroll to top when component mounts or courseId changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [courseId]);

  // Handle back button
  const handleBack = () => {
    navigate('/training');
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle quick contact form submission
  const handleSubmit = async () => {
    // Basic validation
    if (!formData.name.trim() || !formData.contact.trim()) {
      alert('Please fill in all required fields');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Quick Contact Data:', { 
        course: course.title, 
        courseId,
        ...formData 
      });
      
      setFormSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormSubmitted(false);
        setShowEnrollmentForm(false);
        setFormData({ name: '', contact: '', message: '' });
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render stars for rating
  const renderStars = (rating) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star} 
            className={`h-5 w-5 ${star <= Math.round(rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
          />
        ))}
        <span className="ml-2 text-yellow-600 font-medium">{rating}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Import Raleway font */}
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
      {/* Background effects */}
      <div className="absolute w-96 h-80 left-0 top-80 bg-blue-600 rounded-full blur-[150px] opacity-20" />
      <div className="absolute w-96 h-80 right-0 top-60 bg-purple-600 rounded-full blur-[150px] opacity-15" />
      
      <div className="relative z-10">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-zinc-900/80 to-zinc-800/60 backdrop-blur-md border-b border-zinc-700/30">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <button 
              onClick={handleBack}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-6 transition-colors"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              <ArrowLeft size={20} />
              Back to Courses
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 
                  className="text-3xl md:text-4xl font-bold text-[#d5dbe6] mb-4"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  {course.title}
                </h1>
                
                <div className="flex items-center gap-6 mb-4">
                  {renderStars(course.rating)}
                  <span className="text-white/70" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    ({course.students} students)
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-blue-400">
                    <Clock size={18} />
                    <span style={{ fontFamily: 'Raleway, sans-serif' }}>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-400">
                    <MapPin size={18} />
                    <span style={{ fontFamily: 'Raleway, sans-serif' }}>{course.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400">
                    <Award size={18} />
                    <span style={{ fontFamily: 'Raleway, sans-serif' }}>Certified</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  {/* <span 
                    className="text-3xl font-bold text-green-400"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    {course.price}
                  </span> */}
                  
                  <button
                    onClick={() => setShowEnrollmentForm(true)}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1436262513933-a0b06755c784?w=400&h=300&fit=crop&crop=center";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Course Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Course Description */}
              <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 backdrop-blur-md rounded-2xl p-8 border border-zinc-700/30">
                <h2 
                  className="text-2xl font-bold text-[#d5dbe6] mb-4"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  Course Description
                </h2>
                <p 
                  className="text-white/80 leading-relaxed"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  {course.description}
                </p>
              </div>

              {/* Course Highlights */}
              <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 backdrop-blur-md rounded-2xl p-8 border border-zinc-700/30">
                <h2 
                  className="text-2xl font-bold text-[#d5dbe6] mb-6"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  Course Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                      <span 
                        className="text-white/80"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                      >
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 backdrop-blur-md rounded-2xl p-8 border border-zinc-700/30">
                <h2 
                  className="text-2xl font-bold text-[#d5dbe6] mb-6"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  Curriculum
                </h2>
                <div className="space-y-3">
                  {course.curriculum.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="bg-blue-500/20 text-blue-400 rounded-full px-3 py-1 text-sm font-medium flex-shrink-0">
                        {index + 1}
                      </span>
                      <span 
                        className="text-white/80"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Prerequisites & Certification */}
            <div className="space-y-8">
              {/* Prerequisites */}
              <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 backdrop-blur-md rounded-2xl p-6 border border-zinc-700/30">
                <h3 
                  className="text-xl font-bold text-[#d5dbe6] mb-4"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  Prerequisites
                </h3>
                <div className="space-y-3">
                  {course.prerequisites.map((req, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-blue-400 flex-shrink-0 mt-0.5" size={16} />
                      <span 
                        className="text-white/80 text-sm"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                      >
                        {req}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certification */}
              <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 backdrop-blur-md rounded-2xl p-6 border border-zinc-700/30">
                <h3 
                  className="text-xl font-bold text-[#d5dbe6] mb-4"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  Certification
                </h3>
                <div className="flex items-center gap-3 mb-3">
                  <Award className="text-yellow-500" size={24} />
                  <span 
                    className="text-white/80 font-medium"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    {course.certification}
                  </span>
                </div>
                <p 
                  className="text-white/60 text-sm"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  Upon successful completion, you will receive an official certification.
                </p>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-2xl p-6 border border-blue-500/20">
                <h3 
                  className="text-xl font-bold text-[#d5dbe6] mb-4"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  Interested in this course?
                </h3>
                <p 
                  className="text-white/80 text-sm mb-4"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  Contact us for detailed information and enrollment assistance.
                </p>
                <button
                  onClick={() => setShowEnrollmentForm(true)}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact Form Modal */}
      {showEnrollmentForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-md rounded-2xl p-8 max-w-md w-full border border-zinc-700/30 shadow-2xl">
            {!formSubmitted ? (
              <>
                <h3 
                  className="text-2xl font-bold text-[#d5dbe6] mb-6 text-center"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  Contact Us
                </h3>
                <p 
                  className="text-white/70 text-sm text-center mb-6"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  Get detailed information about this course and enrollment process
                </p>
                
                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label 
                      className="block text-white/80 text-sm font-medium mb-2"
                      style={{ fontFamily: 'Raleway, sans-serif' }}
                    >
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full bg-zinc-800/50 border border-zinc-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
                        placeholder="Enter your full name"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                      />
                    </div>
                  </div>

                  {/* Contact Field */}
                  <div>
                    <label 
                      className="block text-white/80 text-sm font-medium mb-2"
                      style={{ fontFamily: 'Raleway, sans-serif' }}
                    >
                      Contact Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="tel"
                        name="contact"
                        value={formData.contact}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full bg-zinc-800/50 border border-zinc-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
                        placeholder="Enter your contact number"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label 
                      className="block text-white/80 text-sm font-medium mb-2"
                      style={{ fontFamily: 'Raleway, sans-serif' }}
                    >
                      Message (Optional)
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        rows="4"
                        className="w-full bg-zinc-800/50 border border-zinc-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none disabled:opacity-50"
                        placeholder="Any specific questions about this course..."
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                      />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <button
                      onClick={() => setShowEnrollmentForm(false)}
                      disabled={isSubmitting}
                      className="flex-1 bg-zinc-700 hover:bg-zinc-600 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ fontFamily: 'Raleway, sans-serif' }}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                      style={{ fontFamily: 'Raleway, sans-serif' }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        'Submit'
                      )}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center">
                <CheckCircle className="text-green-400 mx-auto mb-4" size={48} />
                <h3 
                  className="text-2xl font-bold text-[#d5dbe6] mb-4"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  Contact Request Submitted!
                </h3>
                <p 
                  className="text-white/80"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  Thank you for your interest. Our team will contact you within 24 hours with detailed course information and enrollment assistance.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetailsPage;