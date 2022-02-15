import React, { useState } from 'react';

function FoodBox(props) {

  const [count, setCount] = useState(()=> 1)

  const handleChange = e => {
    setCount(e.target.value)
  }

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.item.image} alt=""/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.item.name}</strong> <br />
              <small>{props.item.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value={count}  onChange={handleChange}/>
            </div>
            <div className="control">
              <button className="button is-info" onClick={() => props.handleTotal(count)}>+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default FoodBox;