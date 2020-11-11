import React, {Component} from 'react';

class AddFood extends Component {
    state = {
        name: '',
        image: '',
        calories: ''
    }

    handleForm = () => {
        this.setState({ showForm: !this.state.showForm })
      }

    handleChange = event => {
        let {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.props.addOneFood(this.state);
        this.setState({
            name: '',
            image: '',
            calories: '',
        })
    }

    render() {
        const { showForm } = this.state;
        return (
            <div>
                <button onClick={this.handleForm}>
                    {showForm ? ('Close Form') : ('Add New Food')}
                </button>
                {showForm && ( <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" value={this.state.name} onChange={(e) => this.handleChange(e)}/>
                    
                    <label htmlFor="">Image:</label>
                    <input type="text" name="image" value={this.state.image} onChange={(e) => this.handleChange(e)}/>

                    <label htmlFor="">Calories:</label>
                    <input type="number" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)}/>

                    <input type="submit" value="Submit"/>
                </form>
                )}
            </div>
        );
    }
}

export default AddFood;