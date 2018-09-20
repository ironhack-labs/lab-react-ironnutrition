import React from "react";

class FoodBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        const { oneFood } = this.props;
        return (
            <div className="box">
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img src={oneFood.image} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>{oneFood.name}</strong> <br />
                        <small>{oneFood.calories}</small>
                      </p>
                    </div>
                  </div>
                  <div className="media-right">
                    <div className="field has-addons">
                      <div className="control">
                        <input
                          className="input"
                          type="number" 
                          value={oneFood.quantity}
                         />
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
        );
    }
}

export default FoodBox;