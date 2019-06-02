import React from 'react';

class FoodBox extends React.Component{
  
  handleCounter = () => {
    this.props.element.quantity = this.props.element.quantity + 1
    this.props.selection(this.props.element)
    this.props.sumCal(this.props.element.calories)
  }

  render() {
    return (
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
                    value={this.props.element.quantity}
                    onChange= {event => this.handleCounter(event)} 
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
    )
  }
  
}
export default FoodBox;