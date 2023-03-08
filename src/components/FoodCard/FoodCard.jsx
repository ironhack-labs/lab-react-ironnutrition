const FoodCard = ({ name, calories, image, servings }) => {
  return (
    <div className="FoodCard">
      <p>{name}</p>
      <img src={image} alt="..." style={{ width: '150px' }} />
    </div>
  );
};

export default FoodCard;
