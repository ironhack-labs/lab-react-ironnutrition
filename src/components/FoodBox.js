import React from 'react'

class FoodBox extends React.Component{

    render(){
        const {name, calories, image, quantity} = this.props.food
        return(
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
                        <small>{calories} cal</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                        <input onChange={(e, index)=>this.props.updateQty(e, index)} className="input" type="number" value={quantity} />
                        </div>
                        <div className="control">
                        <button onClick={(e, index)=>this.props.addFood(e, index)} className="button is-info">
                            +
                        </button>
                        </div>
                    </div>
                    </div>
                </article>
            </div>
        )
    }
}

export default FoodBox
