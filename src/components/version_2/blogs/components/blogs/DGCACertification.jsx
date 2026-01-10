import { Link } from "react-router-dom";

export default function DGCACertification() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/blogs/banner.png"
            alt="DGCA certified drone pilot"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 pb-16 mx-auto w-full text-center">
          <h1 className="inline-block m-8 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-5 italic bg-white/10 backdrop-blur-lg px-6 py-3 rounded-2xl">
            DGCA Drone Certification for Commercial Flying in India: Complete Guide
          </h1>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <img
          src="/images/gallery/g4.jpg"
          alt="DGCA drone certification process"
          className="w-full h-[700px] rounded-lg"
        />
      </div>

      {/* Blog Content */}
      <article className="max-w-3xl mx-auto px-6 pb-12 md:pb-16">
        
        <p className="text-lg text-gray-700 leading-8 mb-8">
          The drone industry in India is booming from aerial photography and real-estate imaging to farming, surveying, mapping, and logistics. But as drones become more powerful and widely used, regulations have become stricter to ensure safety and responsible flying.
        </p>

        <p className="text-lg text-gray-700 leading-8 mb-8">
          If you plan to fly drones for commercial purposes in India, you must comply with the rules set by the Directorate General of Civil Aviation (DGCA) — the national aviation regulator.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          What Is a DGCA Drone Certificate (Remote Pilot Certificate)?
        </h2>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          A DGCA Drone Certificate— technically called a{" "}
          <Link to="/drone-pilot-training-courses" className="font-bold text-black hover:text-gray-700">
            Remote Pilot Certificate (RPC)
          </Link>{" "}
          — is an official certification issued under India's drone regulations. It allows you to:
        </p>
        <ul className="list-none text-lg text-gray-700 leading-8 mb-8 ml-4">
          <li>Legally operate drones for commercial purposes</li>
          <li>Fly drones beyond hobby or recreational use</li>
          <li>Take up assignments in industries like agriculture, mapping, cinematography, and more</li>
        </ul>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          Before a pilot is issued an RPC, they must complete training at a DGCA-approved Remote Pilot Training Organisation (RPTO).
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Why DGCA Certification Is Mandatory
        </h2>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          DGCA certification isn't optional for commercial flying — it's a legal requirement under India's Drone Rules, 2021 and related regulations. These rules are designed to ensure:
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
          1. Legal Compliance
        </h3>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          Commercial drone operations must follow structured safety and airspace rules — and certification confirms that pilots are trained in those rules.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
          2. Safety & Risk Management
        </h3>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          Certified pilots are taught how to assess risks, manage emergencies, and operate within Indian aviation protocols — minimizing accidents and unauthorized flights.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
          3. Career & Business Opportunities
        </h3>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          With an RPC, you can bid for contracts, work with enterprises, and access projects that require official compliance — opening professional doors in multiple sectors.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Who Needs a DGCA Drone License?
        </h2>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          You must have a DGCA Remote Pilot Certificate if you plan to fly a drone commercially — meaning in exchange for money or business use — regardless of drone size (except some nano use cases).
        </p>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          This includes:
        </p>
        <ul className="list-none text-lg text-gray-700 leading-8 mb-8 ml-4">
          <li><Link to="/IndustrialCourse/aerial-cinematography" className="font-bold text-black hover:text-gray-700">
              Aerial photographers and videographers
            </Link>
          </li>
          <li>{" "}
            <Link to="/IndustrialCourse/gis-survey" className="font-bold text-black hover:text-gray-700">
              Surveying and mapping professionals
            </Link>
          </li>
          <li>Agriculture and crop monitoring services</li>
          <li>Inspection and surveillance operators</li>
          <li>{" "}
            <Link to="/drone-as-a-service" className="font-bold text-black hover:text-gray-700">
              Drone delivery service trials
            </Link>
          </li>
          <li>Startups offering drone-based services</li>
        </ul>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          Even a single paid drone flight qualifies as "commercial," so certification is non-negotiable.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          When is DGCA Remote Pilot Certificate Not Required?
        </h2>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          You do not need a DGCA Remote Pilot Certificate if:
        </p>
        <ul className="list-none text-lg text-gray-700 leading-8 mb-8 ml-4">
          <li>You fly nano drones (≤250g) and it's purely for non-commercial (hobby) use</li>
          <li>You fly only in permitted Green Zones for recreational purposes</li>
          <li>You are not earning or performing any paid work with the drone</li>
        </ul>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          However, the moment there's money or professional intent involved, you must be certified.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Key Requirements for Commercial Drone Operations
        </h2>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          Even with an RPC, commercial drone flying in India comes with other compliance needs:
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
          1. Drone Registration
        </h3>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          Your drone must be registered on the eGCA and have a UIN (Unique Identification Number). Previously it was Digital Sky.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
          2. Airspace Permissions
        </h3>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          The DGCA divides airspace into Green, Yellow, and Red zones. Green zones are generally free to fly in. Yellow zones need permissions. Red zones are restricted and require high-level approval.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
          3. Operational Limits
        </h3>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          Rules like No Permission, No Takeoff (NPNT), altitude limits, and line-of-sight requirements must be followed.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
          4. Insurance & Safety
        </h3>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          Third-party liability insurance is highly recommended for commercial operations.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          How to Get Your DGCA Drone Certificate (RPC)
        </h2>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          Here's the typical process:
        </p>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          Enroll in a{" "}
          <Link to="/drone-pilot-training-courses" className="font-bold text-black hover:text-gray-700">
            DGCA-Approved RPTO
          </Link>
          . Complete training — both theory and practical flying sessions. Pass the assessment — ground and flight performance tests. Apply for RPC on eGCA — DGCA issues the certificate digitally.
        </p>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          Most{" "}
          <Link to="/drone-pilot-training-courses" className="font-bold text-black hover:text-gray-700">
            training programs
          </Link>{" "}
          last 5–7 days, and your RPC is typically valid for 10 years with renewal options (terms and conditions applied).
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Penalties for Flying Without a Remote Pilot Certificate
        </h2>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          Flying drones commercially without a valid RPC can lead to:
        </p>
        <ul className="list-none text-lg text-gray-700 leading-8 mb-8 ml-4">
          <li>Heavy penalties and fines</li>
          <li>Confiscation of your drone</li>
          <li>Legal action under Indian aviation laws</li>
          <li>Blacklisting on the Digital Sky platform (eGCA)</li>
        </ul>
        <p className="text-lg text-gray-700 leading-8 mb-8">
          Compliance isn't just about legality — it protects your business and reputation, safety and security.
        </p>

        <div className="border-l-4 border-blue-600 pl-6 my-10">
          <p className="text-lg text-gray-800 leading-8 italic">
            In India today, a Remote Pilot Certificate (from DGCA Approved RPTO) is mandatory for all commercial drone flying. Whether you're a freelance pilot, entrepreneur, cinematic operator, or corporate drone service provider — certification is your legal entry ticket into the industry. With the correct training, adherence to safety rules, and certified compliance, you can unlock exciting opportunities across sectors and flights that are both safe and profitable. Interested in learning more? Explore our{" "}
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