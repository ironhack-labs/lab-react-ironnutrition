import React, { Component } from 'react'

export class TodayFood extends Component {

    

    render() {
        const {selectItems} = this.props
        
        return (
            <div className="TodayFood" >
                <h1>Today's Food</h1>
                <ul>
                   {selectItems.map(item => 
                        <li>{item.quantity} {item.name}</li>
                    )}
                    
                </ul>

                <p>Total: </p>
            </div>
        )
    }
}

export default TodayFood
