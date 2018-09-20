import React from "react";
//import foods from './foods.json'

class FoodBox extends React.Component{

    constructor(props){
        super(props);

      
        
    }

    //addFoodClick(event){
    //    const{foods} = 
    //    
    //}
    
    render() {

        const {name, image, calories, quantity} = this.props.oneFood;

        return(

                <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={image} />
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
                    <input
                        className="input"
                        type="number" 
                        value="1"
                        />
                    </div>
                    <div className="control">
                    {/* <button className="button is-info" onClick={addFoodClick}> */}
                    <button className="button is-info">
                        +
                    </button>
                    </div>
                </div>
                </div>  
            </article>
        )
    }
}

export default FoodBox;