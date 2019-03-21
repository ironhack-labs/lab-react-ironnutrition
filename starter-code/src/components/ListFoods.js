import React from 'react'

import FoodBox from "./FoodBox"

//const lisOfFoods = 

const ListFoods = (props)=>{
    return <div >
        { props.foods.map((food,index)=><FoodBox key={index}{...food}/>)}
    </div>
}



export default ListFoods