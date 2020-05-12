import React, { Component } from 'react';
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


class Clock extends Component {

    constructor(props){
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    tick(){
        this.setState({
            date: new Date()
        })
    }
    render(){
    return (
        <p>Today is  {this.state.date.toLocaleDateString("en-US", options)} and time is {this.state.date.toLocaleTimeString()}</p>
    );
  }
}

export default Clock;
  