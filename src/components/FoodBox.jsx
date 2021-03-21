import React from 'react';



class FoodBox extends React.Component {

    state = {
        nb : 1,
    }

    handleClick = (event) => {
        
        let newFood = {
            number:this.state.nb,
            name:this.props.foods.name,
            calories:this.props.foods.calories*this.state.nb,
        }
        this.props.addFood(newFood)
    }

    handleChange = (event) => {
        
        let nbOfItems = event.target.value;
        this.setState({ nb : nbOfItems })
    }


    render() {
    return (

        <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src= {this.props.foods.image} alt="food-pic"/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.foods.name}</strong> <br />
                <small>{this.props.foods.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input onChange={this.handleChange} className="input" type="number" placeholder="1" />
              </div>
              <div className="control">
                <button onClick={this.handleClick} className="button is-info">
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
