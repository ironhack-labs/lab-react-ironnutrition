import React from "react";
import './FoodBox.css';
/* import Foods from '../../data/foods.json' */

class Foodbox extends (React.Component) {

    state = {
        foods: []
    }


    render() {
        const {image, name, calories, quantity, id, onAddFood} = this.props

        return(
            <div className="FoodBox me-auto d-flex justify-content-between">
                    <div className="media-left">
                        <figure className="image is-64x64 me-1 align-self-start me-3">
                            <img src={image} className="img-fluid w-100" alt="food"/>
                        </figure>
                    </div>
    
                    <div className="media-content">
                        <div className="content d-flex justify-content-start">
                            <p>
                            <strong>{name}</strong> <br />
                            <small>{calories}</small>
                            </p>
                        </div>
                    </div>
    
                    <div className="d-flex media-right">
                        <div className="field has-addons d-flex flex-row align-self-end">
    
                            <div className="control">
                            <input className="input" type="number" value="1" />
                            </div>
    
                            <div className="control">
                            <button className="button is-info" onClick={()=> onAddFood(id) }>+</button>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

Foodbox.defaultProps = {
    onAddFood : () => {}
}

export default Foodbox;