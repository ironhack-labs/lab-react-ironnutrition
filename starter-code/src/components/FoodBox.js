import React from 'react'

class FoodBox extends React.Component { 

  state = {
    quantity: 0
  }

  handleChange = e => {
    const {target:{name, value}} = e
    this.setState({[name]: value})
  }


render() {
  return (
    
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.food.image} width="200" alt={this.props.food.name}/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.food.name}</strong> <br />
                <small>{this.props.food.calories}cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  onChange={this.handleChange}
                  className="input"
                  type="number" 
                  name="quantity"
                  value={this.state.quantity}
                />
              </div>
              <div className="control">
                <button onClick={this.props.addToday} className="button is-info">
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
