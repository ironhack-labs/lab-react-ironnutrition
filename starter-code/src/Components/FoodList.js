import React, { Component } from 'react'
import foods from '../foods';
import Foodbox from './Foodbox'
import FoodForm from './FoodForm';


export default class FoodList extends Component {

    state={
        enableAdd:false,
        foods:foods,
        search:'',
        todayFood:[]
    }

    enableAddForm = () => {
        this.setState({enableAdd:!this.state.enableAdd})
    }
    addFoodToArray(food){
        this.state.foods.push(food)
        this.setState({foods:[...foods],enableAdd:false});
    }

    searchFilter = e => {
      this.setState({search:e.target.value})
    }

    getTodaysFood = food => {
        let {todayFood} =this.state
        todayFood.push(food);
        todayFood[todayFood.length-1].calories*=todayFood[todayFood.length-1].quantity;
       let joinSame = [];
       this.state.todayFood.forEach(e=>{
        if(joinSame.length==0){
            joinSame.push(e)
          }
          else{
            for(let i=0;i<joinSame.length;i++){
              if(e.name==joinSame[i].name){
                joinSame[i].calories+=e.calories
                joinSame[i].quantity+=+e.quantity
              break;
            }
            else if(e.name!=joinSame[i].a && i==joinSame.length-1){
                joinSame.push(e);
              break;
            }
          }
          }
          return joinSame;
       })
       
       this.setState({todayFood:joinSame})
    }


  render() {
      let {foods,enableAdd,search,todayFood} = this.state;
    return (
        <React.Fragment>
            <button onClick={this.enableAddForm}>Add food</button>
            {enableAdd ? <FoodForm foodReady={food=> this.addFoodToArray(food)}/> : "" }
            <div>
            <input type="text" style={{width:"95%", margin:"1% 0",fontSize:20}} 
            value={search}
            onChange={e=>this.searchFilter(e)}
            ></input>
            </div>
      <div style={{width:"60%",float:"left"}}>
        {foods.filter(food=>{
            return food.name.toLowerCase().includes(search.toLowerCase())
            }).map((e,i)=>{
            return (
                <div key={i}>
            <Foodbox {...e} foodReady={food => this.getTodaysFood(food)}/>
            </div>
            )
        })}
      </div>
      <div style={{float:"left", marginLeft:"2%"}}>
      <h1>Today's foods</h1>
      <ul>
          {todayFood.map((e,i)=>{
             return (
                 <div key={i}>
                     <li>{e.quantity} {e.name} = {e.calories} calories</li>
                 </div>
             )    
          })}
      </ul>
      {todayFood.length>0 ? <p>total: {todayFood.reduce((acc,e)=>{
                return acc+e.calories
            },0)}</p> : ""}
      </div>
      </React.Fragment>
    )
  }
}
