import React from 'react';

class FoodBox extends React.Component {
    state = {
        quantity: 1
    }
  
    setQuantity = e => {
        this.setState({
            quantity:e.target.value
        })
    }
    
    render() {
        return (
            <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={this.props.imgage} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{this.props.name}</strong> <br />
          <small>{`${this.props.calories} cal`}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="number" min="1" value={this.state.quantity} onChange={this.setQuantity} />
        </div>
        <div className="control">
          <button className="button is-info">
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