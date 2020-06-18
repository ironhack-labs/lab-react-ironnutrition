import React from 'react'
import 'bulma/css/bulma.css';


class FoodBox extends React.Component {

    state = {
        food : this.props.food,
        quantity : 0
    }


    handleQuantity=(e)=>{
        this.setState({
            quantity : e.target.value
        })
    }


    render(){
        return(
            <div className="box">
        <article className="media">
            <div className="media-left">
            <figure className="image is-64x64">
                <img src={this.props.image} />
            </figure>
            </div>
            <div className="media-content">
            <div className="content">
                <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories}</small>
                </p>
            </div>
            </div>
            <div className="media-right">
            <div className="field has-addons">
                <div className="control">
                <input  onChange={this.handleQuantity} className="input" type="number" name='quantity' />
                </div>
                <div className="control">
                <button onClick={()=> {this.props.todaysFood(this.state.quantity,this.props.name)}} className="button is-info">
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