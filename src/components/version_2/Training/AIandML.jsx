import React from 'react';
import { ArrowRight, Clock, MapPin } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'AI/ML With Data Science',
    duration: '5 to 8 Days',
    location: 'Mumbai and Chandigarh',
    image:
      'https://images.unsplash.com/photo-1436262513933-a0b06755c784?w=400&h=300&fit=crop&crop=center',
    link: 'www.google.com',
  },
  {
    id: 2,
    title: 'Data Science with Cyber Security',
    duration: '5 to 8 Days',
    location: 'Chandigarh',
    image:
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop&crop=center',
    link: '',
  },
  {
    id: 3,
    title: 'Drone Mapping , Modeling and Survey Mapping',
    duration: '',
    location: '',
    image:
      'https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=400&h=300&fit=crop&crop=center',
    link: '',
  },
  {
    id: 4,
    title: 'Drone Construction and Real Estate Photo Service',
    duration: '15 Days',
    location: '',
    image:
      'https://images.unsplash.com/photo-1436262513933-a0b06755c784?w=400&h=300&fit=crop&crop=center',
    link: '',
  },
  {
    id: 5,
    title: 'Drone Search and Resue Operation',
    duration: '5 months',
    location: 'Mumbai',
    image:
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop&crop=center',
    link: '',
  },
  {
    id: 6,
    title: 'Drone Lidar Made Easy',
    duration: '8 months',
    location: 'Delhi',
    image:
      'https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=400&h=300&fit=crop&crop=center',
    link: '',
  },
];

function AIandML() {
  return (
    <div className="bg-black py-14">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Title */}
        <h1 className="text-white text-4xl font-semibold text-center mb-12">
          AI/ML Course
        </h1>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-70 object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col p-6 flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {course.title}
                </h3>

                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-pink-500" /> Duration:{' '}
                    {course.duration || 'N/A'}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-pink-500" /> Available in{' '}
                    {course.location || 'N/A'}
                  </p>
                </div>

                {/* Button */}
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition"
                >
                  Know More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AIandML;
