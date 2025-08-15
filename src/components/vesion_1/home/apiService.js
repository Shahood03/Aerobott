// apiService.js

/**
 * Fetches products with pagination, search, and sorting
 * 
 * @param {number} page Current page number
 * @param {number} limit Items per page
 * @param {string} search Search query
 * @param {string} sortBy Field to sort by
 * @param {string} sortDir Sort direction ('asc' or 'desc')
 * @returns {Promise<Object>} Promise that resolves to product data
 */
const baseurl=process.env.REACT_APP_API_URL;
export const fetchProducts = async (page = 1, limit = 10, search = '', sortBy = 'no', sortDir = 'asc') => {
  try {
    // Build query parameters
    const params = new URLSearchParams({
      page,
      limit,
      sort_by: sortBy,
      sort_dir: sortDir
    });
    
    // Add search parameter only if it's not empty
    if (search && search.trim() !== '') {
      params.append('search', search);
    }
    
    const response = await fetch(`${baseurl}/api/products/?${params.toString()}`);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

/**
 * Creates a new product
 * 
 * @param {Object} productData Product data object
 * @returns {Promise<Object>} Promise that resolves to the created product
 */

export const createProduct = async (productData) => {
  try {
    // Create form data for file upload
    const formData = new FormData();
    
    // Add all product data to form
    for (const key in productData) {
      if (key === 'image' && productData[key]) {
        formData.append('image', productData[key]);
      } else if (productData[key] !== undefined) {
        formData.append(key, productData[key]);
      }
    }
    
    const response = await fetch(`${baseurl}/api/products/`, {
      method: 'POST',
      body: formData,
      // Don't set Content-Type header when using FormData
      // It will be set automatically including the boundary
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

/**
 * Updates an existing product
 * 
 * @param {string} productId ID of the product to update
 * @param {Object} productData Updated product data
 * @returns {Promise<Object>} Promise that resolves to the updated product
 */
export const updateProduct = async (productId, productData) => {
  try {
    // Create form data for file upload
    const formData = new FormData();
    
    // Add all product data to form
    for (const key in productData) {
      if (key === 'image' && productData[key]) {
        formData.append('image', productData[key]);
      } else if (productData[key] !== undefined) {
        formData.append(key, productData[key]);
      }
    }
    
    const response = await fetch(`${baseurl}/api/products/${productId}`, {
      method: 'PUT',
      body: formData,
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error updating product ${productId}:`, error);
    throw error;
  }
};

/**
 * Deletes a product
 * 
 * @param {string} productId ID of the product to delete
 * @returns {Promise<Object>} Promise that resolves to the delete response
 */
export const deleteProduct = async (productId) => {
  try {
    const response = await fetch(`${baseurl}/api/products/${productId}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error deleting product ${productId}:`, error);
    throw error;
  }
};

// Add this to your apiService.js file
export const fetchProductById = async (productId) => {
  try {
    const response = await fetch(`${baseurl}/api/products/${productId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product details');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};