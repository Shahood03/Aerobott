import React from 'react';
import ProductsPage from "../../home/ProductsPage";
// Don't import DetailProductPage here since it's handled by the Router

function ProductsPageMain() {
  return (
    <div className="products-page-container">
      <ProductsPage />
    </div>
  );
}

export default ProductsPageMain;