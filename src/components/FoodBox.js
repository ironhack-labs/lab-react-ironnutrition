import React, {Component} from 'react'

export default class FoodBox extends Component {

    state = {
        quantity: 0,
    }

    handleQuantity = (event) => {
        let quantity = event.target.value;
        console.log(event.target.value)
        this.setState({
          quantity
        });
      };

    render(){

        return (

            <div className="box">
                <article article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={this.props.imgUrl} />
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
                            <input className="input" type="number" onChange={this.handleQuantity} value={this.state.quantity} />
                        </div>
                        <div className="control">
                        <button button className="button is-info" onClick={() => {this.props.addToList(this.props.food, this.state.quantity)}}>
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