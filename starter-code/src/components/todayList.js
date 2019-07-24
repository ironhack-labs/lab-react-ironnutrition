import React, { Component } from 'react';

export default class TodayList extends Component{
    render(){
        return <li>{this.props.quantity} {this.props.name} = {this.props.calories} cal</li>
    };
};