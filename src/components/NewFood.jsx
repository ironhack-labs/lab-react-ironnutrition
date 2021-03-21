import React from 'react'

class NewFood extends React.Component {

    state = {
        name:"",
        calories:0,
        image:""
    };

    handleChange = (event) => {
        const key = event.target.name;
        this.setState({[key]: event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        
        let newFood = {
            name: this.state.name,
            calories:this.state.calories,
            image:this.state.image,
        };
        this.props.addNewFood(newFood)

        console.log("Your food is saved!")
        

    }

    render(){
    return (
        <div>

            <form method="" onSubmit={this.handleSubmit}> 

                <label htmlFor="name">Name</label>
                <input id="name" 
                onChange={this.handleChange}
                value={this.state.name}
                name="name"
                type="text"/>

                <label htmlFor="name">Calories</label>
                <input id="calories" 
                onChange={this.handleChange}
                value={this.state.calories}
                name="calories"
                type="number"/>

                <label htmlFor="name">Image</label>
                <input id="image" 
                onChange={this.handleChange}
                value={this.state.image}
                name="image"
                type="text"/>

                <button>Save</button>


            </form>
            
        </div>
    )

    }
}

export default NewFood
