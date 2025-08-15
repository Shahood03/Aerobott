import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Privacy Policy
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-sm text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We collect information you provide directly to us, such as when you create an account, make a purchase, 
                or contact us for support. This may include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Name, email address, and contact information</li>
                <li>Payment information and billing details</li>
                <li>Account preferences and settings</li>
                <li>Communications with our support team</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends and usage</li>
                <li>Detect, investigate, and prevent fraudulent transactions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>With your consent:</strong> We may share your information with third parties when you give us consent to do so</li>
                <li><strong>Service providers:</strong> We may share your information with third-party service providers who perform services on our behalf</li>
                <li><strong>Legal requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities</li>
                <li><strong>Business transfers:</strong> We may share or transfer your information in connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We take reasonable measures to help protect your personal information from loss, theft, misuse, 
                and unauthorized access, disclosure, alteration, and destruction. However, no internet or electronic storage system is 100% secure, 
                so we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Cookies and Similar Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We use cookies and similar tracking technologies to collect and use personal information about you. 
                The types of cookies we use include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
                <li><strong>Performance cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functionality cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Rights and Choices</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                You have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Access:</strong> You can request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> You can ask us to correct inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> You can request that we delete your personal information</li>
                <li><strong>Portability:</strong> You can request a copy of your data in a structured format</li>
                <li><strong>Opt-out:</strong> You can opt out of receiving marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We retain personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, 
                unless a longer retention period is required or permitted by law. When we no longer need your personal information, 
                we will securely delete or anonymize it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices 
                or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information 
                from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, 
                please contact us so we can delete such information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. 
                These countries may have different data protection laws than your country. 
                We take steps to ensure that your information receives adequate protection wherever it is processed.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page 
                and updating the "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="mt-3 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-700">Email: privacy@yourcompany.com</p>
                <p className="text-gray-700">Phone: (555) 123-4567</p>
                <p className="text-gray-700">Address: 123 Business St, City, State 12345</p>
                <p className="text-gray-700">Data Protection Officer: dpo@yourcompany.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;