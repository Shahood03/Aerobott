import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../../home/apiService';
const baseurl = process.env.REACT_APP_API_URL;

const DetailProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        const data = await fetchProductById(productId);
        setProduct(data);
        setLoading(false);
        // Trigger description animation after content loads
        setTimeout(() => setShowDescription(true), 300);
      } catch (err) {
        console.error("Error loading product details:", err);
        setError('Failed to load product details. Please try again later.');
        setLoading(false);
      }
    };
    loadProduct();
  }, [productId]);

  // Format price to Indonesian Rupiah
  const formatPrice = (price) => {
    return `Rp${Number(price).toLocaleString()}`;
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    // Here you would add logic to add the product to cart
    // For now, we'll just show a success animation
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    // Here you would add logic to process the purchase
    // For now, we'll just navigate to a hypothetical checkout page
    navigate('/checkout', { 
      state: { 
        products: [{ ...product, quantity }],
        totalPrice: product.price * quantity
      } 
    });
  };

  return (
    <div className="bg-gray-50 pt-20 min-h-screen font-sans text-gray-800">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-8 py-4">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 transition duration-300 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">Back to Products</span>
        </button>
      </div>

      {/* Error display */}
      {error && (
        <div className="max-w-7xl mx-auto px-8 mb-8">
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded shadow-sm">
            {error}
          </div>
        </div>
      )}

      {/* Loading indicator */}
      {loading && (
        <div className="max-w-7xl mx-auto px-8 py-16 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-700"></div>
          <p className="mt-4 text-xl text-gray-600">Loading product details...</p>
        </div>
      )}

      {/* Product details */}
      {!loading && product && (
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:shadow-lg">
            <div className="md:flex">
              {/* Product image */}
              <div className="md:w-1/2 relative overflow-hidden bg-gray-100">
                <div className={`h-96 flex items-center justify-center ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
                  {product.has_image ? (
                    <img
                      src={baseurl+`/api/products/image/${product._id}`}
                      alt={product.name}
                      className="object-contain h-full w-full transform hover:scale-105 transition duration-700 ease-in-out"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = ""; 
                        e.target.parentElement.innerHTML = "<div class='text-gray-400 text-center text-xl'>Image not available</div>";
                      }}
                      onLoad={() => setImageLoaded(true)}
                    />
                  ) : (
                    <div className="text-gray-400 text-xl">No image available</div>
                  )}
                </div>
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-400"></div>
                  </div>
                )}
              </div>
              
              {/* Product info */}
              <div className="md:w-1/2 p-8 md:p-12">
                <div className={`mb-4 transform transition-all duration-500 ${showDescription ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <span className="inline-block bg-gray-800 text-white px-3 py-1 text-sm font-semibold rounded-md mb-2">
                    Featured
                  </span>
                </div>
                <h1 className={`text-3xl font-bold text-gray-800 mb-4 uppercase tracking-wide transform transition-all duration-500 delay-100 ${showDescription ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  {product.name}
                </h1>
                <p className={`text-3xl font-bold text-gray-800 mb-6 transform transition-all duration-500 delay-200 ${showDescription ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  {formatPrice(product.price)}
                </p>
                
                <div className={`border-t border-gray-200 my-6 pt-6 transform transition-all duration-500 delay-300 ${showDescription ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <h3 className="text-lg font-semibold mb-4 text-gray-700">Description</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description || 'No description available for this product.'}
                  </p>
                </div>
                
                {/* Quantity selector */}
                <div className={`mb-8 transform transition-all duration-500 delay-400 ${showDescription ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center">
                    <button 
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-l focus:outline-none transition duration-300"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      value={quantity}
                      onChange={handleQuantityChange}
                      min="1"
                      className="bg-gray-100 text-gray-700 text-center w-16 py-2 focus:outline-none border-x border-gray-200"
                    />
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-r focus:outline-none transition duration-300"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                {/* Action buttons */}
                <div className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 transform transition-all duration-500 delay-500 ${showDescription ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <button 
                    onClick={handleAddToCart}
                    className={`relative overflow-hidden ${
                      addedToCart ? 'bg-green-600' : 'bg-gray-200 hover:bg-gray-300'
                    } text-${addedToCart ? 'white' : 'gray-800'} font-medium py-3 px-6 rounded-md transition duration-300 flex-1 flex items-center justify-center group`}
                    disabled={addedToCart}
                  >
                    <span className={`absolute inset-0 w-0 bg-gray-800 transition-all duration-500 ease-out ${addedToCart ? '' : 'group-hover:w-full'}`}></span>
                    <span className="relative flex items-center justify-center">
                      {addedToCart ? (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Added to Cart
                        </>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition duration-300 transform group-hover:scale-110" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                          </svg>
                          <span className="group-hover:text-white transition duration-300">Add to Cart</span>
                        </>
                      )}
                    </span>
                  </button>
                  <button 
                    onClick={handleBuyNow}
                    className="relative overflow-hidden bg-gray-800 text-white font-medium py-3 px-6 rounded-md transition duration-300 flex-1 flex items-center justify-center group"
                  >
                    <span className="absolute inset-0 w-0 bg-gray-700 transition-all duration-500 ease-out group-hover:w-full"></span>
                    <span className="relative flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition duration-300 transform group-hover:scale-110" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      Buy Now
                    </span>
                  </button>
                </div>
                
                {/* Additional info */}
                <div className={`mt-8 text-sm text-gray-500 transform transition-all duration-500 delay-600 ${showDescription ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <p className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Free shipping for orders over Rp1,000,000
                  </p>
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    30-day money-back guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related products section */}
          <div className="mt-16 opacity-0 animate-fadeIn" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
            <h2 className="text-2xl font-bold text-gray-800 mb-8 uppercase tracking-wide">You May Also Like</h2>
            {/* This would be populated with actual related products */}
            <div className="text-center text-gray-500 py-8 border border-gray-200 rounded-lg bg-white shadow-sm">
              Related products would be displayed here
            </div>
          </div>
        </div>
      )}

      {/* Add custom animation keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default DetailProductPage;