import React, { Component } from 'react';

class FoodBox extends Component {

  constructor(props){
    super(props);

    this.state = {
    name: '',
    calories: '',
    qtt: 0,
  }
};

  handleQttInput = (event) => {
    this.setState({
      qtt: event.target.value
    })
  }

  handleAdd = (event) => {  
    this.setState({
      name: this.props.name,
      calories: Number(this.props.calories) * this.state.qtt,
    }, 
    () => this.props.addToMenu(this.state) )  
  }



  render() {

    return (
      <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={this.props.image} alt={this.props.name} />
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
            value={this.state.qtt}
            onChange={(e) => this.handleQttInput(e)} 
          />
        </div>
        <div className="control">
          <button className="button is-info" onClick={this.handleAdd}>
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

export default FoodBox;