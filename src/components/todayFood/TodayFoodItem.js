const TodayFoodItem = ({ name, onDelete }) => {
  return (
    <li>
      <div>{name}
      <button type="button" 
      className="button is-danger is-small" 
      onClick={onDelete}
      >
      Delete food

      </button>
      </div>
    </li>
  );
};

export default TodayFoodItem;
