import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchBlogs, getImageUrl, formatDate } from "../../../services/blogService";

const BlogList = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        const items = await fetchBlogs();
        setBlogs(items);
      } catch (err) {
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  const handleCardClick = (slug) => {
    navigate(`/blogs/${slug}`);
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-16 px-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-xl shadow-md overflow-hidden animate-pulse">
            <div className="w-full h-66 bg-white/10" />
            <div className="mt-2 p-4">
              <div className="h-4 bg-white/10 rounded w-1/3 mb-2" />
              <div className="h-6 bg-white/10 rounded w-full" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto py-16 text-center">
        <p className="text-red-400">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-6 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-16 px-4">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          onClick={() => handleCardClick(blog.meta.slug)}
          className="rounded-xl shadow-md overflow-hidden cursor-pointer 
                     hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <img
            src={getImageUrl(blog.feed_image)}
            alt={blog.title}
            className="w-full h-66 object-cover"
          />
          <div className="mt-2">
            <p className="text-sm text-white/60 mb-2">
              {blog.date || formatDate(blog.meta.first_published_at)}
            </p>
            <h2 className="text-xl font-semibold text-white">{blog.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;