import React from 'react';

class FoodBox extends React.Component{
      
  state={
    quantity:this.props.element.quantity
  }

  handleCounter = () => {
    this.setState({
      quantity:this.state.quantity + 1
    })
    this.props.selection(this.props.element, this.state.quantity)
  }

  render() {
    return (
      <div className="columns">
        <div className="column">
            <div className="box">
              <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img alt='' src={this.props.element.image} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.element.name}</strong> <br />
                  <small>{this.props.element.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number" 
                    value={this.state.quantity}
                  />
                </div>
                <div className="control">
                  <button 
                  onClick= {event => this.handleCounter(event)} 
                  className="button is-info">
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
        </div>
      </div>
    )
  }
  
}
export default FoodBox;