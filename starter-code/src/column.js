import React, { Component } from "react";
import './App.css';
import food from './foods.json';

class Column extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="columns">
                <div className="column">
  </div>
                <div className="column">
  </div>
                <div className="column">
  </div>
                <div className="column">
                   Today's Food
                   {
                    this.props.children
                   }
  </div>
            </div>
        )
    }
}

export default Column;