import React, { Component } from 'react';

class TodaysFood extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Today's foods</h1>
                <ul>{this.props.foodForToday}</ul>
                <hr></hr>
                <h3>Total: {this.props.foodForToday.length !== 0 ? this.props.calories.reduce((acc, currentValue) => acc + currentValue) : '0'} cal</h3>
            </React.Fragment>
        )
    }
}

export {TodaysFood};
