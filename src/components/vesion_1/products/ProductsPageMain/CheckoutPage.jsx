import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'credit'
  });
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  useEffect(() => {
    // Get products and total price from location state (from DetailProductPage)
    if (location.state?.products && location.state?.totalPrice) {
      setProducts(location.state.products);
      setTotalPrice(location.state.totalPrice);
    } else {
      // If no products in state, redirect back to products page
      navigate('/products');
    }
  }, [location, navigate]);

  // Format price to Indonesian Rupiah
  const formatPrice = (price) => {
    return `Rp${Number(price).toLocaleString()}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Basic validation
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'Postal code is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsProcessing(true);
      
      // Simulate order processing
      setTimeout(() => {
        setIsProcessing(false);
        setIsOrderComplete(true);
      }, 2000);
    }
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  return (
    <div className="bg-gray-900 pt-20 min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back button */}
        <div className="mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-orange-500 hover:text-orange-300 transition duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Product
          </button>
        </div>

        <h1 className="text-4xl font-bold text-orange-500 mb-8 text-center">Checkout</h1>

        {/* Order Complete Message */}
        {isOrderComplete ? (
          <div className="bg-gray-800 rounded-3xl p-8 text-center max-w-3xl mx-auto">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-green-500 mb-4">Order Successful!</h2>
            <p className="text-gray-300 mb-8">
              Thank you for your purchase. Your order has been placed successfully.
              We'll send a confirmation email to {formData.email} with your order details.
            </p>
            <button 
              onClick={handleContinueShopping}
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition duration-300"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="lg:flex lg:gap-8">
            {/* Checkout Form */}
            <div className="lg:w-2/3">
              <div className="bg-gray-800 rounded-3xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full bg-gray-700 border ${errors.firstName ? 'border-red-500' : 'border-gray-600'} rounded-lg p-3 text-white focus:outline-none focus:border-orange-500`}
                      />
                      {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full bg-gray-700 border ${errors.lastName ? 'border-red-500' : 'border-gray-600'} rounded-lg p-3 text-white focus:outline-none focus:border-orange-500`}
                      />
                      {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full bg-gray-700 border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-lg p-3 text-white focus:outline-none focus:border-orange-500`}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full bg-gray-700 border ${errors.phone ? 'border-red-500' : 'border-gray-600'} rounded-lg p-3 text-white focus:outline-none focus:border-orange-500`}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={`w-full bg-gray-700 border ${errors.address ? 'border-red-500' : 'border-gray-600'} rounded-lg p-3 text-white focus:outline-none focus:border-orange-500`}
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`w-full bg-gray-700 border ${errors.city ? 'border-red-500' : 'border-gray-600'} rounded-lg p-3 text-white focus:outline-none focus:border-orange-500`}
                      />
                      {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="postalCode" className="block text-sm font-medium text-gray-300 mb-2">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className={`w-full bg-gray-700 border ${errors.postalCode ? 'border-red-500' : 'border-gray-600'} rounded-lg p-3 text-white focus:outline-none focus:border-orange-500`}
                      />
                      {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Payment Method</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          id="creditCard"
                          name="paymentMethod"
                          type="radio"
                          value="credit"
                          checked={formData.paymentMethod === 'credit'}
                          onChange={handleInputChange}
                          className="h-5 w-5 text-orange-500 focus:ring-orange-500 border-gray-600 bg-gray-700"
                        />
                        <label htmlFor="creditCard" className="ml-3 block text-gray-300">
                          Credit Card
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          id="paypal"
                          name="paymentMethod"
                          type="radio"
                          value="paypal"
                          checked={formData.paymentMethod === 'paypal'}
                          onChange={handleInputChange}
                          className="h-5 w-5 text-orange-500 focus:ring-orange-500 border-gray-600 bg-gray-700"
                        />
                        <label htmlFor="paypal" className="ml-3 block text-gray-300">
                          PayPal
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          id="bankTransfer"
                          name="paymentMethod"
                          type="radio"
                          value="bank"
                          checked={formData.paymentMethod === 'bank'}
                          onChange={handleInputChange}
                          className="h-5 w-5 text-orange-500 focus:ring-orange-500 border-gray-600 bg-gray-700"
                        />
                        <label htmlFor="bankTransfer" className="ml-3 block text-gray-300">
                          Bank Transfer
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-gray-800 rounded-3xl p-8 sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  {products.map((product) => (
                    <div key={product._id} className="flex justify-between">
                      <div>
                        <h3 className="font-medium">{product.name}</h3>
                        <p className="text-sm text-gray-400">Quantity: {product.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p>{formatPrice(product.price * product.quantity)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-700 pt-4 mb-6">
                  <div className="flex justify-between mb-2">
                    <p>Subtotal</p>
                    <p>{formatPrice(totalPrice)}</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p>Shipping</p>
                    <p>{totalPrice >= 1000000 ? 'Free' : formatPrice(50000)}</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p>Tax (10%)</p>
                    <p>{formatPrice(totalPrice * 0.1)}</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-700 pt-4 mb-8">
                  <div className="flex justify-between">
                    <p className="text-xl font-bold">Total</p>
                    <p className="text-xl font-bold text-orange-500">
                      {formatPrice(totalPrice + (totalPrice >= 1000000 ? 0 : 50000) + (totalPrice * 0.1))}
                    </p>
                  </div>
                </div>
                
                <button 
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isProcessing}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-full transition duration-300 flex items-center justify-center"
                >
                  {isProcessing ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : 'Complete Order'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;