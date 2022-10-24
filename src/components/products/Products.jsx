import { useEffect, useState } from "react";
import { Product } from "../product/Product";
import { Popup } from "../popup/Popup";

import "./products.css";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openDetails = (id) => {
    setIsOpen(true);
    setProductDetails(id);
  };

  const closeDetails = () => {
    setIsOpen(false);
    setProductDetails(null);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      console.log(process.env.API_BASE);
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE}/products`
        );
        const { products } = await response.json();

        setProducts(products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className='main'>
      {products.map((product) => (
        <Product openDetails={openDetails} product={product} key={product.id} />
      ))}
      <Popup id={productDetails} isOpen={isOpen} closeDetails={closeDetails} />
    </div>
  );
};
