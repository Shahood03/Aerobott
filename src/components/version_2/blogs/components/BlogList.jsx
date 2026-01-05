import React from 'react';
import { useNavigate } from 'react-router-dom';

const blogData = [
  {
    id: 1,
    title: "How AI-Powered Drones Are Transforming Disaster Management ",
    date: "November 28, 2025",
    image: "/images/blogs/blog1.png",
    slug: "AI-powered-drones"
  },
  {
    id: 2,
    title: "From Hobbyist to Professional: How to Build a Career in Drone Technology ",
    date: "December 11, 2025",
    image: "/images/blogs/blog2.png",
    slug: "build-a-career-drone-technology"
  },
];

const BlogCards = () => {
  const navigate = useNavigate();

  const handleCardClick = (slug) => {
    navigate(`/blogs/${slug}`);
  };

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-16">
      {blogData.map((blog) => (
        <div
          key={blog.id}
          onClick={() => handleCardClick(blog.slug)}
          className=" rounded-xl shadow-md overflow-hidden cursor-pointer 
                     hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-66 object-cover"
          />
          <div className="mt-2">
            <p className="text-sm text-white/60 mb-2">{blog.date}</p>
            <h2 className="text-xl font-semibold text-white">{blog.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;