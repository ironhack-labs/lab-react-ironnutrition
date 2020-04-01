import React from 'react'

const Calculate = (props) => {
    console.log(props);
    // let total;
    // if(props.calculate.length < 1){
    //     total = 0
    // }else{
    //     total = parseInt(props.calculate.reduce((a,b)=>parseInt(a.quantity.totalCalories)+parseInt(b.quantity.totalCalories)));
    //     // console.log(total);
    // }
    return (
        <div>
            <h1>Todays Food</h1>
            <ul>
                {props.calculate.map((e, index) => {
                    return <li key={e.quantity.name}>{e.quantity.quantity} - {e.quantity.name} = {e.quantity.totalCalories} Calorias <button onClick={()=>props.del(index)}>Delete</button></li>   
                })}
            </ul>
            <h2>Total:</h2>
        </div>
    )
}

export default Calculate


