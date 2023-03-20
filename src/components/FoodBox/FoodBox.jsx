import Button from '../Button/Button';
import './FoodBox.css';

const FoodBox = ({ name, calories, image, servings }) => {
  return (
    <div className="FoodBox h-100">
      <div className="card" style={{ width: '18rem' }}>
        <h4 className="card-title border-bottom p-3">
          <strong>{name}</strong>
        </h4>
        <div className="card-body p-3">
          <img src={image} className="card-img-top" alt="..." />
          <p className="card-text">Calories: {calories}</p>
          <p className="card-text">
            Servings: <strong>{servings}</strong>
          </p>
          <p className="card-text">
            <strong>Total Calories: {calories * servings}</strong> kcal
          </p>
          <Button color="primary" text="Delete" />
        </div>
      </div>
    </div>
  );
};

export default FoodBox;
