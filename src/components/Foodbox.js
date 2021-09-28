import React from 'react';

const Foodbox = ({ foodTitle, foodCalories, foodImg, quantity }) => {
  const defaultImg =
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2580&q=80';

  const handleChange = () => {
    console.log('Changed!');
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img alt={foodTitle} src={foodImg ? foodImg : defaultImg} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>{foodTitle}</p>
            <p>{foodCalories}</p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                value={quantity ? quantity : 0}
                onChange={handleChange}
              />
            </div>
            <div className="control">
              <button className="button is-info">+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Foodbox;
