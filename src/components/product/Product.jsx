import "./product.css";

export const Product = ({ product, openDetails }) => {
  const { discountPercentage, priceBeforeDiscount, title, thumbnail, id } =
    product;

  return (
    <div className='card' key={id}>
      <img src={thumbnail} alt='product thumbnail' />
      <div className='text-container'>
        <h2>{title}</h2>
        <p>
          {((priceBeforeDiscount * (100 - discountPercentage)) / 100).toFixed(
            0
          )}
          <span> {priceBeforeDiscount}</span>
        </p>
        <div>
          <button onClick={() => openDetails(id)}>Show More</button>
        </div>
      </div>
    </div>
  );
};
