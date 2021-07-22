import { Component } from "react";

class Addnewfood extends Component {
    state = {
        name = '',
        calories = '',
        image = '',
        quantity = ''
    }

    render(){
        return (
            <form>
                <label>Food Name:</label>
                <input type='text' name='name' value={this.state.name}/>
                <label>Calories:</label>
                <input type='text' name='calories' value={this.state.calories} />
                <label>Image</label>
                <input type='text' name='image' value={this.state.image} />
            </form>

        )
    }
}