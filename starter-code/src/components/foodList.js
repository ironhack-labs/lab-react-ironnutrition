import React, { Component } from 'react';
import FoodBox from './foodbox'
import foods from '../../src/foods.json'
import Form from './form'



class FoodList extends Component {
    constructor() {
        super()

        this.state = {
            foods, 
            showForm: false,
            searchFood: "",
            listFood: []
        }
    }



    handleChange = e => {
        this.setState({searchFood: e.target.value})
    }


    addNewFood = food => {
        const foodCopy = [...this.state.foods]
        foodCopy.push(food)
        this.setState({
            foods: foodCopy
        })
    }

    addNewList = e => {
        const stringFood= e.target.value
        const listCopy = [...this.state.listFood]
        listCopy.push(stringFood)
        this.setState({
            listFood: listCopy
        })
    }

    lookForm = () => this.setState({showForm: !this.state.showForm})


    
    render() {

const foodFilter = this.state.foods.filter((elm) => elm.name.includes(this.state.searchFood))

    return (
        <div>
             <div>
        <input type="text" className="input search-bar" name="searchFood" value={this.state.searchFood} onChange={this.handleChange} />
      </div>
            {this.state.showForm && <Form addNewFood={this.addNewFood} hiddenForm={this.lookForm}/>}
      {foodFilter.map((elm, idx) => <FoodBox key={idx} {...elm} addNewList={this.addNewList} />)}
      <div>
          <h1>Today's Food</h1>
          <ul>
              {this.state.listFood.map((elm) => <li>{elm}</li>)}
          </ul>
      </div>
      <button onClick={this.lookForm}>CREAR NUEVO ALIMENTO</button>
      </div>
    )
  }
}

export default FoodList