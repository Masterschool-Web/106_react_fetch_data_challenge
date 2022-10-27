import { useEffect, useState } from "react";
import { Product } from "../product/Product";
import { Popup } from "../popup/Popup";

import "./products.css";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // TODO: FETCH ALL PRODUCTS

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:4000/products");
      const data = await response.json();

      setProducts(data.products);
    } catch (err) {
      console.log(err);
    }
  };

  // React rendering process
  // return (HTML) -> useEffects -> state -> rerender HTML

  useEffect(() => {
    // fetchProducts();
    // Empty [] => run once

    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const openDetails = (id) => {
    setIsOpen(true);
    setProductId(id);
  };

  const closeDetails = () => {
    setIsOpen(false);
    setProductId(null);
  };

  return (
    <div className='main'>
      {products.length === 0 && <div>loading...</div>}
      {products.map((product) => (
        <Product openDetails={openDetails} product={product} key={product.id} />
      ))}
      {isOpen && (
        <Popup id={productId} isOpen={isOpen} closeDetails={closeDetails} />
      )}
    </div>
  );
};
