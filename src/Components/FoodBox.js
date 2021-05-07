import React from 'react';

class FoodBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    name:"",
    calories:"",
    image:"",
    quantity:"",
    }
  }

addOneFood(quantity){
  const foodCopy = [...this.state.]
this.setState({ quantity: this.state.quantity + 1 });
}

render(){
return (
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={this.props.image} alt="image" />
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
            type="number"
            value={this.props.quantity}
            name="quantity"
            onChange={()=>this.refreshInput()}
          />
        </div>
        <div className="control">
          <button className="button is-info" onClick={() => this.addOneFood()}>
            +
          </button>
        </div>
      </div>
    </div>
  </article>
);

};
}
export default FoodBox;
