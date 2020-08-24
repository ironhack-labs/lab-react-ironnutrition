import React from 'react'



function Addfood (props) {

    // this.state = {
    //     foods = foods
    //     name = [],
    //     calories: '',
    //     image: ''
    // }

    return (
            <form onSubmit={this.props.onAdd}>
                <input name="item" type="text"></input>
                <button type="submit">Add Food</button>
            </form>
    )
}

export default Addfood