import React from 'react'

function TodaysFood(props) {
console.log(props)
let total = 0
    props.onMenu.forEach(aliment => {
        total = total + aliment.calories
    })

    
    

    return (
        <div>
            <h2>Today's food</h2>
                <ul>
                    {props.onMenu.map(aliment => {return (
                    <li>
                        <p>{aliment.quantityUpdated} {aliment.name} - {aliment.calories} cal</p> 
                    </li>

                    )}
                    )}
                </ul>
                <div>
                      <p>Total: {total} calories</p>
                </div>
        </div>
    )
}

export default TodaysFood
