import React from "react"

const Box = ({ name, calories, image, funcAd, handleAddListFood, quantity }) => {
    return (<div className="box">
        <article className="media">
            <div className="media-left">
                <figure className="image is-64x64">
                    <img src={image} alt={`food`} />
                </figure>
            </div>
            <div className="media-content">
                <div className="content">
                    <p>
                        <strong>{name}</strong> <br />
                        <small>calories:<br />{calories}</small>
                    </p>
                </div>
            </div>
            <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                        <form id="add-food-form" onSubmit={(e) => { handleAddListFood(e) }}>
                            <input className="input is-link" type="number" name={name} min="0" placeholder="0" value={quantity} onChange={(e) => { funcAd(e) }} />
                        </form>
                    </div>
                    <div className="control">
                        <button className="button is-info" form="add-food-form" type="submit">
                            +
                        </button>
                    </div>
                </div>
            </div>
        </article>
    </div>)
}

export default Box;