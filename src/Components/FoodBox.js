import React, {Component} from 'react';


class FoodBox extends Component {

  state = {
    quantity: 1
  }
  

  handleChange = (event) => {
    this.setState({quantity: event.target.value})
  }

  render () {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt="food" />
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
                <input className="input" type="number" value={this.state.quantity} min="0" onChange={this.handleChange}/>
              </div>
              <div className="control">
                <button className="button is-info" onClick={() => this.props.handleClick(this.props.name, this.props.image, this.props.calories, this.state.quantity)}>              
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