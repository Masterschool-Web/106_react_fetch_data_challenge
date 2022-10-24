import "./product.css";

export const Product = ({ product, openDetails }) => {
  const { discountPercentage, priceBeforeDiscount, title, thumbnail, id } =
    product;

  return (
    <div className='card' key={id}>
      <img src={thumbnail} alt='product thumbnail' />
      <div className='text-container'>
        <h2>{title}</h2>
        <p className='price'>
          Price now :{" "}
          {((priceBeforeDiscount * (100 - discountPercentage)) / 100).toFixed(
            0
          )}
          $ |<span> Before {priceBeforeDiscount}$</span>
        </p>
        <div className='button-container'>
          <button onClick={() => openDetails(id)}>Show More</button>
        </div>
      </div>
    </div>
  );
};
