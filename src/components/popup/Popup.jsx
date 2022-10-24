import { useEffect, useState } from "react";
import { Rating } from "../rating/Rating";
import "./popup.css";
export const Popup = ({ id, isOpen, closeDetails }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async (id) => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE}/product/${id}`
        );

        const { product } = await response.json();
        console.log(product);
        setProduct(product);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct(id);
  }, [id]);

  if (!isOpen) return null;
  if (!product) return <div className='popup'>loading...</div>;

  const {
    title,
    thumbnail,
    description,
    category,
    price,
    discountPercentage,
    images,
    rating,
  } = product;

  return (
    <>
      <button className='layer' onClick={closeDetails}></button>
      <div className='popup'>
        <div className='button-container'>
          <button onClick={closeDetails}>
            <i class='fas fa-times' />
          </button>
        </div>
        <img src={thumbnail} alt='thumbnail'></img>
        <div className='popup-text-container'>
          <h2>{title}</h2>
          <h3>{category}</h3>
          <p>
            <Rating rating={rating} /> {rating}
          </p>
          <p>{description}</p>
          <p className='price'>
            Price: {((price * (100 - discountPercentage)) / 100).toFixed(0)}$ |
            <span>Before {price}$</span>
          </p>
          <div className='popup-galery'>
            {images.slice(1).map((image) => (
              <img src={image} alt='galery' key={image} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
