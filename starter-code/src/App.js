import React, { Component } from 'react';
import './App.css';
import FoodBox from "./FoodBox";
import "bulma/css/bulma.css"
import foods from "./foods.json"
import Form from "./Form"
import Search from "./Search"
import Today from "./Today"
class App extends Component {
  constructor(){
    super()
    this.state={
      foods:foods.map(e=>{
          e.quantity=1
          e.value=""
          e.visible=true
          return e
        }),
      list:[]
    }
  }
  filterFood=(search)=>{
    console.log(search)
    this.state.foods=this.state.foods.map(food=>{
      food.visible=food.name.toLowerCase().includes(search.toLowerCase())
      return food
    })
    this.setState({foods:this.state.foods})
  }
  addFood=(food)=>{
    this.state.foods.unshift(food)
    this.setState({foods:this.state.foods})
  }
  addList=(food)=>{
    this.state.list.push(food)
    this.setState({list:this.state.list})
  }
  removeList=(name)=>{
    const elements=this.state.list
    console.log(name,this.state.list)
    this.state.list.find((e,i)=>{
      if(e.name==name){
        if(e.quantity>1){
          console.log("no borramos")
          elements[i].quantity--
        }else{
          console.log("borramos")
          elements.splice(i,1)
        }
        return true
      }
    })
    console.log(elements)
    this.setState({list:elements})
  }
  addItem=(food)=>{
    return food
  }
  render() {
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1> 
        <Search onSearch={search=>this.filterFood(search)}/>
        <div className="columns">
          <div className="column">
          <Form onAddFood={food=>this.addFood(food)}></Form>
          {this.state.foods.map((f)=>f.visible && <FoodBox  onAddList={food=>this.addList(food)} key={f.name} {...f}/>)}
          </div>
          <div className="column">
          <Today onRemoveList={name=>this.removeList(name)} list={this.state.list}/>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
