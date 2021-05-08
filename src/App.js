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
        };

        this.addNewFood = this.addNewFood.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
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
                <div>
                    {this.state.food.map((item) => {
                        return (
                            <Foodbox food={item} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default App;
