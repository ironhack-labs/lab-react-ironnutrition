import React, {Component} from 'react';
// import foods from './foods.json'



export class FoodBox extends Component{
constructor(props){
  super(props);
  this.state = {
    name: props.name,
    quantity: 1,
    calories: props.calories,
    image: props.image
  }
}
handleSubmit(){
  console.log(this)
  let {name, quantity, calories} = this.state;
  calories = calories * quantity
  this.props.addDetails({name, quantity, calories})
}


  render(){

    let{name, calories, image, quantity}=this.state;
    return(

      <div className="box">
      {console.log(this.props)}
      {/* {console.log(calories)} */}
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src= {image} alt = {name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input"type="number" value={quantity} onChange={e => this.setState({quantity: e.target.value})} 
  />
            </div>
            <div className="control">
              <button className="button is-info" onClick={this.handleSubmit.bind(this)}>
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
 


