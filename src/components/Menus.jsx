import React from 'react'

const Menu = (props) => {
    const totalCalories = props.foods.reduce((acc, el) => acc + el.calories * el.quantity, 0)

    return (
        <div>
            {props.foods.map((food) => (
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={food.image} alt="" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    {food.quantity} x <strong>{food.name} </strong>({food.calories} cals) 
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <small><strong>{food.calories * food.quantity}</strong> cals</small>
                        </div>

                        <button className="button delete-btn" onClick={() => props.deleteFromMenu(food)}>
                        <svg viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg>
                        </button>
                    </article>
                </div>
            ))}
            <div className="text-center">
            Total calories added: <strong>{totalCalories} cal</strong>
            </div>
        </div>
    )
}

export default Menu