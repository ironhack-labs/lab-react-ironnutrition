import React, {Component} from 'react'

class AddFood extends Component {
    constructor(props){
        super(props)

        this.state= {
            name:"",
            calories:"",
            image:"",
            quantity: 0
        }
    }

    handleFormSubmit = e => {
        e.preventDefault()

        this.props.addFood(this.state)
        this.setState({
            name:"",
            calories:"",
            image:"",
            quantity: 0
        })
    }

    handleInputChange = e => {
        let {name, value} = e.target

        this.setState({[name]: value})
    }

    render(){
        return (

            <div>

                <form onSubmit={this.handleFormSubmit}>

                    <label>
                        Food Name: <br/>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                    </label>
                    <br/>
                    <label>
                        Calories: <br/>
                        <input type="number" name="calories" value={this.state.calories} onChange={this.handleInputChange} />
                    </label>
                    <br/>
                    <label>
                        Image Link: <br/>
                        <input type="text" name="image" value={this.state.image} onChange={this.handleInputChange} />
                    </label>

                    <button type="submit">Send</button>
                </form>

            </div>
        )

    }

}

export default AddFood