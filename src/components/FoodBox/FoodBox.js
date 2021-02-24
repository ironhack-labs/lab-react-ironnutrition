import React, { Component } from 'react'

class FoodBox extends Component {
  state = {
    number: 1,
  }

  handleInput = (event) => {
    const { value } = event.target
    this.setState({number: value})
  } 

  render () {
    return (
      <div className="box column">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt=""/>
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
                <input className="input" type="number" min="1" value={this.state.number} onChange={this.handleInput}/>
              </div>
              <div className="control">
                <button onClick={ () => { 
                  this.props.addList(
                    this.state.number, 
                    this.props.name, 
                    this.props.calories);
                  this.setState( { number: 1})  
                } } 
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
