import React from 'react';
import 'bulma/css/bulma.css';
import './FoodBox.css'

let initialNumber = 1

function FoodBox(props) {

    const [number, setNumber] = React.useState(initialNumber)
    const handleNumChange = () => {
        setNumber(initialNumber += 1)
    }

    return (
        <div onChange={handleNumChange} value={initialNumber} className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={props.food.image} alt={props} />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{props.food.name}</strong> <br />
                        <small>{props.food.calories}</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number"  />
                        </div>
                        <div className="control">
                            <button className="button is-info" onClick={props.clickToAdd(props.food.name)}>
                            +
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default FoodBox;


