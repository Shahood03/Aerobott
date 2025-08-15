import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Refund Policy
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-sm text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Refund Eligibility</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We want you to be completely satisfied with your purchase. You may be eligible for a refund under the following conditions:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Request made within 30 days of purchase</li>
                <li>Product or service has not been used or downloaded</li>
                <li>Original receipt or proof of purchase is provided</li>
                <li>Product is in its original condition and packaging</li>
                <li>Account is in good standing with no violations of our terms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Non-Refundable Items</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                The following items and services are not eligible for refunds:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Digital products that have been downloaded or accessed</li>
                <li>Customized or personalized products</li>
                <li>Services that have been fully rendered</li>
                <li>Subscription fees for periods already used</li>
                <li>Gift cards and promotional credits</li>
                <li>Products purchased during special sales or clearance events</li>
                <li>Third-party products or services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Refund Process</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                To request a refund, please follow these steps:
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <ol className="list-decimal pl-6 text-gray-700 space-y-3">
                  <li>Contact our customer support team with your refund request</li>
                  <li>Provide your order number and reason for the refund</li>
                  <li>Submit any required documentation or proof of purchase</li>
                  <li>Wait for our team to review and approve your request</li>
                  <li>Follow any additional instructions provided by our support team</li>
                </ol>
              </div>
              <p className="text-gray-700 leading-relaxed">
                All refund requests will be reviewed within 3-5 business days. You will receive an email notification 
                regarding the status of your refund request.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Refund Timeline</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Once your refund request is approved, the processing time depends on your original payment method:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Credit/Debit Cards</h3>
                  <p className="text-gray-700">3-7 business days</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">PayPal</h3>
                  <p className="text-gray-700">1-3 business days</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Bank Transfer</h3>
                  <p className="text-gray-700">5-10 business days</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Store Credit</h3>
                  <p className="text-gray-700">Immediate</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Partial Refunds</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                In certain situations, we may offer partial refunds:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Products with obvious signs of use or damage</li>
                <li>Returned items missing parts or accessories</li>
                <li>Subscription cancellations with remaining unused time</li>
                <li>Services partially consumed or utilized</li>
                <li>Products returned after the standard return period but within 60 days</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Subscription Refunds</h2>
              <p className="text-gray-700 leading-relaxed">
                For subscription-based services, refunds are handled as follows: You may cancel your subscription at any time, 
                but refunds for the current billing period are only provided if the cancellation occurs within 7 days of the initial subscription 
                or renewal date and minimal usage has occurred. Unused portions of annual subscriptions may be refunded on a pro-rata basis 
                at our discretion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Shipping and Handling</h2>
              <p className="text-gray-700 leading-relaxed">
                Original shipping and handling charges are non-refundable unless the return is due to our error 
                (defective product, wrong item shipped, etc.). Customers are responsible for return shipping costs 
                unless otherwise specified. We recommend using a trackable shipping method for returns.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Exchanges</h2>
              <p className="text-gray-700 leading-relaxed">
                We offer exchanges for defective or damaged products within 30 days of purchase. 
                If you need to exchange an item, please contact our customer support team. 
                Exchanges are subject to product availability and may require additional payment if there's a price difference.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Disputed Charges</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have concerns about a charge on your account, please contact us directly before disputing the charge with your bank or credit card company. 
                We're committed to resolving billing issues quickly and fairly. Unauthorized chargebacks may result in account suspension 
                and additional fees.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Force Majeure</h2>
              <p className="text-gray-700 leading-relaxed">
                In cases of events beyond our reasonable control (natural disasters, government actions, pandemics, etc.), 
                we may need to modify our refund policy temporarily. We will communicate any such changes clearly and work with customers 
                to find fair solutions on a case-by-case basis.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Policy Changes</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify this refund policy at any time. Changes will be effective immediately upon posting 
                on our website. Your continued use of our services after any changes constitutes acceptance of the new policy. 
                We encourage you to review this policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                For refund requests or questions about this policy, please contact our customer support team:
              </p>
              <div className="mt-3 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-700">Email: refunds@yourcompany.com</p>
                <p className="text-gray-700">Phone: (555) 123-4567</p>
                <p className="text-gray-700">Support Hours: Monday-Friday, 9AM-6PM EST</p>
                <p className="text-gray-700">Address: 123 Business St, City, State 12345</p>
              </div>
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">Important Note:</h3>
                <p className="text-yellow-700">
                  Please have your order number ready when contacting support to expedite your refund request. 
                  Refund requests submitted without proper documentation may experience delays in processing.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;