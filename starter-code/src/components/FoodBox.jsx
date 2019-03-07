import React, {Component} from 'react'


class FoodBox extends Component {

    state = {
      selQuantity: 0
    }
  
    changeSelQuantity = e => {
      this.setState({ selQuantity:e.target.value })
    }
  
    render() {
      let { index, image, name, calories, addToday } = this.props
      let {selQuantity} = this.state
      return (
                <div key={index} className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={image} alt="foodphoto" />
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{name}</strong> <br />
                        <small>{calories} cal</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                        <input
                            onChange={this.changeSelQuantity}
                            className="input"
                            type="number" 
                            value={selQuantity}
                        />
                        </div>
                        <div className="control">
                        <button onClick={() => addToday(image,name,calories, selQuantity)} className="button is-info">
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
  