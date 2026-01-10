import { Link } from "react-router-dom";

export default function RemotePilotTraining() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/blogs/banner.png"
            alt="Drone pilot training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 pb-16 mx-auto w-full text-center">
          <h1 className="inline-block m-8 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-5 italic bg-white/10 backdrop-blur-lg px-6 py-3 rounded-2xl">
            Remote Pilot Training: Your Gateway to a Career in Drones
          </h1>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <img
          src="/images/blogs/blog4.png"
          alt="Remote pilot training session"
          className="w-full rounded-lg"
        />
      </div>

      {/* Blog Content */}
      <article className="max-w-3xl mx-auto px-6 pb-12 md:pb-16">
        
        <p className="text-lg text-gray-700 leading-8 mb-8">
          As drones rapidly transform industries like agriculture, infrastructure, logistics, 
          media, and surveying, the demand for skilled and certified drone pilots is growing 
          fast. Remote Pilot Training is the first and most important step for anyone looking 
          to enter the professional drone ecosystem. In India, remote pilot training is designed 
          to ensure that drone operators fly safely, legally, and efficiently while meeting 
          regulatory standards.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          What Is Remote Pilot Training?
        </h2>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          Remote Pilot Training is a structured program that prepares individuals to operate 
          drones professionally. It covers both theoretical knowledge and hands-on flight 
          training, enabling pilots to understand not just how to fly a drone, but how to 
          fly it responsibly. Upon successful completion, candidates are eligible for a 
          Remote Pilot Certificate (RPC), which is mandatory for commercial drone operations 
          in India.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          What You Learn During Training
        </h2>
        <p className="text-lg text-gray-700 leading-8 mb-6">
          Remote Pilot Training goes beyond basic drone flying. Key learning areas include:
        </p>
        <ul className="text-lg text-gray-700 leading-8 mb-8 space-y-2 ml-6">
          <li>Drone components and systems</li>
          <li>Airspace classification and regulations</li>
          <li>Flight planning and mission execution</li>
          <li>Safety procedures and emergency handling</li>
          <li>Weather assessment and risk management</li>
          <li>Practical flight operations and simulations</li>
        </ul>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          This balanced approach ensures pilots are confident in real-world scenarios.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Why Remote Pilot Training Is Important
        </h2>
        <p className="text-lg text-gray-700 leading-8 mb-6">
          With increasing drone usage, safety and compliance have become critical. Proper 
          training helps pilots:
        </p>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          Operate drones legally  Avoid accidents and airspace violations   Improve 
          flight accuracy and efficiency   Build professional credibility   Access 
          commercial and enterprise opportunities
        </p>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          Certified pilots are trusted by clients, companies, and government agencies alike.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Who Should Enroll?
        </h2>
        <p className="text-lg text-gray-700 leading-8 mb-6">
          Remote Pilot Training is ideal for:
        </p>
        <ul className="text-lg text-gray-700 leading-8 mb-8 space-y-2 ml-6">
          <li>Aspiring drone pilots</li>
          <li>Students and fresh graduates</li>
          <li>Professionals looking to upskill</li>
          <li>Entrepreneurs starting drone service businesses</li>
          <li>Photographers, surveyors, and engineers</li>
        </ul>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          No matter your background, training opens doors to multiple career paths.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          The Future of Remote Pilots
        </h2>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          As AI-powered drones and autonomous systems become mainstream, trained remote pilots 
          will play a key role in monitoring, planning, and managing drone missions. Skilled 
          pilots will be in demand not only for flying but also for data-driven decision-making.
        </p>

        <div className="border-l-4 border-blue-600 pl-6 my-10">
          <p className="text-lg text-gray-800 leading-8 italic">
            Remote Pilot Training is more than a certification—it's an investment in a 
            future-ready career. With the right training, discipline, and mindset, you can 
            become part of one of the fastest-growing technology sectors in the world. The 
            sky is no longer the limit—it's the workplace. Interested in learning more? 
            Explore our{" "}
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