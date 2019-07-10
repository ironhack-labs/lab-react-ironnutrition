import React from 'react'

const PizzaCard = (props) => { 
    return (
        <div className='pizza-card'>
            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={props.image} alt={props.name} />
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{props.name}</strong> <br />
                    <small>{props.calories}</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                    <input
                        className="input"
                        type="number" 
                        value={props.quantity}
                    />
                    </div>
                    <div className="control">
                        <button onClick={() => props.clbk1(props.index)}  className="button is-info">+</button>
                    </div>
                    <div className="control">
                        <button onClick={() => props.clbk2(props.index)}  className="button is-info">-</button>
                    </div>
                </div>
                </div>
            </article>     
        </div>
    )
}

export default PizzaCard;
