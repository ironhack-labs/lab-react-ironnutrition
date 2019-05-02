import React from "react";
import './FoodBox.css'

class FoodBox extends React.Component {
  constructor(props){
    super();
  this.state = {
    name: props.name,
    calories: props.calories,
    image: props.image,
    quantity: props.quantity,
    funcAddItem: props.funcAddItem
  };
}
  updateQty(e){
    if(e.target.value < 1) { return;}
    this.setState({
      ...this.state,
      quantity: e.target.value++
    }); console.log("hola")
  }

  // addFood() {
  //   if(this.state.quantity > 0) {
  //     this.pro.addFood(this.state)
  //   }

  //    this.setState({
  //     ...this.state,
  //     quantity: 0
  //   })
  // }


    render() {
        return (
          <React.Fragment>
              <div className="row40">
            <div className="box" key={this.props._id}>
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
                      <small>{this.props.calories} cal</small>
                    </p>
                  </div>
                </div>
                <div className="media-right">
                  <div className="field has-addons">
                    <div className="control">
                      <input
                        className="input"
                        name="quantity"
                        type="number" 
                        value={this.state.quantity}
                        onChange={(e) => this.updateQty(e)}
                      />
                      
                    </div>
                    <div className="control">
                      <button className="button is-info" onClick={(e) => this.state.funcAddItem(this.state)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            </div>
          </React.Fragment>        
    )
    }
}

export default FoodBox;