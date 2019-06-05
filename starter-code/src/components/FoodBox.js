import React, {Component} from "react"


class FoodBox extends Component {

  constructor(props) {

      super(props)

      this.state = {
        quantity: 1
      }
  }

  handleChange = e =>{
    let {name, value} =e.target
    console.log({name, value})
    this.setState({[name]: value})
  }

  render() {

    return (
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
          <input
            className="input quantityInput"
            type="number" 
            name="quantity"
            value={this.state.quantity} 
            onChange = {(e) => this.handleChange(e)}
          />
        </div>
        <div className="control">
          <button className="button is-info" onClick={this.props.addToMenu}>
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
    )}
}

export default FoodBox