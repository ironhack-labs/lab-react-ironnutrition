import {useState} from 'react'

export default function TodaysFoods(props) {


  return (
    
    <ul>
    {
        props.todayArr.map((e)=>{
            return (
                    <li>{e.quantity} {e.name} = {e.calories} cal </li>
            )
        })
    }
    </ul>



  )
}
