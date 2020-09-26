import React from 'react';
import FoodBox from '../FoodBox/FoodBox';
import Menu from '../Menu/Menu';

export default class FoodList extends React.Component {
    state = {
        search: '',
        menu: []
    }

    handleChange = (e) => {
        this.setState({search: e.target.value})
    }

    onAddToMenu = (food) => {
        const newMenu = [ food, ...this.state.menu.filter(i => i !== food)].filter(f => f.quantity > 0 )
        this.setState({ menu : newMenu })
    }

    deleteFromMenu = (food) => {
        this.setState({ menu: this.state.menu.filter( f => f !== food) })
    }

    render() {

        const filteredFood = this.props.foods.filter(f => (
                new RegExp(this.state.search, 'i').test(f.name) || 
                f.calories.toString() === this.state.search
        ))
        

        return (
            <div className="FoodList">
                <input 
                    type="text" 
                    className="input search-bar mb-3" 
                    name="search" 
                    value={this.state.search} 
                    onChange={this.handleChange} 
                    placeholder="Search for food or calories"
                />
                 
 
                <div className="columns">
                    <div className="column">
                        {filteredFood.map((food) =>  (
                            <FoodBox food={food} onAddToMenu={this.onAddToMenu} /> 
                        ))}
                    </div>

                    <div className="column content">
                        <Menu foods={this.state.menu} deleteFromMenu={this.deleteFromMenu}/>
                    </div>
                </div>
                
            </div>
        )
    }
}