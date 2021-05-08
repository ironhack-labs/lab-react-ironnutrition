import React, {Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsArray from './foods.json';
import Foodbox from './components/Foodbox';
import FoodForm from './components/FoodForm';
import SearchBar from './components/SearchBar';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            food: foodsArray,
            isFormVisible: false,
            todaysFoods: [],
        };

        this.addNewFood = this.addNewFood.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.addFoodToList = this.addFoodToList.bind(this);
    };

    showForm() {
        this.setState({
            isFormVisible: true,
        });
    };

    addNewFood(e, inputs) {
        e.preventDefault();
        const updatedArr = [...this.state.food];
        updatedArr.push(inputs);
        this.setState({
            food: updatedArr,
            isFormVisible: false,
        });
    };

    onSearchChange(value){
        const finalArr = this.state.food.map((item) => {
            return {
                ...item,
                hidden: item.name.toLowerCase().indexOf(value.toLowerCase()) === -1, // we use toLowerCase to find similar substrings regardless of the case.
            };
        });

        this.setState({
            food: finalArr,
        });
    }

    addFoodToList(item){
        const newTodaysFoods = [...this.state.todaysFoods, item];
        const newFoodObject = {};
        [...newTodaysFoods].forEach((item) => {
            if (!newFoodObject[item.name]) {
                // If we have not visited this item yet we just put it as it is
                newFoodObject[item.name] = item;
            } else {
                // If we have visited before we just add the quantity to its previous value
                newFoodObject[item.name] = {
                    ...newFoodObject[item.name],
                    quantity: newFoodObject[item.name].quantity + item.quantity,
                };
            }
        });

        this.setState({
            todaysFoods: Object.values(newFoodObject),
        });
    }

    render() {
        return (
            <div>
                <div className={`formBackground ${this.state.isFormVisible ? '' : 'hidden'}`}>
                    <div className="formElement">
                        <FoodForm addNewFood={this.addNewFood}/>
                    </div>
                </div>
                <div>
                    <button onClick={() => { this.showForm(this); }}>Add new food</button>
                </div>
                <div>
                    <SearchBar onChange={this.onSearchChange} />
                </div>
                <div className="columnContainer">
                    <div>
                        {this.state.food.map((item) => {
                            return (
                                <Foodbox food={item} addFoodToList={this.addFoodToList} />
                            )
                        })}
                    </div>
                    <div>
                        <h3>Today's foods</h3>
                        <ul>
                            {this.state.todaysFoods.map(item => (
                                <li>{item.quantity} {item.name} = {parseInt(item.quantity) * parseInt(item.calories)} cal</li>
                            ))}
                        </ul>
                        <div>Total: {this.state.todaysFoods.reduce((total, item) => (total + (parseInt(item.quantity) * parseInt(item.calories))), 0)} cal</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
