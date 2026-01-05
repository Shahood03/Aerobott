import { Link } from "react-router-dom";

export default function BuildCareer() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] flex items-end">
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
        <div className="relative z-10 px-6 pb-16 mx-auto w-full text-center">
          <h1 className="inline-block m-8 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-5 italic bg-white/10 backdrop-blur-lg px-6 py-3 rounded-2xl">
            From Hobbyist to Professional: How to Build a Career in Drone Technology
          </h1>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <img
          src="/images/blogs/blog2.png"
          alt="Professional drone pilot at work"
          className="w-full rounded-lg"
        />
      </div>

      {/* Blog Content */}
      <article className="max-w-3xl mx-auto px-6 pb-12 md:pb-16">
        
        <p className="text-lg text-gray-700 leading-8 mb-8">
          What started as a fun weekend hobby is now one of the fastest-growing industries in the world. Drone technology is revolutionizing everything from photography and{" "}
          <Link to="/drone-as-a-service" className="font-bold text-black hover:text-gray-700">
            agriculture
          </Link>{" "}
          to construction and emergency response. If you've been flying drones for fun, now might be the perfect time to turn your passion into a career.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          1. Hone Your Skills
        </h2>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          Start by mastering manual flying and learning to navigate different environments. Practice{" "}
          <Link to="/IndustrialCourse/aerial-cinematography" className="font-bold text-black hover:text-gray-700">
            aerial photography
          </Link>
          ,{" "}
          <Link to="/IndustrialCourse/gis-survey" className="font-bold text-black hover:text-gray-700">
            mapping
          </Link>
          , or{" "}
          <Link to="/IndustrialCourse/fpv-racing" className="font-bold text-black hover:text-gray-700">
            FPV racing
          </Link>
          —depending on your interests. The more experience you have, the more confident and capable you'll be in a professional setting.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          2. Get Certified
        </h2>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          All countries require drone operators to be licensed for commercial use, in India{" "}
          <Link to="/drone-pilot-training-courses" className="font-bold text-black hover:text-gray-700">
            Remote Pilot Certificate
          </Link>{" "}
          issued by{" "}
          <Link to="/drone-pilot-training-courses" className="font-bold text-black hover:text-gray-700">
            DGCA
          </Link>{" "}
          is essential. Certification not only ensures you're flying legally but also boosts your credibility with clients or employers.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          3. Choose a Niche
        </h2>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          Drone technology is used in a variety of industries. You can specialize in real estate photography,{" "}
          <Link to="/IndustrialCourse/gis-survey" className="font-bold text-black hover:text-gray-700">
            land surveying
          </Link>
          ,{" "}
          <Link to="/drone-as-a-service" className="font-bold text-black hover:text-gray-700">
            agriculture monitoring
          </Link>
          , search and rescue, or even{" "}
          <Link to="/IndustrialCourse/aerial-cinematography" className="font-bold text-black hover:text-gray-700">
            cinematography
          </Link>
          . Identifying your niche helps you focus your training and marketing efforts.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          4. Build a Portfolio
        </h2>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          Document your best work with photos, videos, and client testimonials. A strong online portfolio showcases your skills and makes it easier to attract potential clients or job offers.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          5. Network and Stay Updated
        </h2>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          Join drone communities, attend industry expos, and follow the latest tech trends. The drone industry is evolving rapidly, and staying informed gives you a competitive edge.
        </p>

        <div className="border-l-4 border-blue-600 pl-6 my-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Final Thoughts</h3>
          <p className="text-lg text-gray-800 leading-8 italic">
            Turning your drone hobby into a career takes time and dedication—but with the right approach, it's absolutely achievable. Whether you become a{" "}
            <Link to="/hire-pilot" className="font-bold text-black hover:text-gray-700">
              freelance drone pilot
            </Link>{" "}
            or work with a larger company, the sky isn't the limit—it's just the beginning.
          </p>
        </div>

        {/* Second Section */}
        <hr className="my-12 border-gray-200" />

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
          Why Colleges Should Add Drone & AI Labs for Students
        </h2>
        
        <p className="text-lg text-gray-700 leading-8 mb-8">
          In today's fast-evolving tech landscape, drones and artificial intelligence (AI) are no longer just buzzwords—they are shaping the future of industries like agriculture, logistics, defense, filmmaking, disaster management, and smart cities. Yet, many colleges still lack hands-on labs dedicated to these fields. Introducing Drone and AI labs in colleges would not only bridge the gap between Industry and academy but also prepare students for real-world applications and emerging job markets.
        </p>

        <p className="text-lg text-gray-700 leading-8 mb-8">
          By working directly with drones and AI tools, students gain valuable skills in robotics, data analysis, automation, and machine learning. These labs encourage innovation, problem-solving, and interdisciplinary learning—essential qualities for the future workforce. Whether it's designing drone-based delivery systems or developing AI models for traffic control, students can work on projects that have real-world impact. Moreover, having access to such labs can attract industry partnerships, internships, and funding opportunities for both students and institutions.
        </p>

        <div className="border-l-4 border-green-600 pl-6 my-10">
          <p className="text-lg text-gray-800 leading-8 italic">
            In short, Drone and AI labs are more than just high-tech facilities—they're investments in the future. As the demand for skilled professionals in these domains grows, colleges/universities that equip their students with hands-on experience will stand out as true leaders in modern education.{" "}
            <Link to="/partner-with-us" className="font-bold text-black hover:text-gray-700">
              Partner with us
            </Link>{" "}
            to bring these opportunities to your institution.
          </p>
        </div>

      </article>
    </div>
  );
}