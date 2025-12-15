import React, { useState, useEffect, useRef } from 'react';

const NewsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const featuredItem = {
    id: 1,
    title:
      "Arpana Mishra highlights the growing role of drone technology and industrial use cases in strengthening global education and innovation partnerships.",
    publication: "Technology Times",
    date: "April 2025",
    excerpt:
      "Maharashtra Strengthens Global Academic Ties with Leading U.S. Universities",
    imageUrl: "/images/news/news2.png",
    link:
      "https://msbteadmin.bynaricexam.com/uploads/latestUpdate/MSBTENewsletterJuly2025aIssue.pdf",
  };

  const carouselItems = [
    {
      id: 2,
      title:
        "₹6,500 Crore Transformative Investment Proposals Presented to Rajasthan Chief Minister Bhajan Lal",
      publication: "Innovation Digest",
      date: "April 2025",
      excerpt:
        "Delegation led by Ganpat Kothari presented key development proposals across agriculture, education, innovation, skills and Drone Manufacturing.",
      imageUrl: "/images/news/news1.jpeg",
    },
    {
      id: 3,
      title:
        "₹6,500 Crore Transformative Investment Proposals Presented to Rajasthan Chief Minister Bhajan Lal",
      publication: "Tech Innovation Today",
      date: "March 2025",
      excerpt:
        "Delegation led by Ganpat Kothari presented key development proposals across agriculture, education, innovation, skills and Drone Manufacturing.",
      imageUrl: "/images/news/news3.jpeg",
    },
    {
      id: 4,
      title:
        "₹6,500 Crore Transformative Investment Proposals Presented to Rajasthan Chief Minister Bhajan Lal",
      publication: "Defense Weekly",
      date: "February 2025",
      excerpt:
        "Delegation led by Ganpat Kothari presented key development proposals across agriculture, education, innovation, skills and Drone Manufacturing.",
      imageUrl: "/images/news/news5.jpeg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarouselIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const newsItems = [
    {
      id: 5,
      title:
        "Precision Agriculture Revolution: Aerobott's Smart Farming Solutions",
      publication: "AgriTech Magazine",
      date: "January 2025",
      excerpt:
        "Transforming traditional farming with intelligent drone technology and precision agriculture capabilities.",
      imageUrl: "/images/news/n3.jpg",
    },
    {
      id: 6,
      title: "Aerobott Wins 'Best Innovation Award' at Drone Tech Summit",
      publication: "Aviation Today",
      date: "December 2024",
      excerpt:
        "Recognition for outstanding contribution to drone technology and aerospace innovation in India.",
      imageUrl: "/images/news/n4.jpg",
    },
    {
      id: 7,
      title: "Breakthrough in Drone Battery Technology by Aerobott",
      publication: "Energy Tech Weekly",
      date: "November 2024",
      excerpt:
        "New lithium-ion advancement extends flight time by 40% for commercial drone operations.",
      imageUrl: "/images/news/n5.png",
    },
    {
      id: 8,
      title: "Aerobott Partners with Leading Universities for R&D",
      publication: "Research Today",
      date: "October 2024",
      excerpt:
        "Collaboration aims to accelerate innovation in drone technology and aerospace engineering education.",
      imageUrl: "/images/news/n6.png",
    },
  ];

  // Triple duplicate for seamless loop
  const duplicatedNews = [...newsItems, ...newsItems, ...newsItems];

  const openImageModal = (url, title) => {
    setSelectedImage({ url, title });
  };

  const closeImageModal = () => setSelectedImage(null);

  const handleLinkClick = (e, link) => {
    e.stopPropagation();
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="news"
      className="relative w-full bg-black overflow-hidden px-4 sm:px-6 md:px-8 lg:px-16 pt-10"
    >
      <div className="flex flex-col items-center gap-10">

        {/* Heading */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-center text-[#d5dbe6] text-3xl md:text-5xl font-raleway">
            We Are In <span className="font-normal">News</span>
          </h2>
          <p className="text-center text-[#d5dbe6]/60 mt-2">
            Latest coverage and recognition of our innovations
          </p>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full">
          {/* Featured */}
          <div
            className="relative h-[28rem] rounded-2xl overflow-hidden cursor-pointer"
            onClick={() =>
              openImageModal(featuredItem.imageUrl, featuredItem.title)
            }
          >
            <img
              src={featuredItem.imageUrl}
              className="w-full h-full object-cover"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80 p-6 flex flex-col justify-end">
              <h3 className="text-white text-xl mb-2">
                {featuredItem.title}
              </h3>
              <p className="text-white/80 text-sm">
                {featuredItem.excerpt}
              </p>

              {featuredItem.link && (
                <button
                  onClick={(e) =>
                    handleLinkClick(e, featuredItem.link)
                  }
                  className="mt-3 text-xs uppercase tracking-wider text-white/70 hover:underline"
                >
                  Read Article
                </button>
              )}
            </div>
          </div>

          {/* Carousel */}
          <div className="relative h-[28rem] rounded-2xl overflow-hidden">
            {carouselItems.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentCarouselIndex
                    ? "opacity-100"
                    : "opacity-0"
                }`}
                onClick={() =>
                  openImageModal(item.imageUrl, item.title)
                }
              >
                <img
                  src={item.imageUrl}
                  className="w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80 p-6 flex flex-col justify-end">
                  <h3 className="text-white text-xl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {item.excerpt}
                  </p>

                  {item.link && (
                    <button
                      onClick={(e) =>
                        handleLinkClick(e, item.link)
                      }
                      className="mt-3 text-xs uppercase tracking-wider text-white/70 hover:underline"
                    >
                      Read Article
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continuous Infinite Scroll */}
        <div className="relative w-full overflow-hidden pt-6 pb-10">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <div className="scroll-container">
            <div className="scroll-content">
              {duplicatedNews.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="scroll-item"
                  onClick={() =>
                    openImageModal(item.imageUrl, item.title)
                  }
                >
                  <ScrollingNewsCard
                    {...item}
                    onLinkClick={handleLinkClick}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
          onClick={closeImageModal}
        >
          <img
            src={selectedImage.url}
            className="max-w-full max-h-full w-auto h-auto object-contain"
            alt=""
          />
        </div>
      )}

      {/* CSS */}
      <style>{`
        .scroll-container {
          width: 100%;
          overflow: hidden;
        }

        .scroll-content {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: infinite-scroll 60s linear infinite;
        }

        .scroll-item {
          width: 20rem;
          height: 24rem;
          flex-shrink: 0;
        }

        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .scroll-content:hover {
          animation-play-state: paused;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .scroll-item {
            width: 16rem;
            height: 20rem;
          }
          
          .scroll-content {
            gap: 1rem;
            animation: infinite-scroll 45s linear infinite;
          }
        }

        @media (max-width: 480px) {
          .scroll-item {
            width: 14rem;
            height: 18rem;
          }
          
          .scroll-content {
            gap: 0.75rem;
            animation: infinite-scroll 40s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

const ScrollingNewsCard = ({
  title,
  date,
  excerpt,
  imageUrl,
  link,
  onLinkClick,
}) => {
  return (
    <article className="relative w-full h-full rounded-2xl overflow-hidden bg-black cursor-pointer group">
      <img
        src={imageUrl}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        alt=""
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80 p-5 flex flex-col justify-end">
        <span className="text-xs text-white/60 mb-1">{date}</span>
        <h3 className="text-white text-lg mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-white/80 text-sm line-clamp-3">
          {excerpt}
        </p>

        {link && (
          <button
            onClick={(e) => onLinkClick(e, link)}
            className="mt-3 text-xs uppercase tracking-wider text-white/70 hover:underline"
          >
            Read Article
          </button>
        )}
      </div>
    </article>
  );
};

export default NewsSection;