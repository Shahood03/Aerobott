import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchBlogBySlug, getImageUrl, formatDate, processBody } from "../../../services/blogService";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        setLoading(true);
        const post = await fetchBlogBySlug(slug);
        if (post) {
          setBlog(post);
        } else {
          setError("Blog post not found.");
        }
      } catch (err) {
        setError("Failed to load blog post.");
      } finally {
        setLoading(false);
      }
    };

    if (slug) loadBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white">
        <p className="text-red-400 text-lg mb-4">{error || "Post not found"}</p>
        <button
          onClick={() => navigate("/blogs")}
          className="px-6 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
        >
          ← Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <button
          onClick={() => navigate("/blogs")}
          className="inline-flex items-center text-white/60 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blogs
        </button>
      </div>

      {/* Hero Section */}
      <header className="max-w-4xl mx-auto px-4 py-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          {blog.title}
        </h1>

        <div className="flex items-center justify-center gap-4 text-white/60 text-sm">
          {blog.author && (
            <>
              <span>{blog.author}</span>
              <span>•</span>
            </>
          )}
          <span>{blog.date || formatDate(blog.meta.first_published_at)}</span>
        </div>
      </header>

      {/* Featured Image */}
      {blog.feed_image && (
        <div className="max-w-5xl mx-auto px-4 mb-12">
          <img
            src={getImageUrl(blog.feed_image)}
            alt={blog.title}
            className="w-full h-auto max-h-[500px] object-cover rounded-2xl"
          />
        </div>
      )}

      {/* Intro */}
      {blog.intro && (
        <div className="max-w-3xl mx-auto px-4 mb-10">
          <p className="text-xl text-white/70 leading-relaxed border-l-4 border-white/30 pl-6 italic">
            {blog.intro}
          </p>
        </div>
      )}

      {/* Blog Body */}
      <article className="max-w-3xl mx-auto px-4 pb-20">
        <div
          className="prose prose-invert prose-lg max-w-none
                     text-white/80 leading-relaxed

                     [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-4
                     [&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:font-semibold [&_h3]:text-white/90 [&_h3]:mt-8 [&_h3]:mb-3
                     [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-white/90 [&_h4]:mt-6 [&_h4]:mb-2

                     [&_p]:mb-5

                     [&_a]:text-blue-400 [&_a]:underline hover:[&_a]:text-blue-300

                     [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5
                     [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5
                     [&_li]:mb-2

                     [&_blockquote]:border-l-4 [&_blockquote]:border-white/30 [&_blockquote]:pl-6 [&_blockquote]:italic
                     [&_blockquote]:bg-white/5 [&_blockquote]:py-4 [&_blockquote]:px-2 [&_blockquote]:rounded-r-lg

                     [&_img]:rounded-xl [&_img]:shadow-lg [&_img]:my-8 [&_img]:w-full [&_img]:h-auto

                     [&_iframe]:w-full [&_iframe]:aspect-video [&_iframe]:rounded-xl [&_iframe]:my-8

                     [&_table]:w-full [&_table]:border-collapse [&_table]:my-6
                     [&_th]:bg-white/10 [&_th]:p-3 [&_th]:text-left [&_th]:border [&_th]:border-white/20
                     [&_td]:p-3 [&_td]:border [&_td]:border-white/10"
          dangerouslySetInnerHTML={{ __html: processBody(blog.body) }}
        />
      </article>
    </div>
  );
};

export default BlogDetail;