import React from 'react'

const Calculate = (props) => {
    console.log(props);
    let arrFBox=props.calculate;
    console.log('lol:',arrFBox);
    let total=0;
    if(props.calculate.length < 1){
        total = 0
    }else{
        let sumatorio=0;
        arrFBox.forEach((a)=>sumatorio+=(a.fBox.calories*a.fBox.quantity))
        total=sumatorio;
        console.log(total);
    }
    return (
        <div>
            <h1>Todays Food</h1>
            <ul>
            {arrFBox.length !== 0 ? (arrFBox.map((e, index) => {
                    return <li key={index}>{e.fBox.quantity} - {e.fBox.name} = {e.fBox.calories*e.fBox.quantity} Calorias <button onClick={()=>props.del(index)}>Delete</button></li>   
                })) : (arrFBox.map((e, index) => {
                    return <li>0 - Sin Producto = 0 Calorias</li>   
                }))}
            </ul>
            <h2>Total:{total}</h2>
        </div>
    )
}

export default Calculate


