import React from 'react';

class FoodBox extends React.Component {

    state = {
        quantity: this.props.quantity
    }

    
    handleChange = (e) => {
        this.setState({ quantity:  e.target.value});
    }


    render(){
        const { food, cal, image, handleTodayFood, handleDelete } = this.props;
        const { quantity } = this.state;
        return (
            <div className="box">
            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={image} alt="" />
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{food}</strong> <br />
                    <small>{cal} cal</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                    <input className="input" type="number" value={quantity} onChange={(e)=>this.handleChange(e)} />
                    </div>
                    <div className="control">
                    <button className="button is-info" onClick={()=>handleTodayFood({food, cal, quantity})}>+</button>
                    <button className="button is-info" onClick={()=>handleDelete(food)}>-</button>
                    </div>
                </div>
                </div>
            </article>
            </div>
        );
    }
};

export default FoodBox;
