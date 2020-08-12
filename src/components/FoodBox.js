import React, { Component } from 'react'
import foods from '../foods.json';

import AddFood from './AddFood'
import Search from './Search'
import TodayList from './TodayList';

class FoodBox extends Component {
    constructor() {
        super();
        this.state = {
            Food: foods,
            filtered: foods,
            isClicked: false,
            searchTerm: ''
        }
    }

    /* editSearchTerm = (e) => {
      this.setState({searchTerm: e.target.value})
    } */

    dynamicSearch = (searchTerm) => {
      const filtered = this.state.Food.filter(food => {
        console.log(food.name)
        return food.name.toLowerCase().includes(searchTerm.toLowerCase())
      });
      this.setState({
        filtered
      })
    }

    showForm = () => {
      this.setState({isClicked: !this.state.isClicked})
    }

    insertFood = (newFood) => {
      const copyFood = [...this.state.filtered]
      copyFood.push(newFood)
      this.setState({filtered: copyFood, isClicked: false})
    }
  

    render() {
        return (
        <div>
          <div>
            {this.state.isClicked ?<AddFood addFood={this.insertFood}/>:null}
            <button onClick={this.showForm} className="btn">Add Food</button> 
          </div>
          <Search filterFood={this.dynamicSearch} />
        {/*   <TodayList /> */}
          {this.state.filtered.map((oneMeal, index) => {
            return(
               <div className="box">
                  <article className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src={oneMeal.image} alt="meal" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <strong>{oneMeal.name}</strong> <br />
                          <small>{oneMeal.calories} cal</small>
                        </p>
                      </div>
                    </div>
                    <div className="media-right">
                      <div className="field has-addons">
                        <div className="control">
                          <input className="input" type="number" value="1" />
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
            )
        })
        }
        </div>
      )
    }
  } 


export default FoodBox
