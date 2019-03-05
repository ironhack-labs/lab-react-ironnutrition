import React, {Component} from 'react';
import 'bulma/css/bulma.css';


class FoodBox extends Component{

  constructor(props){
    super(props);
  }


  handleAddTodayList = () => {
    console.log(this.props.index);
    this.props.addTodayFoods({
      name: this.props.name,
      calories: this.props.calories,
      image: this.props.image,
      quantity: document.getElementById(this.props.index).value
    });
    document.getElementById(this.props.index).value = 1;
  }

  render(){
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" defaultValue='1' id={this.props.index}/>
                </div>
                <div className="control">
                  <button className="button is-info" onClick={this.handleAddTodayList}>
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