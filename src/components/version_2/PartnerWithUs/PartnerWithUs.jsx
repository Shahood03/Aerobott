import React from 'react';
import Banner from './Banner';
import SimplicityFAQ from './SimplicityFAQ';
import Contact from './Contact';
import WhyPartner from './WhyPartner';

const PartnerWithUs = () => {
  return (
    <>
      {/* Font styling (font loaded globally in index.html or _document.js) */}
      <style jsx global>{`
        .font-raleway {
          font-family: 'Raleway', sans-serif;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-raleway">
        <Banner />
        
        {/* Partnership Form Section */}
        <section id="contact">
          <Contact />
        </section>

        {/* Why Partner with Us Section */}
        <section id="why-partner">
          <WhyPartner />
        </section>

        {/* FAQ Section */}
        <SimplicityFAQ />
      </div>
    </>
  );
};

export default PartnerWithUs;
