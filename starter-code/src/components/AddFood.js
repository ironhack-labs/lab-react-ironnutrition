import React, {Component} from 'react';

class AddFood extends Component {
    constructor(props) {
        super (props)
        this.state = {
            name:'',
            calories: 0,
            image: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const {name, value} = e.target
        console.log('aqui handle change', this.state);
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        this.props.addFood(this.state)
        this.props.toggleForm()

        this.setState ({
            name:'',
            calories: 0,
            image: '',
        })
    }


    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
                <label>Calories</label>
                <input type='text' name='calories' value={this.state.calories} onChange={this.handleChange}/>
                <label>Image</label>
                <input type='text' name='image' value={this.state.image} onChange={this.handleChange}/>
                <button>Submit</button>
            </form>
        )
    }
}

export default AddFood;