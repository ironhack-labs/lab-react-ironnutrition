import React, {useState} from 'react'

const FoodBox = ({index, name, calories, image, quantity: qa, click}) => {

    const [quantity, setQuantity] = useState(qa)

    const handleValueChange = (e) => {
        setQuantity(e.target.value)
    }

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
                    <small>{calories} cal.</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                    <input className="input" type="number" min={0} name={name} id={"id-"+name} value={quantity} onChange={handleValueChange}/>
                    </div>
                    <div className="control">
                    <button onClick={(e) => {
                        click(e, index, quantity)
                        setQuantity(0)
                    }} className="button is-info">
                        +
                    </button>
                    </div>
                </div>
                </div>
            </article>
        </div>
    )
}

export default FoodBox
