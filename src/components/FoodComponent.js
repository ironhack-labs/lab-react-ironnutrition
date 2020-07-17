import React from 'react';

const FoodComponent = props => {
  
    const product = [...props.food].map(prod => {
        return (
            <div className="box">
                <article key={prod.name} className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={prod.image} alt="product" />
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{prod.name}</strong> <br />
                        <small>{prod.calories} cal</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                        <input className="input" type="number" value="1" />
                        </div>
                        <div className="control">
                        <button className="button is-info">+</button>
                        </div>
                    </div>
                    </div>
                </article>
            </div>
        )
    })

  return (
      <div>
          {product}
      </div>
  );
}

export default FoodComponent;
