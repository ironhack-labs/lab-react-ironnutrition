import React from 'react';

const Box = (props) => {
  const { name, image, calories } = props;
  const initialState = {
    name,
    calories,
    quantity: 0,
  };
  const [currentFood, setCurrentFood = useState(initialState)];
  const handleChange = (e) => {
    setCurrentFood({
      ...currentFood, quantity: e.target.value
    })
  }
  return (
    <div key={name} className="box">
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
              <small>{calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                name="quantity"
                value={currentFood.quantity}
                onChange={handleChange}
              />
            </div>
            <div className="control">
              <button
                className="button is-info"
                onClick={() => handleClick(el)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Box;
