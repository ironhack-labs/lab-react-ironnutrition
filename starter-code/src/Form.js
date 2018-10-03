import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            calories: '',
            image: '',
        }
    }

    handleSubmit = () => {
        let {name, calories, image, error} = this.state;
          if (name === '') return this.setState({error: 'Empty name'});
          if (calories === '') return this.setState({error: 'Empty colories'});
          if (image === '') return this.setState({error: 'Empty image'});
        this.props.onSubmit(this.state)
        this.setState({
            name: '',
            calories: '',
            image: '',
        })
    }

render() {
        let {name, calories, image, error} = this.state;
        return (
            <form>
                <label>Name:</label>
                <input value={name} type="text" placeholder="Name" onChange={e => this.setState({ name: e.target.value })} />
                <label>Calories:</label>
                <input value={calories} type="text" placeholder="Calories" onChange={e => this.setState({ calories: e.target.value })} />
                <label>Image:</label>
                <input value={image} type="text" placeholder="Image" onChange={e => this.setState({ image: e.target.value })} />
                <button onClick={this.handleSubmit.bind(this)}>Submit Food</button>
            </form>

        )
    }
}

export default Form