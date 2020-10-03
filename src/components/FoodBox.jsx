import React from 'react';

class FoodBox extends React.Component {
state = {
  quantity: 1
}

handleChange = (e) => {
  this.setState({
    quantity: e.target.value
  })
}


  render() {
    return (
      <div>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.food.image} alt={this.props.food.name} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.food.name}</strong> <br />
                  <small>{this.props.food.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value={this.state.quantity} onChange={this.handleChange}/>
                </div>
                <div className="control">
                  <button className="button is-info" onClick={() => this.props.onAddToMenu(this)}>+</button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  
};

export default FoodBox;
