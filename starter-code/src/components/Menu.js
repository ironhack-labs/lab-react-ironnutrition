import React, { Component } from "react";

class Menu extends Component {
    state = {
        quantity: 1,
        actualItem: "",
    };

    printMenu = () => {
        return this.props.yourMenu.map((food, index) => (
            <li key={index}>
                {food.quantity} ud {food.name}  ={food.quantity} * {food.calories} calorías
            </li>
        ));
    };

    printCalories = () => {
        return this.props.yourMenu.reduce(
            (a, b) => (a += b.calories * b.quantity),
            0,
        );
    };

    deleteItem = e => {
        this.setState(
            {
                actualItem: e.currentTarget.dataset.item,
            },
            () => this.props.deleteFood(this.state.actualItem),
        );
    };

    render() {
        return (
            <div>
                <aside class="menu">
                <ul class="menu-list">
                    <li>
                        <a class="is-active"><b><u>Menú de Hoy</u></b></a>
                        <ul>{this.printMenu()}</ul>
                        <h3><strong>Total Calorías : {this.printCalories()} calorías </strong></h3> 

                    </li>
                </ul>
                </aside>
            </div>
        );
    }
}

export default Menu;