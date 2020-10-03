import React from 'react'
import FoodBox from './FoodBox.jsx';
import Menu from './Menu.jsx';


class FoodList extends React.Component {
    state = {
        search: '',
        menu: []
    }

    handleChange(e) {        
        this.setState({
            search: e.target.value
        })
    }

    onAddToMenu = (food) => {
        const filteredMenu = this.state.menu.filter(el => el.name !== food.props.food.name)
        if(food.state.quantity > 0) {
            const newMenu = [...filteredMenu,{...food.props.food,['quantity']: food.state.quantity}]
            this.setState({
                menu: newMenu
            })
        } else {
            this.setState({
                menu: filteredMenu
            })
        }

    }

    render() {
        
        const filteredFoods = this.props.foods.filter(food => {
            return (new RegExp(this.state.search,"i").test(food.name) 
            || food.calories.toString() === this.state.search)
        })

        return (
            <div>
                <input type="text" className="input search-bar mb-2" name="search" placeholder="Search" onChange={this.handleChange.bind(this)} value={this.state.search}/>

                <div className ="columns">
                    <div className="column">
                        {filteredFoods.map(e=> {
                            return <FoodBox key={e.name} food={e} onAddToMenu={this.onAddToMenu}/>
                            })}
                    </div>
                    <div className="column content">
                        <Menu foods={this.state.menu}/>
                    </div>
                </div>
            </div>)
    }
}

export default FoodList