import { useState } from "react";
import { Product } from "../product/Product";
import { Popup } from "../popup/Popup";

import "./products.css";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // TODO: FETCH ALL PRODUCTS

  const openDetails = (id) => {
    setIsOpen(true);
    setProductDetails(id);
  };

  const closeDetails = () => {
    setIsOpen(false);
    setProductDetails(null);
  };

  return (
    <div className='main'>
      {products.map((product) => (
        <Product openDetails={openDetails} product={product} key={product.id} />
      ))}
      <Popup id={productDetails} isOpen={isOpen} closeDetails={closeDetails} />
    </div>
  );
};
