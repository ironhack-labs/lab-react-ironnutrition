import React, { Component } from 'react'
import foods from '../foods.json'
import FoodBox from './FoodBox.js'
import FormFood from './FormFood.js'
import Calculate from './Calculate';

export default class IronFood extends Component {
    constructor() {
        super();
        this.state = {
            food: foods,
            form:false,
            list:[]
        }
    }
    addFoodHandler = (food) => {
        const foodCopy = [...this.state.food];
        foodCopy.push(food)
        this.setState({
          food: foodCopy
        })
      }

    changeFormTrue = () =>{
        this.setState({form: !this.state.form})
    }

    Search = (event) => {
        // let { value } = event.target;
        // let foodCopy=[...foods];
        // let result = foodCopy.filter((na)=>na.name.toLowerCase().includes(value.toLowerCase()))
        // this.setState({food: result});
        //Refactoring!!
        this.setState({food:[...foods].filter((na)=>na.name.toLowerCase().includes(event.target.value.toLowerCase()))});
    }
    addList = (e) => {
        const listCopy = [...this.state.list]
        listCopy.push(e);
        this.setState({list: listCopy});
    }
    deleteList = (index) =>{
        const listCopy = [...this.state.list];
        listCopy.splice(index,1);
        console.log(listCopy);
        this.setState({list: listCopy});


    }

    render() {
        // console.log(this.state.food);
        return (
            <div className="App">
            <h1>IronFood</h1>
                {this.state.form ? (
                    <div>
                        <button onClick={()=>this.changeFormTrue()}>Hide</button>
                        <FormFood addFood={this.addFoodHandler} />
                    </div>
                     
                ) :(
                    <div>
                        <button onClick={()=>this.changeFormTrue()}>Show</button>
                    </div>
                )}
                <input type="text" name="search" placeholder="" onChange={this.Search}/>
                {this.state.food.map((e, index) => <FoodBox list={this.addList} info={e} key={index} />)}
                <div>
                    <Calculate del={this.deleteList} calculate={this.state.list}/>
                </div>
            </div>
        );
    }
}
