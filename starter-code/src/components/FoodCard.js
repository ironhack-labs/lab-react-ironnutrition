import React from 'react'

class FoodCard extends React.Component {
    state = {
        quantity:1
    }

    getQty = (e) => {
        const quantity = e.target.value;
        this.setState({quantity})
    }
    render(){
    
        const {name, image, calories, addTodaysFood} = this.props
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
                        name="quantity"
                        onChange={this.getQty}
                        />
                    </div>
                    <div className="control">
                        <button onClick={addTodaysFood(name, calories, this.state.quantity)} className="button is-info">
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

export default FoodCard;