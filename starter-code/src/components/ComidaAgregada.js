import React from 'react'

function ComidaAgregada(props) {
    console.log(props)
    const {addFood} = props
    let totalCal = 0
    //por que le ponemos el food.length = cuando hay algo en el array de addFood va a hacer una suma
    if(addFood.length){
        //cuando hacemos el forEach, ay ya no me acuerdo del += :( sad
        (addFood.forEach(food =>  totalCal += food.quantity * food.calories))
    }
    return (
        <div >
            {/* aqui hay que meter el map */}
            <h3>Comida agregada</h3>
            {/* esta logica adentro del map tampoco me queda muy clara :( */}
            <ul>
            {addFood.map( (food) => {
                return <li>{food.quantity} {food.name} = {food.quantity * food.calories}Cal</li>
            })}
            </ul>
        <span>Total: {totalCal}Cal</span>
        </div>
    )
}


export default ComidaAgregada
