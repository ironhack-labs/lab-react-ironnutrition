import React from 'react'

class FoodBox extends React.Component {
  state = {
    foodNumber: 0
  }

  handleChange = (e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  })

  handleClick = (e) => {
    this.props.addTodaysFood(e.target.name, this.state.foodNumber)
  }


  render () {

    const {food, num} = this.props

    return (
      <div className="box container">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img alt="" src={food.image} />
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
                  name='foodNumber'
                  className="input"
                  type="number" 
                  value={this.state.foodNumber}
                  onChange={this.handleChange}
                />
              </div>
              <div className="control">
                <button 
                  className="button is-info"
                  onClick={this.handleClick}
                  name={num}>
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