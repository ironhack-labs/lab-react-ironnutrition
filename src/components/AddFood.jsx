import React, { Component } from 'react'

class AddFood extends Component {
    render() {
        const {onAddFood} = this.props;

        return (
            <form className="mt-1" onSubmit={onAddFood} noValidate autoComplete='off'>
                <h1 className="is-size-4">Food Name</h1>
                <input className="input is-link my-2 has-text-centered" type="text" placeholder="Food Name" name="name"></input>
                <h1 className="is-size-4">Food Calorie</h1>
                <input className="input is-link my-2 has-text-centered" type="number" placeholder="Food Calorie" name="calories"></input>
                <h1 className="is-size-4">Image Url</h1>
                <input className="input is-link my-2 has-text-centered" type="text" placeholder="Image Url" name="image"></input>
                <button className="button is-link is-size-5 my-2" type="submit">Add Food</button>
            </form>
        )
    }
}

export default AddFood;