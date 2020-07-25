import React, { Component } from 'react'

export default class TodayFood extends Component {
    render() {
        console.log("props: ", this.props)
        const today = this.props.todayFood.map((ele, i) => {
            console.log("elemento", ele)
            return <li key={i}> {ele.name} {ele.calories} cal</li>
        })

        return (
            <div>
                <h1>Today' Food</h1>
                {today}
            </div>
        )
    }
}
