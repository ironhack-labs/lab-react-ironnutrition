import React from "react";

class FoodBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        quantity : 1
    }
    this.state = {
        calories : this.props.calories
    }
  }
  //const [quantity, setQuantity] = useState(1)
  handleChanges = event => {
    console.log(this.props);
    const { value } = event.target;
    this.setState({quantity: Number(value)});
  };
  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt = "" />
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
                <input
                  onChange={this.handleChanges}
                  className="input"
                  type="number"
                  value={this.state.quantity}
                />
              </div>
              <div className="control">
                <button
                  onClick={() =>
                    this.props.addToList({
                      ...this.props,

                      quantity: this.state.quantity
                    })
                  }
                  className="button is-info"
                >
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

export default FoodBox;
