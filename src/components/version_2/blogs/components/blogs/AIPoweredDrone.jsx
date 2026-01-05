import { Link } from "react-router-dom";

export default function AiPowerDrone() {
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
            How AI-Powered Drones Are Transforming Disaster Management
          </h1>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <img
          src="/images/blogs/blog1.png"
          alt="AI drone surveying disaster area"
          className="w-full rounded-lg"
        />
      </div>

      {/* Blog Content */}
      <article className="max-w-3xl mx-auto px-6 pb-12 md:pb-16">
        
        <p className="text-lg text-gray-700 leading-8 mb-8">
          AI-powered drones are revolutionizing disaster management by providing faster, 
          smarter, and safer solutions during emergencies. These drones combine artificial 
          intelligence with aerial technology to offer real-time data, accurate assessments, 
          and efficient rescue operations, making them indispensable in disaster response.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Rapid Damage Assessment
        </h2>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          When disasters like floods, earthquakes, or hurricanes strike, speed is critical. 
          AI-powered drones can{" "}
          <Link to="/IndustrialCourse/gis-survey" className="font-bold text-black hover:text-gray-700">
            survey large areas
          </Link>{" "}
          within minutes, capturing high-resolution images and videos. With AI algorithms, they analyze structural damage quickly, 
          helping authorities prioritize recovery efforts and allocate resources effectively.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Search and Rescue with AI
        </h2>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          AI-driven drones equipped with thermal imaging and object detection can locate 
          trapped survivors in debris or low-visibility areas. This real-time capability 
          significantly reduces rescue time and increases survival chances.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Efficient Aid Delivery
        </h2>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          Blocked roads and inaccessible regions often delay aid. AI-powered drones can 
          deliver essential supplies like food, water, and medical kits to remote areas. 
          With intelligent routing, drones choose optimal flight paths, reducing delays 
          and saving lives.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Data-Driven Insights for Better Decisions
        </h2>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          During operations, drones collect vast amounts of data. AI processes this data 
          to create detailed{" "}
          <Link to="/IndustrialCourse/gis-data-processing" className="font-bold text-black hover:text-gray-700">
            disaster maps
          </Link>
          , identify safe zones, and prioritize high-risk 
          areas. These insights lead to faster, smarter disaster response strategies.
        </p>

        <div className="border-l-4 border-blue-600 pl-6 my-10">
          <p className="text-lg text-gray-800 leading-8 italic">
            AI-powered drones in disaster management are not just a technological trend—they 
            are a lifesaving innovation. From real-time search and rescue to predictive 
            analytics and aid delivery, these drones enhance every phase of disaster response. 
            As AI technology advances, drones will become even more autonomous, making disaster 
            management faster, safer, and more effective. Interested in learning more? Explore our{" "}
            <Link to="/drone-pilot-training-courses" className="font-bold text-black hover:text-gray-700">
              drone pilot training courses
            </Link>{" "}
            or check out our{" "}
            <Link to="/drone-as-a-service" className="font-bold text-black hover:text-gray-700">
              Drone as a Service
            </Link>{" "}
            offerings.
          </p>
        </div>

      </article>
    </div>
  );
}