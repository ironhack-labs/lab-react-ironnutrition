import React, {Component} from 'react';
import foods from '../foods.json';
import FoodBox from './FoodBox';
import NewFood from './AddFood';
import SearchBar from './Search';

export default class Menu extends Component {

    constructor(props) {
      
        super(props)
  
        this.state = {
  
          foods: foods,
          newFood: false
          
        }
    }

    insertFood = newFood => {
        const foodCopy = [...this.state.foods]
        foodCopy.unshift(newFood)
        this.setState({ foods: foodCopy })
        
    } 

    viewForm = () => {
        this.setState({ newFood: !this.state.newFood})
    
    }

    handleSearch = (value) => {
        const foodsCopy = [...this.state.foods];
        let newList = foodsCopy.filter(item => {
        const lowerCase = value.toLowerCase();
        return item.name.toLowerCase().includes(lowerCase);
    })
        this.setState({
            filtered: newList
        });
    }

    render() {
  
        return (
            
                <>
                    <SearchBar searchTheFood={this.handleSearch}/>
                    <button className='button is-info' onClick={()=>this.viewForm()}>Add new Food</button>
                    {this.state.newFood && <NewFood insertFood={this.insertFood} />}
                    
                    <FoodBox/>
                    
                </>
            
        )
    }
};


