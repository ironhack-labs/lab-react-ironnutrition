const FoodItem = ({ name, calories, image, quantity, addTodayFood }) => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt="" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories} calories</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" defaultValue={quantity} type="number" />
            </div>
            <div className="control">
              <button className="button is-info" onClick={addTodayFood}>+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FoodItem;
