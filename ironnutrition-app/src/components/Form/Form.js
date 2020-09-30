import React, { Component } from 'react'

// import foods from '../../foods.json';

class Form extends Component {
    constructor() {
        super()
        this.state = {

            name: '',
            image: '',
            calories: 0,


        }
    }

    handleNameInput = e => this.setState({ name: e.target.value })
    handleCaloriesInput = e => this.setState({ calories: e.target.value })
    handleImageInput = e => this.setState({ image: e.target.value })

    handleSubmit = e => {
        e.preventDefault()


        this.props.addForm(this.state) 

        this.setState({                 
            name: '',
            calories: 0,
            image: '',

        })
    }


    render() {
        return (
            <>


                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="text" name="name" value={this.state.name} onChange={this.handleNameInput} />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Calories</label>
                        <div className="control">
                            <input className="input" type="number" name="calories" value={this.state.calories} onChange={this.handleCaloriesInput} />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Image</label>
                        <div className="control">
                            <input className="input" type="text" name="image" value={this.state.image} onChange={this.handleImageInput} />
                        </div>
                    </div>

                    <input type="submit" value="Submit" />



                </form>
            </>
        )
    }
}

export default Form