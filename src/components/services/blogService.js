const BASE = process.env.REACT_APP_WAGTAIL_API;
const PAGES = `${BASE}/api/v2/pages`;

// Fetch all blog posts
export async function fetchBlogs() {
  const res = await fetch(
    `${PAGES}/?type=blog.BlogPage&fields=title,intro,feed_image,date,slug,first_published_at&order=-first_published_at`
  );
  if (!res.ok) throw new Error("Failed to fetch blogs");
  const data = await res.json();
  return data.items;
}

// Fetch single blog by slug
export async function fetchBlogBySlug(slug) {
  const res = await fetch(
    `${PAGES}/?type=blog.BlogPage&slug=${slug}&fields=*`
  );
  if (!res.ok) throw new Error("Failed to fetch blog");
  const data = await res.json();
  return data.items[0] ?? null;
}

// Resolve image URL from feed_image field
export function getImageUrl(feedImage) {
  if (!feedImage) return "/images/blogs/placeholder.png";
  // Wagtail returns either an object with meta.download_url or just an id
  if (typeof feedImage === "object" && feedImage.meta?.download_url) {
    return feedImage.meta.download_url;
  }
  // Fallback: fetch by image id
  return `${BASE}/api/v2/images/${feedImage}/`;
}

// Format ISO date → "March 4, 2026"
export function formatDate(isoString) {
  if (!isoString) return "";
  return new Date(isoString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Fix relative image URLs in body HTML
export function processBody(html) {
  if (!html) return "";
  // Wagtail renders relative /media/... paths — make them absolute
  return html.replace(/src="\/media\//g, `src="${BASE}/media/`);
}
