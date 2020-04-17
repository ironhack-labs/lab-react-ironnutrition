import React, {Component} from 'react'
import '../foodBox/FoodBox.css'
import 'bulma/css/bulma.css';

class BoxInfo extends Component {
  state = {
    quantity : 0,
  }
  handleQuantity = (e) =>{
    const qt = parseInt(e.target.value);
    this.setState({
      quantity: qt
    })
  }
  render(){
    const {food, func} = this.props;
    const {quantity} = this.state;
    food.quantity = quantity
    // console.log(food)
    return(
        <div className="box">
          <article key={food.name} className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={food.image} alt={food.name} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{food.name}</strong> <br />
                  <small>{food.calories}</small>
                </p>
              </div>
              </div>
              <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number" 
                    value={quantity}
                    onChange = {this.handleQuantity}
                  />
                </div>
                <div className="control">
                  <button className="button is-info" onClick={()=>func(food)}>
                  {/* <button className="button is-info" onClick={this.intoCart}> */}
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

export default BoxInfo