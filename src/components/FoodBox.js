import React, {useState} from 'react'



export default function FoodBox(props) {

    const [quantity, setQuantity] = useState(0);

        return (
            <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img src={props.food.image} alt="Food pic"/>
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{props.food.name}</strong> <br />
                      <small>{props.food.calories} cal</small>
                    </p>
                  </div>
                </div>
                <div className="media-right">
                  <div className="field has-addons">
                    <div className="control">
                      <input onChange={(event) => setQuantity(event.currentTarget.value)} className="input" name="amount" type="number" defaultValue={props.food.quantity} min="1"/>
                    </div>
                    <div className="control">
                      <button onClick={() => props.add(props.id, quantity)} className="button is-info">+</button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          );
}
