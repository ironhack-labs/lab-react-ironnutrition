import React from 'react'


function TodayFood(props) {

    let {items} = props

    const total = items.reduce((sum, elem) => {
        return sum + (elem.quantity*elem.calories)
    }, 0)

    return (
        <div className="card myCard">
            <div className="card-image">
            <p className="title is-2">Total</p>

            </div>
            <div className="card-content">
                <div className="media">
                
                    {
                        items.map((elem, index) => {
                            return (
                                <div className="media-content" key={index}>
                                    <p className="title is-5">Name: {elem.quantity} x {elem.name} = {elem.quantity* elem.calories} calories</p>
                                </div>
                            )
                        })
                    }
                <h1 className="title is-4">Total calories is: {total}</h1>
                </div>
                
                </div>
            </div>
    )
}

export default TodayFood
