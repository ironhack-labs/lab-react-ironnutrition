import React, { Component } from 'react';

class TodaysFood extends Component {
    state = {
        total: 0
    }

    render() {
        const { total } = this.state;

        return (
            <div>
                <h2>Today's Food</h2>
                <p><b>Total: {total} cal</b></p>
            </div>
        );
    }
}

export default TodaysFood;