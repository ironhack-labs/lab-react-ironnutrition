import React from 'react'

const List = (props) => {
    let newArray = props.value
    let total = 0
    for (let i = 0; i < newArray.length; i++) {
        total += newArray[i].calories * newArray[i].quantity;
    }

    return (
        <div>
            <h1>Today's foods</h1>
            <ul>
                {newArray.map((a, i) => <li key={i}>-->{a.quantity} {a.name} {a.quantity * a.calories}Cal<button onClick={()=>a.delete(i)}>borrar</button></li>)}
            </ul>

            <p>{total}Cal</p>
        </div>
    )
}

export default List
