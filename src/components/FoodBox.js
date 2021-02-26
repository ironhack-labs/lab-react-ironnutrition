import React from 'react';

class FoodBox extends React.Component {

    state = {
        clicked: true,
        calories: this.props.calories,

      };

      handleChange = (e) => {
        console.log(e.target.value*this.props.calories, e.target.name);
        this.setState({ [e.target.name]: e.target.value *  this.props.calories});
      };
      
      handleIncrementClick = (e) => {
console.log(`for button ${this.props.calories}`)

        this.setState({
          clicked:!true,
        });
      };
  

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt={this.props.name} />
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
                <input className="input" type="number" min="1" name="calories"  onChange={this.handleChange}/>
              </div>
              <div className="control">

                <button className="button is-info" onClick={this.handleIncrementClick}>
               
                +
                </button>
        
                {!this.state.clicked && <div class="columns">
                                                <div class="column">{this.props.name}</div>
                                                <div class="column">calories {this.handleChange}{this.props.calories}</div>
                                                </div>}
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;