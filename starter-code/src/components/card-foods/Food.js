import React from 'react';

function Food({ foods }) {
    // "name": "Sweet Potato",
    // "calories": 120,
    // "image": "https://i.imgur.com/hGraGyR.jpg",
    // "quantity": 0
    const listFoods = foods.map((food) => {
        return (

            <div className="box" >
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={food.image} />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{food.name}</strong> <br />
                                <small>{food.calories}</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="number" value={food.quantity} />
                            </div>
                            <div className="control">
                                <button className="button is-info">+</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        );

    });
    return listFoods;
}

export default Food;
