import React, { Component } from 'react';


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
        <p>It is {this.state.date.toLocaleTimeString()} on Planet React</p>
    );
  }
}

export default Clock;
  