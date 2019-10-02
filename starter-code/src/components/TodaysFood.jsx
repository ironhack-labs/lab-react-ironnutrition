import React, { Component } from 'react'

class TodaysFood extends Component {

    // state = {
    //     foodList: <li></li>
    // }

    // calculateTotal = () => {
    
    //     let total = 0;
    //     for(let i=0; i<this.props.foodList; i++){
    //         if(this.props.foodList.quantity){
    //             total += (this.props.foodList.quantity)*(this.props.foodList.calories);
    //         }
    //     }
    //     //console.log(this.props.totalCal);
    //     //this.props.showTotal(this.props.totalCal);
    //     this.setState({
    //         totalCal: total
    //     })
    // }

    printChosenFoods = () => {
        let list = this.props.chosenList.map((eachFood, i) => {
            return <li key={i}>{eachFood.num} {eachFood.chosen} = {eachFood.cal}</li>;
        })
        // this.setState({
        //     foodList: list
        // })
        
        return list;
    }


    render() {
        return (
            <div>
                <h2>Today's foods</h2>
                <ul>
                    {this.printChosenFoods()}
                </ul>
                <p>Total: {this.props.totalCal} cal</p>
            </div>
        )
    }
}


export default TodaysFood;