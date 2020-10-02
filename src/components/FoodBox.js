import React from 'react';

export default function FoodBox(props) {
  return (
    <section className="whole-food">
      {props.food.map((item, index) => {
        return (
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={item.image} />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{item.name}</strong> <br />
                    <small>{item.calories} cal</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input
                      className="input"
                      readOnly
                      type="number"
                      value={item.quantity}
                    />
                  </div>
                  <div className="control">
                    <button className="button is-info" onClick={()=> {props.addToday(index)}}>+</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        );
      })}
    </section>
  );
}
