import React,{useState} from 'react'
import Foods from '../../foods.json'
import FoodBox from '../FoodBox'


function List (){
    const [filterFood, setFilterFood] = useState("")

    
        return(
            <div>
            <div className="field has-addons">
  <div className="control">
    <input className="input" type="text" placeholder="Find food" onChange={e => {setFilterFood(e.target.value)}}/> 
  </div>
    </div>
            
            {Foods.filter((val)=>{
                if(filterFood == ""){
                    return val
                }else if(val.name.toLowerCase().includes(filterFood.toLowerCase())){
                    return val
                }
            })
            .map((detail, index)=>{
                return<div>
                   <FoodBox 
                   name={detail.name}
                   calories={detail.calories}
                   image={detail.image}
                   quantity={detail.quantity}/>
                </div>
            })}

                  </div>
        )
    
}

export default List