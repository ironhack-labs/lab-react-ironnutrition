import './FoodBox.css'
import React from 'react'
function FoodBox({ name, calories, image, quantity, onSearch }) {
    return (
        <div className="foodBox d-flex m-2 justify-content-between">
                        <img src={image} alt={name} />
                    <div className="content">
                        <p>
                            <strong>{name}</strong> <br />
                            <small>{calories}</small>
                        </p>
                    </div>
                <div className="d-flex ms-3">
                        <div className="control">
                            <input className="input" type="number" value={quantity} />
                        </div>
                        <div className="control">
                            <button className="btn btn-primary">
                                +
                            </button>
                        </div>
                </div>
        </div>
    )
}
FoodBox.defaultProps = {
    value: 0
}

export default FoodBox