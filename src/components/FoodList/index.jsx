import './index.css';

export const FoodList = ({ foods }) => {
  return (
    <div className="FoodList">
      <h1>Food List</h1>
      {foods.map((food) => {
        return (
          <>
            <h4>{food.name}</h4>
            <img src={food.image} alt="Img" />
          </>
        );
      })}
    </div>
  );
};
