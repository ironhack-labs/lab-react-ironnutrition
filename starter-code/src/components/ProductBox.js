import React, {Component} from 'react';

export default class ProductBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1
    };
  }

  onChangeCount = (e) => {
    this.setState({ count: e.target.value })
  }

  onAddToMenu = () => {
    this.props.onAddToMenu({ ...this.props.food, quantity: this.state.count });
  }

  render (){
  const { name, calories, image } = this.props.food;
  
  return (
      <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} />
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
                    className="input"
                    type="number" 
                    value={this.state.count}
                    onChange={this.onChangeCount}
                  />
                </div>
                <div className="control">
                <button className="button is-info" onClick={this.onAddToMenu}>
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


