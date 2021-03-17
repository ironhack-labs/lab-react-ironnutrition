import React, { Component } from 'react'

class FoodBox extends Component {

  state = {
    foodsArr:[],
    foodQuantity: 0,
  }

  handleIncrement =(e)=>{
    this.props.foods.map((food) =>{
      
      this.setState({foodQuantity: this.state.foodQuantity +1 })
      console.log(food.quantity);
    })
    
  }

  
  handleAddFoods = (e) => {
  
    console.log(e.target.value);
    const copyArray = [...this.state.foodsArr];
    copyArray.unshift(e.target.value)
    
    this.setState ({ foodsArr: copyArray})
  };

  totalCalorie =(event)=>{

  }

  render() {
    return (
      <div>
         {this.props.foods.map((food)=> (
      //  <div>
      //    <input type="text" />
      //    <button>Search</button>
      //  </div>
       
       <div className="box">
  <article className="media">  
      <figure className="image is-64x64">
        <img src={food.image}/>
      </figure>
  
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{food.name}</strong> <br />
          <small>{food.calories} caloris</small>
        </p>
      </div>
    </div>  
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input onClick={this. handleIncrement} className="input" type="number" value={this.state.foodQuantity} />
        </div>
        <div className="control">
          <button onClick={this.handleAddFoods} value={food.name} className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
      </article>
      </div>   ))}
      <article className='clientList'>
      <h2>Today's food</h2>
      <h3 className="today-foods">{this.state.foodQuantity} : {this.state.foodsArr}</h3>
      <p>Total: </p>
      </article> 





          </div>
 
        )
  }
}


export default FoodBox;