import React, {Component} from 'react'

class AddFood extends Component {

    constructor (props) {
        super (props)

        this.state = {
            name: '',
            calories: '',
            image: '',
        }
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.props.addFood(this.state) 
        this.setState({
            name: '',
            calories: '',
            image: ''
        })
    }

    handleInputChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }
    
    render (){
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
        
                    <label>Number of calories</label>
                    <input type="number" name="calories" value={this.state.calories} onChange={this.handleInputChange}/>
        
                    <label>Image</label>
                    <input type="text" name="image" value={this.state.image} onChange={this.handleInputChange}/>
                    
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default AddFood;