import React from 'react'

class MenuList extends React.Component {

    handleClick = () => {
        this.props.deleteFoodMenu(this.props.food)
    }

    render() {

        return (
            <div className="columns">
                <div className="column"><li key={this.props.food.name}>{this.props.food.quantity} {this.props.food.name} = {this.props.food.calories} cal</li></div>
                <div className="column"><button className="button is-small is-danger" onClick={this.handleClick}>Delete</button></div>
            </div>
        )
    }

}

export default MenuList
