import { React, useState } from 'react'

const FoodBox = props => {
    const [ foodNumber, setFoodNumber ] = useState(1);
    const [ calories, setCalories ] = useState(props.calories);

    // console.log(props)
    const handleChange = e => {
        console.log(e.target.value)

        setFoodNumber(e.target.value)
        setCalories(props.calories * e.target.value)
    }

    return (
        <div className="box">
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
                        <small>{calories}</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value={foodNumber} min="1" onChange={e => handleChange(e)}/>
                        </div>
                        <div className="control">
                            <button className="button is-info">
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