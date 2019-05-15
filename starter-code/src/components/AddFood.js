import React, { Component } from 'react';

class AddFood extends Component {

    render() {
        return (
            <div class="column content">
                <br></br>
                <h2 class="subtitle">Today's foods</h2>
                <ul>
                    <li>1 Pizza = 400 cal</li>
                    <li>2 Salad = 300 cal</li>
                </ul>
                <strong>Total: 700 cal</strong>
            </div>
        );
    }
}

export default AddFood;