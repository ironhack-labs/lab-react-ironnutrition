import React from 'react'

class FoodBox extends React.Component {

    state={
        quantity: 0,
    }

    handleInput = (event) => {
        const {name, value} = event.target;

    
        this.setState({[name]: value})
      }

    render(){
    return (

        <div className="box">
        <article className="media">
            <div className="media-left">
            <figure className="image is-64x64">
                <img src={this.props.food.image}/>
            </figure>
            </div>
            <div className="media-content">
            <div className="content">
                <p>
                <strong>{this.props.food.name}</strong> <br />
                <small>{this.props.food.calories}</small>
                </p>
            </div>
            </div>
            <div className="media-right">
            <div className="field has-addons">
                <div className="control"> 
                <input className="input" type="number" name="quantity" onChange={this.handleInput} value={this.state.quantity}/> 
                {/* onChange={() => this.handleQuantity(this.state.quantity)} value={this.props.quantity}  */}
                </div>
                <div className="control">
                <button onClick={()=> this.props.handleAddList(this.props.food, this.state.quantity)} className="button is-info">
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
