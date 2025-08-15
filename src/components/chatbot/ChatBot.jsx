import React, { useState, useRef, useEffect } from "react";

// Enhanced ChatBot component for Aerobott with PNG image support
const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! Welcome to Aerobott! I can help you with information about our drone products, services, training programs, DaaS solutions, and more. How can I assist you today?", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messageEndRef = useRef(null);

  // Comprehensive response database based on Aerobott website
const botResponses = {
    // Technical Support
    "support": "Technical Support:\n\nOur support team helps with:\n• Product troubleshooting\n• Training assistance\n• Service consultations\n• Technical specifications\n• Maintenance guidance\n\nSupport Line: +91 9004711184\nEmail: info@aerobott.com\nHours: Mon-Fri: 9AM-6PM\n\nWhat technical help do you need?",
    
    "maintenance": "Drone Repair & Maintenance:\n\nCourse Available: 4.7/5 rating\n• Troubleshooting common issues\n• Routine maintenance procedures\n• Component replacement\n• Performance optimization\n• Hands-on workshop training\n\nProfessional Services:\n• On-site maintenance\n• Spare parts supply\n• Technical support\n\nKeep your drones in top condition! Need maintenance help?",
    
    // Greetings
    "hello": "Hi there! Welcome to Aerobott - pioneers of AI-powered drone innovation! How can I help you explore our drone solutions today?",
    "hi": "Hello! I'm here to help you with information about Aerobott's cutting-edge drone technology. What would you like to know?",
    "hey": "Hey! Welcome to Aerobott! I can assist you with our products, services, training programs, or DaaS solutions. What interests you?",
    
    // General Help
    "help": "I can help you with:\n• Drone Products (FLYT-I, Survey Master Pro, Aero Agri)\n• Industry Solutions (Agriculture, Defense, Construction)\n• Training Courses (DGCA Certified programs)\n• DaaS (Drone-as-a-Service)\n• Contact Information & Booking\n\nWhat would you like to explore?",
    
    // Products
    "products": "Aerobott offers cutting-edge drone products:\n\nFLYT-I Training Drone - 4K camera, perfect for beginners\nSurvey Master Pro - Professional mapping with LiDAR, 45-min flight time\nAero Agri - Agricultural spraying drone with AI and 20L capacity\n\nAll feature advanced AI technology and high-resolution sensors. Which product interests you?",
    
    "flyt": "FLYT-I Training Drone\n• 4K resolution camera with auto-optimization\n• Perfect for training and learning\n• Affordable price range\n• User-friendly controls\n• Great for aerial photography beginners\n\nWould you like pricing information or want to know more about training programs?",
    
    "survey": "Survey Master Pro\n• Professional-grade mapping drone\n• Advanced LiDAR sensors\n• 45-minute extended flight time\n• Perfect for large-scale projects\n• High-precision data collection\n• Ideal for construction & surveying\n\nInterested in a demo or technical specifications?",
    
    "aero agri": "Aero Agri Agricultural Drone\n• 20L high-capacity tank\n• 8-12 hectares/hour coverage\n• 18-22 minutes flight time\n• AI-powered autonomous spraying\n• IP67 weather protection\n• Hot-swappable batteries\n• GPS precision spraying\n\nPerfect for precision agriculture! Want to know about agricultural services?",
    
    "agriculture": "Aerobott Agriculture Solutions:\n• 500+ farms served with 25% yield increase\n• NDVI Mapping for crop health monitoring\n• Thermal Imaging for irrigation optimization\n• Precision Spraying with Aero Agri drone\n• Smart Irrigation - 40% water savings\n• Pest Detection and early warning systems\n• AI-powered yield prediction - 85% accuracy\n\nOur solutions have helped farmers reduce costs by 30%! Interested in a farm analysis?",
    
    "precision agriculture": "Precision Agriculture with Aerobott:\n• Crop Health Monitoring - 95% accuracy with millimeter precision\n• Smart Irrigation - 40% water savings through thermal imaging\n• Yield Prediction - AI-powered forecasting with 85% accuracy\n• NDVI Mapping for vegetation health analysis\n• Multispectral Analysis for comprehensive crop evaluation\n• Early pest detection and disease identification\n\nTransform your farming with our 4-step process! Want to see how it works?",
    
    // Services & Industries
    "services": "Aerobott provides comprehensive drone services across industries:\n\nAgriculture - Crop monitoring, precision spraying\nConstruction - Site surveys, progress monitoring\nEnergy & Utilities - Infrastructure inspection\nDefense - Tactical reconnaissance, security\nSecurity & Surveillance - Autonomous patrols\nMining - Stockpile analysis, pit mapping\nGIS & Mapping - High-precision surveying\n\nWhich industry solution interests you?",
    
    "defense": "Defense Solutions:\n• Military-grade UAV systems\n• Tactical reconnaissance capabilities\n• Perimeter security monitoring\n• Intelligence gathering in harsh environments\n• Advanced surveillance technology\n• Real-time threat assessment\n\nOur defense systems are built for reliability and precision. Need more technical details?",
    
    "construction": "Construction & Infrastructure:\n• Aerial site surveys and progress monitoring\n• 3D mapping and volumetric measurements\n• Safety inspections and hazard assessment\n• Real-time site analysis\n• Cost reduction and improved accuracy\n• Worker safety through remote monitoring\n\nRevolutionize your project management! Interested in a site demo?",
    
    "energy": "Energy & Utilities:\n• Power line inspection and monitoring\n• Wind turbine maintenance checks\n• Solar farm assessment with thermal imaging\n• Equipment failure detection\n• Regulatory compliance monitoring\n• Reduced inspection time and operational risks\n\nTransform your energy infrastructure monitoring! Want technical specifications?",
    
    "mining": "Mining & Metals:\n• Heavy-duty drones for harsh environments\n• Volumetric stockpile analysis\n• Pit mapping and stability monitoring\n• Inaccessible area inspection\n• Blast planning optimization\n• Environmental compliance tracking\n\nOptimize your extraction operations! Need a mining site assessment?",
    
    "gis": "GIS Surveying & Mapping:\n• High-precision drone mapping\n• Detailed topographical data collection\n• 3D model creation\n• Photogrammetry and LiDAR technology\n• Centimeter-level accuracy\n• Digital elevation models\n• Urban planning and environmental monitoring\n\nPerfect for intelligent land planning! Want mapping specifications?",
    
    "security": "Security & Surveillance:\n• Autonomous drone patrols\n• Real-time video analytics\n• 24/7 monitoring capabilities\n• Night vision and thermal imaging\n• AI-powered threat detection\n• Smart cities and border security\n• Large campus surveillance\n\nEnhance your security operations! Interested in a security assessment?",
    
    // Training Programs
    "training": "Aerobott Training Programs:\n\nDGCA Certified Courses:\n• Remote Pilot Course (Small/Medium Rotorcraft)\n• Drone Instructor Course\n• Agricultural Spraying Training\n\nSpecialized Courses:\n• Drone Manufacturing\n• AI/ML for UAVs\n• Mapping & Surveying\n• Data Processing\n• Repair & Maintenance\n• Aerial Photography\n\nAll courses available in Mumbai & Chandigarh\nWhich training interests you?",
    
    "dgca": "DGCA Certified Training Programs:\n\nRemote Pilot Course (Small Rotorcraft) - Rating 4.8/5\n• VLOS Certification\n• Best-in-class flight simulators\n• NPNT-Ready Make in India drones\n• 1-on-1 flying lessons\n• Available in Mumbai & Chandigarh\n\nDrone Instructor Course - Rating 4.8/5\n• 9-Day Train the Trainer program\n• 20 hours flying completion\n• Become DGCA-authorized instructor\n\nReady to get certified?",
    
    "drone manufacturing": "Drone Manufacturing Course - Rating 4.9/5\n• Complete manufacturing process training\n• Design, building, and testing\n• Hands-on experience\n• Quality control procedures\n• From concept to assembly\n• Available in Mumbai (Onsite)\n\nPerfect for aspiring drone manufacturers! Ready to enroll?",
    
    "ai ml": "AI/ML for UAVs Course - Rating 4.9/5\n• Cutting-edge AI integration training\n• Autonomous navigation development\n• Object detection and data analysis\n• Machine learning for drones\n• Computer vision applications\n• Real-time data processing\n• Available in Mumbai (Onsite)\n\nLead the future of drone technology! Interested in enrollment?",
    
    "mapping": "Mapping, Modeling & Surveying Course - Rating 4.8/5\n• Precision surveying with drones\n• 3D modeling techniques\n• Geospatial data processing\n• Industry-standard software training\n• Project planning and execution\n• Perfect for construction & agriculture professionals\n\nAvailable in Mumbai (Hybrid). Want to enroll?",
    
    // DaaS (Drone-as-a-Service)
    "daas": "Aerobott DaaS - Drone-as-a-Service:\n\nUnlock aerial intelligence without ownership costs!\n\nLow Investment, High Impact - Pay only for usage\nScalable On-Demand Fleet - From 5 farms to 50 sites\nExpert-Led Execution - DGCA-certified pilots\nMinimized Risk - We handle compliance & safety\nTailored Solutions - Customized for your industry\n\nNo hardware to buy. No teams to train. Just results!\nInterested in a DaaS consultation?",
    
    "drone as a service": "Drone-as-a-Service Benefits:\n• Zero upfront investment in drones or equipment\n• No training required - expert pilots provided\n• Flexible scaling based on project needs\n• Complete compliance handling - airspace permissions included\n• Custom analytics dashboards for your industry\n• End-to-end mission management\n\nAvailable for Agriculture, Construction, Energy, Security, Mining, and GIS applications. Ready to get started?",
    
    // Technical Specifications
    "specifications": "Technical Specifications Available:\n\nFLYT-I: 4K camera, training-optimized\nSurvey Master Pro: LiDAR, 45-min flight, mapping-grade\nAero Agri: 20L capacity, IP67, 22-min flight, 12Ha/hr coverage\n\nWhich product specs do you need? I can provide detailed technical information!",
    
    "flight time": "Flight Time Specifications:\n• FLYT-I: Standard training flight time\n• Survey Master Pro: Extended 45-minute operation\n• Aero Agri: 18-22 minutes with heavy payload\n\nAll drones feature smart battery management and hot-swappable batteries for extended operations. Need more details?",
    
    // Pricing and Sales
    "price": "Pricing Information:\n\nOur drone prices vary based on:\n• Product specifications and features\n• Training package inclusions\n• Service requirements\n• Volume discounts available\n\nFor detailed pricing on FLYT-I, Survey Master Pro, or Aero Agri, please contact our sales team or request a personalized quote. Which product interests you?",
    
    "cost": "Cost Benefits with Aerobott:\n• 25% yield increase in agriculture\n• 30% cost reduction in operations\n• 40% water savings with smart irrigation\n• 60% time savings in field surveys\n\nOur solutions pay for themselves! Want a cost-benefit analysis for your specific use case?",
    
    "buy": "Ready to Purchase?\n\nTo buy our drones or book services:\nCall: +91 9004711184\nEmail: info@aerobott.com\nVisit: Hotel Sahara Star, Mumbai\nWebsite: Contact form available\n\nOur team will help you choose the perfect solution. Which product interests you most?",
    
    "demo": "Request a Demo:\n\nSee our drones in action!\n• Live flight demonstrations\n• Agricultural spraying demos\n• Mapping and surveying showcases\n• Training program previews\n\nContact: +91 9004711184\nEmail: info@aerobott.com\n\nWhich type of demo would you like to see?",
    
    // Contact Information
    "contact": "Contact Aerobott:\n\nOffice: Hotel Sahara Star, North Tower Ground Floor, Vile Parle, Mumbai, Maharashtra 400099\nPhone: +91 9004711184\nEmail: info@aerobott.com\nHours: Mon-Fri: 9AM-6PM\n\nQuick Response: We respond to all inquiries within 24 hours!\nHow can we help you today?",
    
    "location": "Aerobott Location:\n\nHotel Sahara Star, North Tower Ground Floor\nChhatrapati Shivaji International Airport Area\n70-C, Nehru Road, Navpada\nVile Parle, Mumbai, Maharashtra 400099\n\nNear Mumbai Airport for easy access!\nPlanning a visit?",
    
    "phone": "Call Aerobott:\n+91 9004711184\n\nBest times to call: Mon-Fri, 9AM-6PM\nFor urgent inquiries, we're available via email: info@aerobott.com\n\nWhat would you like to discuss?",
    
    "email": "Email Aerobott:\ninfo@aerobott.com\n\nWe respond to all emails within 24 hours!\nFor immediate assistance, call: +91 9004711184\n\nWhat information do you need?",
    
    // Booking
    "booking": "Book with Aerobott:\n\nAvailable Services:\n• Training course enrollment\n• Product demonstrations\n• Service consultations\n• DaaS project planning\n• Agricultural surveys\n• Site assessments\n\nCall: +91 9004711184\nEmail: info@aerobott.com\n\nWhat would you like to book?",
    
    "enroll": "Course Enrollment:\n\nReady to enroll in our training programs?\n• DGCA Certified Courses\n• Specialized Technical Training\n• Industry-Specific Programs\n\nAvailable in Mumbai & Chandigarh\n\nContact: +91 9004711184\nEmail: info@aerobott.com\n\nWhich course interests you?",
    
    // Company Information
    "about": "About Aerobott:\n\nEstablished 2021 - Pioneers of AI-powered drone innovation!\n\nOur Mission: Building the future of intelligent flight with scalable solutions for India and the world.\n\nKey Stats:\n• 500+ farms served\n• 5,000+ newsletter subscribers\n• Trusted by professionals nationwide\n• Leading drone technology company\n\nWe're not just building drones - we're building the future!",
    
    "company": "Aerobott Company:\n\nIndustry Leader in AI-powered drone technology\nComprehensive Ecosystem of products and services\nMulti-Industry Applications across sectors\nExpert Team of DGCA-certified professionals\nInnovation-Driven with cutting-edge R&D\n\nTrusted by 500+ customers for drone solutions. Want to join our success stories?",
    
    // Default responses
    "default": "For more information, feel free to contact our expert team:\n\nConnect with Expert: +91 9004711184\nEmail: info@aerobott.com\nAvailable: Mon–Fri, 9 AM–6 PM\n\nI understand you're looking for specific information! While I have extensive knowledge about Aerobott's products and services, I want to ensure you get the most accurate and detailed answer.\n\nI can help with:\nProducts: FLYT-I, Survey Master Pro, Aero Agri\nAgriculture: Precision farming solutions\nTraining: DGCA certified courses\nDaaS: Drone-as-a-Service solutions\nIndustries: Defense, Construction, Energy, Mining\n\nCould you please rephrase your question, or would you like me to connect you with our specialist team?",
    
    // Additional helpful responses
    "why aerobott": "Why Choose Aerobott?\n\nAdvanced AI Technology - Cutting-edge intelligence\nExtended Flight Time - Up to 45 minutes operation\nHigh-Resolution Sensors - Crystal-clear imagery\nDGCA Certified Training - Professional expertise\nComprehensive Ecosystem - End-to-end solutions\n500+ Satisfied Customers - Proven track record\n\nWe're the pioneers of AI-powered drone innovation!",
    
    "benefits": "Aerobott Benefits:\n\nFor Agriculture: 25% yield increase, 30% cost reduction\nFor Business: Scalable solutions, expert support\nFor Training: DGCA certification, hands-on learning\nFor Operations: 60% time savings, improved accuracy\n\nNo investment risks with DaaS! Pay only for results.\nWhich benefit interests you most?"
};


  // Auto-scroll to the bottom of the chat when new messages are added
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Function to handle sending messages
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const newMessages = [...messages, { text: inputValue, isUser: true }];
    setMessages(newMessages);
    setInputValue("");

    // Show typing indicator
    setIsTyping(true);

    // Generate bot response with realistic delay
    setTimeout(() => {
      const botResponse = generateResponse(inputValue.toLowerCase());
      setIsTyping(false);
      setMessages([...newMessages, { text: botResponse, isUser: false }]);
    }, 800);
  };

  // Enhanced function to generate bot responses based on user input
  const generateResponse = (input) => {
    // Check for exact matches first
    if (botResponses[input]) {
      return botResponses[input];
    }

    // Check for keyword matches with priority order
    const keywords = Object.keys(botResponses);
    
    // High priority keywords (more specific)
    const highPriorityKeywords = [
      'aero agri', 'survey master', 'flyt-i', 'drone manufacturing', 
      'ai ml', 'precision agriculture', 'drone as a service'
    ];
    
    // Check high priority keywords first
    for (const keyword of highPriorityKeywords) {
      if (input.includes(keyword) || input.includes(keyword.replace(/\s+/g, ''))) {
        return botResponses[keyword];
      }
    }
    
    // Check all other keywords
    for (const keyword of keywords) {
      if (keyword !== 'default' && input.includes(keyword)) {
        return botResponses[keyword];
      }
    }
    
    // Special handling for common variations
    if (input.includes('farm') || input.includes('crop') || input.includes('agricultural')) {
      return botResponses['agriculture'];
    }
    if (input.includes('train') && input.includes('course')) {
      return botResponses['training'];
    }
    if (input.includes('certif')) {
      return botResponses['dgca'];
    }
    if (input.includes('repair') || input.includes('fix')) {
      return botResponses['maintenance'];
    }
    if (input.includes('quote') || input.includes('pricing')) {
      return botResponses['price'];
    }
    
    // Smart fallback responses for complex questions
    if (input.length > 50 || input.split(' ').length > 8) {
      return "That's a detailed question! I want to ensure you get comprehensive and accurate information from our technical experts.\n\n🎯 **For Complex Queries:**\n📞 **Call our Expert Team: +91 9004711184**\n📧 Email: info@aerobott.com\n⏰ Available: Mon-Fri, 9AM-6PM\n\nOur specialists can provide in-depth technical discussions, custom solutions, and detailed project consultations.\n\nIs there a simpler aspect I can help you with right now?";
    }
    
    // If no matches found, provide intelligent default response
    return botResponses.default;
  };

  // Toggle chat window
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6 flex flex-col items-center space-y-2">
      {/* WhatsApp Button - Reduced spacing */}
      <button
        onClick={() => window.open('https://wa.me/919004711184?text=Hello! I need help with Aerobott drone services.', '_blank')}
        className="transition-all duration-300 hover:scale-110 flex items-center justify-center relative"
        aria-label="Contact on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        {/* WhatsApp PNG with same size as drone */}
        <img 
          src="/images/element/wicon.png" 
          alt="WhatsApp" 
          className="h-20 w-20 sm:h-24 sm:w-24 object-contain filter drop-shadow-lg"
        />
      </button>

      {/* Chat button with PNG image - Reduced size and spacing */}
      <button
        onClick={toggleChat}
        className="transition-all duration-300 hover:scale-110 flex items-center justify-center relative"
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full p-3 sm:p-4 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        ) : (
          <div className="relative">
            {/* Reduced PNG image size */}
            <img 
              src="/images/drone/n6.png" 
              alt="Aerobott Chatbot" 
              className="h-24 w-24 sm:h-28 sm:w-28 object-contain filter drop-shadow-lg"
            />
          </div>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-72 sm:w-80 md:w-96 lg:w-[28rem] bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[80vh] sm:max-h-[85vh]">
          {/* Chat header with PNG image */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              {/* Avatar in header */}
              <img 
                src="/images/drone/n6.png" 
                alt="Aerobott Assistant" 
                className="w-8 h-8 rounded-full object-cover border-2 border-white/20"
              />
              <div>
                <h3 className="font-semibold text-sm sm:text-base">Aerobott Support</h3>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-blue-100">Online</span>
                </div>
              </div>
            </div>
            <button 
              onClick={toggleChat} 
              className="text-white hover:text-gray-200 transition-colors duration-200"
              aria-label="Close chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 p-3 sm:p-4 overflow-y-auto max-h-80 sm:max-h-96 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                {/* Bot avatar */}
                {!message.isUser && (
                  <div className="mr-2 flex-shrink-0">
                    <img 
                      src="/images/drone/n6.png" 
                      alt="Bot" 
                      className="w-6 h-6 rounded-full object-cover"
                    />
                  </div>
                )}
                
                <div
                  className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg max-w-[85%] break-words text-sm sm:text-base ${
                    message.isUser
                      ? "bg-blue-600 text-white rounded-br-none shadow-md"
                      : "bg-gray-100 text-gray-800 rounded-bl-none shadow-sm border"
                  }`}
                >
                  <div className="whitespace-pre-line">{message.text}</div>
                </div>
              </div>
            ))}
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="mr-2 flex-shrink-0">
                  <img 
                    src="/images/drone/n6.png" 
                    alt="Bot" 
                    className="w-6 h-6 rounded-full object-cover"
                  />
                </div>
                <div className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg rounded-bl-none border flex items-center space-x-1">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <span className="ml-2 text-sm">Typing...</span>
                </div>
              </div>
            )}
            
            <div ref={messageEndRef} />
          </div>

          {/* Quick action buttons */}
          <div className="px-3 sm:px-4 py-2 bg-gray-50 border-t">
            <div className="flex flex-wrap gap-1 mb-2">
              {['Products', 'Training', 'Agriculture', 'DaaS', 'Contact'].map((action) => (
                <button
                  key={action}
                  onClick={() => {
                    const newMessages = [...messages, { text: action, isUser: true }];
                    setMessages(newMessages);
                    setIsTyping(true);
                    setTimeout(() => {
                      const botResponse = generateResponse(action.toLowerCase());
                      setIsTyping(false);
                      setMessages([...newMessages, { text: botResponse, isUser: false }]);
                    }, 600);
                  }}
                  className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors duration-200"
                >
                  {action}
                </button>
              ))}
            </div>
            <div className="text-center">
              <button
                onClick={() => window.open('tel:+919004711184', '_self')}
                className="inline-flex items-center space-x-1 text-xs text-green-600 hover:text-green-800 font-medium transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Need Expert Help? Call +91 9004711184</span>
              </button>
            </div>
          </div>

          {/* Chat input */}
          <div className="border-t border-gray-200 p-3 sm:p-3 flex">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about drones, training, services..."
              className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={isTyping}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSendMessage(e);
                }
              }}
            />
            <button
              onClick={handleSendMessage}
              disabled={isTyping || !inputValue.trim()}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-3 sm:px-4 py-2 rounded-r-lg transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;