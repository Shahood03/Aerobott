export default function BlogHero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/blogs/banner.png"
          alt="Drone flying over landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

{/* Content */}
<div className="relative z-10 px-6 pb-16 max-w-4xl mx-auto w-full text-center">
  <h1 className="inline-block m-8 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-5 italic bg-white/10 backdrop-blur-lg px-6 py-3 rounded-2xl">
    Welcome to our BLOGS
  </h1>
</div>


    </section>
  );
}