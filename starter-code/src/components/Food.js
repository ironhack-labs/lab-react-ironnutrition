import React from 'react';

class Food extends React.Component {
  state = {
    quantity: 1
  };

  changeQuantity = e => {
    const quantity = e.target.value;
    this.setState({ quantity });
  };
  render() {
    const { img, name, cals, addTodaysFood, handleAddToList } = this.props;

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={img} alt={name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{cals}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={this.state.quantity}
                  onChange={this.changeQuantity}
                  name="quantity"
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={addTodaysFood(name, cals, this.state.quantity)}>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Food;
