export const Rating = ({ rating }) => {
  const createStars = (rating) => {
    let stars = "";
    for (let i = 0; i < rating; i++) {
      stars += "⭐";
    }
    return stars;
  };

  return createStars(Math.floor(rating));
};
