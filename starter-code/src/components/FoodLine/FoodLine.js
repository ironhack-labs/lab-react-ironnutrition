import React, {Component} from 'react';

class FoodLine extends Component {
  render(){
    return(
      <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img alt="thumbnail" src={this.props.f.image} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{this.props.f.name}</strong> <br />
              <small>{this.props.f.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                value={this.props.qntValue}
                onChange={(e) => { this.props.updateQnt(e, this.props.f.name) }}
              />
            </div>
            <div className="control">
              <button className="button is-info">+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
    )
  }
}

export default FoodLine;