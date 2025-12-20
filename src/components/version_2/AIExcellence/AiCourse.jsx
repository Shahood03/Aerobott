import React from "react";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Drone Manufacturing and Assembly",
    duration: "2 Months",
    location: "Mumbai and Chandigarh",
    image: "/images/AICOE/AI5.avif",
    path: "/AIExcellence/drone-manufacturing-and-assembly"
  },
  {
    id: 2,
    title: "AL/ML for Drone Applications",
    duration: "2 Months",
    location: "Mumbai and Chandigarh",
    image: "/images/AICOE/AI8.avif",
    path: "/AIExcellence/aiml-for-drone-applications"
  },
  {
    id: 3,
    title: "Geographic Information System (GIS)",
    duration: "2 Months",
    location: "Mumbai and Chandigarh",
    image: "/images/AICOE/AI6.avif",
    path: "/AIExcellence/geographic-information-system"
  },
  {
    id: 4,
    title: "Meteorology",
    duration: "2 Months",
    location: "Mumbai and Chandigarh",
     image: "/images/AICOE/AI3.avif",
    path: "/AIExcellence/meteorology"
  },
  // {
  //   id: 5,
  //   title: "Data Science",
  //   duration: "2 Months",
  //   location: "Mumbai and Chandigarh",
  //   image: "/images/AICOE/AI2.avif",
  //   path: "/AIExcellence/data-science"
  // },
  // {
  //   id: 6,
  //   title: "Cyber Security",
  //   duration: "2 Months",
  //   location: "Mumbai and Chandigarh",
  //   image: "/images/AICOE/AI1.avif",
  //   path: "/AIExcellence/cyber-security"
  // },
  // {
  //   id: 7,
  //   title: "AI and ML",
  //   duration: "2 Months",
  //   location: "Mumbai and Chandigarh",
  //   image: "/images/AICOE/AI7.avif",
  //   path: "/AIExcellence/ai-and-ml"
  // }
];

function AlExcellence(){
  const navigate = useNavigate();

  // Handle Know More button click - navigates to course details page using path
  const handleKnowMore = (coursePath) => {
    navigate(coursePath);
  };

  return (
    <div className="bg-black py-14">
      {/* Import Raleway font */}
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-3xl mx-auto mb-12">
          
          {/* Main Heading */}
          <div className="w-full">
            <h2 className="text-center text-[#d5dbe6] text-4xl md:text-5xl font-medium leading-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>
              AI Center of Excellence
            </h2>
          </div>
          
          {/* Subtitle */}
          <div className="w-full">
            <p className="text-center text-[#d5dbe6]/60 text-base leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Driving Drone Innovation Through AI Excellence
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-zinc-700/30 hover:scale-[1.02] transform transition duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    // Fallback to Unsplash image if local image fails
                    e.target.src = `/images/training/t17.avif`;
                  }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col p-6 flex-1">
                <h3 
                  className="text-white text-xl font-semibold mb-4 leading-tight"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  {course.title}
                </h3>

                <div className="space-y-3 text-sm text-white/80 mb-6 flex-1">
                  <p 
                    className="flex items-center gap-2"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    <Clock className="w-4 h-4 text-blue-400" /> 
                    <span className="font-medium">Duration:</span> {course.duration || "N/A"}
                  </p>
                  <p 
                    className="flex items-center gap-2"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    <MapPin className="w-4 h-4 text-blue-400" /> 
                    <span className="font-medium">Available in:</span> {course.location || "N/A"}
                  </p>
                </div>

                {/* Button */}
                <button 
                  onClick={() => handleKnowMore(course.path)}
                  className="mt-auto w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  Know More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom accent line */}
              <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
     
      </div>
    </div>
  );
}

export default AlExcellence