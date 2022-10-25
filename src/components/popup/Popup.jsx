import { useState } from "react";
import { Rating } from "../rating/Rating";
import "./popup.css";
export const Popup = ({ id, isOpen, closeDetails }) => {
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  // TODO: Fetch one product's full details

  if (!isOpen) return null;
  if (!product) return <div className='popup'>loading...</div>;

  const {
    title,
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
        <img src={mainImage} alt='thumbnail'></img>
        <div className='popup-text-container'>
          <h2>{title}</h2>
          <h3>{category}</h3>
          <p>
            <Rating rating={rating} /> {rating}
          </p>
          <p>{description}</p>
          <p className='price'>
            Price: ${((price * (100 - discountPercentage)) / 100).toFixed(0)} |
            <span>$Before {price}</span>
          </p>
          <div className='popup-galery'>
            {images.map((image) => (
              <div className='galery-image'>
                <button onClick={() => setMainImage(image)}>
                  <img src={image} alt='galery' key={image} />
                </button>
                <div className='galrey-layer'></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
