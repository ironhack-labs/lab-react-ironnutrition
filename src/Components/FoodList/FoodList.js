import React, { Component } from 'react';
import foodsData from '../../foods.json';
import FoodBox from "../FoodBox/FoodBox";
import Form from "../Form/Form";
import TodaysFood from '../TodaysFood/TodaysFood';

export default class FoodList extends Component {
    state = {
        foods: foodsData,
        formButton: false,
        search: '',
        todaysFoods: []
    };

    displayFood = () => {
        const filterFood = this.state.foods.filter((food) =>
            food.name.toLowerCase().includes(this.state.search.toLocaleLowerCase())
        )
        return filterFood.map((food) => {
            return(
                <FoodBox addFoodToday={this.addFoodToday} {...food} key={food.name} />
            )
        })
    };

    addFood = (food) => {
        const arrayCopy = [...this.state.foods];
        arrayCopy.push(food);

        this.setState({ foods: arrayCopy });
    };

    toggleButton = () => {
        this.setState({ formButton: !this.state.formButton });
    };

    handleChange = (e) => {
        this.setState({ search: e.target.value })
    }

    addFoodToday = (name, calories, count) => {
        const copyTodaysFood = [...this.state.todaysFoods];
        const index = copyTodaysFood.findIndex((el) => el.name === name);
        if (index === -1) {
          copyTodaysFood.push({ name, calories, count });
        } else {
          const duplicatedFood = { ...copyTodaysFood[index], count: copyTodaysFood[index].count + 1 }
          copyTodaysFood[index] = duplicatedFood;
        }
        copyTodaysFood.sort((a, b) => a.name.localeCompare(b.name))
        this.setState({ todaysFoods: copyTodaysFood });
      };

    render() {

        const { todaysFoods } = this.state;

        return (
        <div>
            <div>
            <button onClick={() => this.toggleButton()}>
                {this.state.formButton ? 'Hide' : 'Add food'}{' '}
                {/* Texto condicional del botón */}
            </button>
            {this.state.formButton && (
                <Form
                addFood={(food) => this.addFood(food)}
                showForm={this.toggleButton}
                />
            )}{' '}
            {/* Formulario condicional */}
            </div>

            <div className="form-item">
            <input placeholder="Search..." type="text" name="search" onChange={(e) => this.handleChange(e)} />
            </div>

            <div className="columns">
            <div className="column">{this.displayFood()}</div>
            <div className="column">
              {' '}
              <TodaysFood todaysFoods={todaysFoods} />{' '}
            </div>
          </div>
        </div>
        );
    }
}
