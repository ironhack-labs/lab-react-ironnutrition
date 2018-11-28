import React, { Component } from 'react'
 class FoodBox extends Component {
   handleArrows = event => {
    const {handleArrows, index} = this.props;
    handleArrows(index, parseInt(event.target.value));
  }
   handleAddToList = () => {
    const {food} = this.props;
    this.props.handleAddToList(food);
  }
   render() {
    const {name, image, calories, quantity} = this.props.food
    return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt={name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{`${calories} cal`}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number" 
                value={quantity}
                min="0"
                onChange={this.handleArrows}
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={this.handleAddToList}>
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