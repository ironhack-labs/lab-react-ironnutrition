import React, { useState } from 'react';

export default function FoodBox(props) {
  const { name, calories, image, quantity } = props.food;
  const [value, setValue] = useState(0);

  const handleValue = (event) => {
    console.log('hii', event);

    setValue(event);
  };

  return (
    <div>
      <br />
      <br />

      <div style={{ width: '35rem' }}>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={image} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{name}</strong> <br />
                  <small>{calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    onChange={(event) => {
                      handleValue(event.target.value);
                    }}
                    className="input"
                    type="number"
                  />
                </div>
                <div className="control">
                  <button
                    onClick={() => props.onAdding(props.food, value)}
                    className="button is-info"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
