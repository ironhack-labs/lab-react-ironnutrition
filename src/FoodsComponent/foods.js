import { Component } from 'react';
import './foods.css'
import FoodBox from './../FoodBoxComponent/foodBox'
import foods from './../foods.json';
import FoodForm from '../FoodFormComponent/FoodForm';
import SearchBar from '../SearchBarComponent/SearchBar';

class DynamicFoods extends Component {
    constructor() {
        super()
        this.state = {
            foods,
            addFood: false
        }
    }

    createFood(newFood) {
        const foodCopies = [...this.state.foods]
        foodCopies.push(newFood)
        this.setState({ foods: foodCopies })
    }

    toggleForm() {
        this.setState({
            addFood: !this.state.addFood
        })
    }

    filteredList(data) {

        const foodSecure = [...this.state.foods]
        const foodCopies = [...this.state.foods]
        let filterFinal = []
        if (data.length > 2) {

            filterFinal = foodCopies.filter(elm => elm.name.toLocaleLowerCase().startsWith(data))
        } else {
            filterFinal = [...foods]
        }
        console.log(filterFinal);
        this.setState({ foods: filterFinal })
    }


    render() {
        return (
            <>

                <button onClick={() => this.toggleForm()}>{this.state.addFood ? 'Ocultar Formulario' : 'Mostrar Formulario'}</button>
                {this.state.addFood ? <FoodForm addFood={food => this.createFood(food)} /> : null}
                <SearchBar filterFood={data => this.filteredList(data)} />
                { this.state.foods.map(elm => {
                    console.log(this.state.foods);
                    console.log(elm);
                    return (
                        <FoodBox key={elm.name} {...elm} />
                    )
                })
                }
            </>
        )
    }
}

export default DynamicFoods
