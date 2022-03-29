import React, { createRef, forwardRef, useRef } from 'react';
import InputField from '../InputField/InputField';

const FoodItem = ({ uuid, name, calories, image, onAdd }) => {
  const inputRef = useRef(null);

  const handleAddItem = () => {
    const { value } = inputRef.current;
    onAdd(uuid, + value);
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt={name} />
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
                type="number"
                className="input"
                name={name}
                ref={inputRef}                
              />
              {/* <InputField ref={inputRef} type="number" className="input" /> */}
            </div>
            <div className="control">
              <button onClick={handleAddItem} className="button is-info">
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FoodItem;
