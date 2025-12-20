import { useState, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";
import { FiArrowRight, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

// Simulating the ReactLenis component since we don't have actual access to it
// In a real implementation, you would use the actual ReactLenis component
const ReactLenis = ({ children }) => {
  return <div className="smooth-scroll">{children}</div>;
};

const SECTION_HEIGHT = 1200;

export default function ContactUsHero() {
  return (
    <div className="bg-black text-[#d5dbe6]">
      {/* Import Raleway font */}
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        {/* <Nav /> */}
        <Hero />
        <ContactForm />
      </ReactLenis>
    </div>
  );
}

const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-black/80 px-6 py-4 backdrop-blur-sm border-b border-white/10">
      <div className="flex items-center">
        <CgProfile className="text-3xl text-blue-400" />
        <span className="ml-2 font-semibold text-[#d5dbe6]" style={{ fontFamily: 'Raleway, sans-serif' }}>Company</span>
      </div>
      <button
        onClick={() => {
          document.getElementById("contact-form")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="flex items-center gap-1 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-blue-700"
        style={{ fontFamily: 'Raleway, sans-serif' }}
      >
        GET IN TOUCH <FiArrowRight className="ml-1" />
      </button>
    </nav>
  );
};

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-[#04070d]/0 to-[#04070d]" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [30, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [70, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["150%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(/images/contact/c2.avif)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex h-full w-full items-center justify-center bg-black/40">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center text-[#d5dbe6] drop-shadow-lg"
        >
          <h1 className="mb-4 text-5xl font-medium" style={{ fontFamily: 'Raleway, sans-serif' }}>Get in Touch</h1>
          <p className="text-xl font-normal" style={{ fontFamily: 'Raleway, sans-serif' }}>We'd love to hear from you</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Office workspace"
        start={-200}
        end={200}
        className="w-1/3 rounded-lg shadow-lg border border-white/10"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="People in a meeting"
        start={200}
        end={-250}
        className="mx-auto w-2/3 rounded-lg shadow-lg border border-white/10"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlfGVufDB8fDB8fHww"
        alt="Modern office"
        start={-200}
        end={200}
        className="ml-auto w-1/3 rounded-lg shadow-lg border border-white/10"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Woman working on laptop"
        start={0}
        end={-500}
        className="ml-24 w-5/12 rounded-lg shadow-lg border border-white/10"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={`${className} object-cover`}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [errors, setErrors] = useState([]);
  
  // Get API URL from environment variable
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';
  
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
    
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
      setSubmitStatus(null);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors([]);
    setSubmitStatus(null);
    
    try {
      const response = await fetch(`${API_URL}/api/contact/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
          phone: ""
        });
      } else {
        setSubmitStatus('error');
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrors([data.error || 'Failed to submit form']);
        }
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrors(['Network error. Please check your connection and try again.']);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact-form"
      className="mx-auto max-w-5xl px-4 py-24"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <motion.h2
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="mb-6 text-4xl font-medium text-[#d5dbe6] tracking-tight"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75, delay: 0.1 }}
            className="mb-8 text-lg text-[#d5dbe6]/60 leading-relaxed"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            We're here to help and answer any questions you might have. We look forward to hearing from you.
          </motion.p>
          
          <div className="space-y-6">
            <ContactInfoItem 
              icon={<HiOutlineLocationMarker />}
              title="Our Location"
              details="Hotel Sahara Star, North Tower Ground Floor, Chhatrapati Shivaji International, 70-C, Nehru Rd, Navpada, Airport Area, Vile Parle, Mumbai, Maharashtra 400099"
              delay={0.2}
            />
            <ContactInfoItem 
              icon={<HiOutlinePhone />}
              title="Phone Number"
              details="+91 9004711184"
              delay={0.3}
            />
            <ContactInfoItem 
              icon={<HiOutlineMail />}
              title="Email Address"
              details="info@aerobott.com"
              delay={0.4}
            />
          </div>
        </div>
        
        <motion.form
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75, delay: 0.5 }}
          onSubmit={handleSubmit}
          className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
            boxShadow: '0 25px 45px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Background image with dark overlay */}
          <div 
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
          
          {/* Glass background overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-blue-900/10 pointer-events-none"></div>
          
          <div className="relative z-10">
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-xl flex items-center"
              >
                <FiCheckCircle className="text-green-400 mr-3 text-xl" />
                <p className="text-green-300 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Message sent successfully! We'll get back to you soon.
                </p>
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-xl"
              >
                <div className="flex items-start">
                  <FiAlertCircle className="text-red-400 mr-3 text-xl mt-0.5 flex-shrink-0" />
                  <div>
                    {errors.map((error, index) => (
                      <p key={index} className="text-red-300 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        {error}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
            
            <div className="mb-6">
              <label htmlFor="name" className="mb-3 block text-sm font-medium text-[#d5dbe6] uppercase tracking-wider" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full rounded-xl border-2 border-white/20 bg-black/20 backdrop-blur-sm px-4 py-3 text-[#d5dbe6] placeholder-[#d5dbe6]/50 focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 shadow-lg"
                style={{ fontFamily: 'Raleway, sans-serif' }}
                placeholder="John Doe"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="mb-3 block text-sm font-medium text-[#d5dbe6] uppercase tracking-wider" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full rounded-xl border-2 border-white/20 bg-black/20 backdrop-blur-sm px-4 py-3 text-[#d5dbe6] placeholder-[#d5dbe6]/50 focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 shadow-lg"
                style={{ fontFamily: 'Raleway, sans-serif' }}
                placeholder="john@example.com"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="phone" className="mb-3 block text-sm font-medium text-[#d5dbe6] uppercase tracking-wider" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                className="w-full rounded-xl border-2 border-white/20 bg-black/20 backdrop-blur-sm px-4 py-3 text-[#d5dbe6] placeholder-[#d5dbe6]/50 focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 shadow-lg"
                style={{ fontFamily: 'Raleway, sans-serif' }}
                placeholder="+91 9876543210"
                disabled={isSubmitting}
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="mb-3 block text-sm font-medium text-[#d5dbe6] uppercase tracking-wider" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                className="w-full rounded-xl border-2 border-white/20 bg-black/20 backdrop-blur-sm px-4 py-3 text-[#d5dbe6] placeholder-[#d5dbe6]/50 focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 shadow-lg"
                style={{ fontFamily: 'Raleway, sans-serif' }}
                placeholder="How can we help?"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="mb-8">
              <label htmlFor="message" className="mb-3 block text-sm font-medium text-[#d5dbe6] uppercase tracking-wider" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-xl border-2 border-white/20 bg-black/20 backdrop-blur-sm px-4 py-3 text-[#d5dbe6] placeholder-[#d5dbe6]/50 focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 resize-none shadow-lg"
                style={{ fontFamily: 'Raleway, sans-serif' }}
                placeholder="Please tell us how we can assist you..."
                required
                disabled={isSubmitting}
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-white font-medium uppercase tracking-wider transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              <span className="relative z-10">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
              {!isSubmitting && (
                <FiSend className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
              )}
              {isSubmitting && (
                <div className="ml-3 w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

const ContactInfoItem = ({ icon, title, details, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75, delay }}
      className="group relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/10 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
        boxShadow: '0 20px 35px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      }}
    >
      {/* Glass background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-blue-900/10 pointer-events-none"></div>
      
      {/* Animated background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      
      <div className="relative z-10 flex items-start">
        <div className="mr-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/30 backdrop-blur-sm border border-blue-400/30 text-blue-400 group-hover:from-blue-500/30 group-hover:to-blue-600/40 transition-all duration-300 group-hover:scale-110">
          <div className="text-xl">
            {icon}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="mb-2 font-medium text-[#d5dbe6] text-lg tracking-tight group-hover:text-blue-300 transition-colors duration-300" style={{ fontFamily: 'Raleway, sans-serif' }}>
            {title}
          </h3>
          <p className="text-[#d5dbe6]/60 leading-relaxed group-hover:text-[#d5dbe6]/80 transition-colors duration-300" style={{ fontFamily: 'Raleway, sans-serif' }}>
            {details}
          </p>
        </div>
      </div>
      
      {/* Subtle animated glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
           style={{
             background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)'
           }}>
      </div>
    </motion.div>
  );
};