import React from 'react'

function TodaysList(props) {
    const total = props.list.map(item => item.quantity*item.calories).reduce((total,amount) => total+amount)
    const foodsArray =  props.list.map(item =>{if(item.quantity !==0){
       return <li key={props.list.indexOf(item)} className= 'has-text-justified'>{item.quantity} {item.name} = {item.quantity * item.calories}</li>
        }else{return console.log('Nothing in today`s list')}})
    return (
        <div>
        <div className='content'>
        <h2 className= 'has-text-justified'>Today's List</h2>
        <ul>
        {foodsArray}
        </ul>
        </div>
        <p className= 'has-text-justified'>Total: {total}</p>
        </div>
    )
}

export default TodaysList
