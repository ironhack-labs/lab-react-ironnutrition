import React from "react"


class AddNewFood extends React.Component{
    state = {
        name:"",
        calories:0,
        image:"",
    }
    handleChange = (event) =>{
        let {name, value, type} = event.target
        this.setState({
            [name]: value,
        })
    }

    handleFormSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state)
        this.props.addFood(this.state)
        this.setState({
            name:"",
            calories:0,
            image:"",
        })
    }
    render(){
        const {name, calories, image} = this.state
        return (
            <form onSubmit = {this.handleFormSubmit}>
                <label> Name</label>
                <input type="text" name="name" onChange={this.handleChange} value={name}/>

                <label> Calories</label>
                <input type="number" name="calories" onChange={this.handleChange} value={calories}/>

                <label> Image</label>
                <input type="text" name="image" onChange={this.handleChange} value={image}/>

                <button type="submit">Create</button>
            </form>
        )
    }

}






export default AddNewFood