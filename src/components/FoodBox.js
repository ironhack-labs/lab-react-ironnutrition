import React from 'react'


export default class FoodBox extends React.Component {
    constructor(props){
      super(props)
      this.state={
        food:{
          name: this.props.food.name,
          calories: this.props.food.calories,
          quantity: 0
        }
      }
    }

  changeQuantity=(event)=>{
    this.setState({food:{
      name: this.props.food.name,
      calories: this.props.food.calories,
      quantity: event.currentTarget.value
    }})
  }

  
  render(){
  return(
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={this.props.food.image} alt='' className='food-pic'/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{this.props.food.name}</strong> <br />
              <small>{this.props.food.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value={this.state.quantity} onChange={this.changeQuantity}/>
            </div>
            <div className="control">
              <button className="button is-info" onClick={()=>this.props.addToday(this.state.food)}>
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