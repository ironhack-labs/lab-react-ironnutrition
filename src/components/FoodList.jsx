import React, {useState} from 'react';
import { FoodBox } from '.';
import Foods from '../foods.json';

function FoodList (){
    
    const [search,setSearch] = useState('')

        return(
    <div>
        <div className="control" style={{display:'flex',flexDirection:'row'}} >
        <input className="input" type="text" placeholder="Search food" onChange={event => {setSearch(event.target.value)}} />
        </div>

        <div>
            {Foods.filter((val)=>{
                if(search == ""){
                    return val
                } else if (val.name.toLowerCase().includes(search.toLowerCase())){
                    return val
                }
            }).map((list, index)=>{
                return <div>
                    <FoodBox
                        key={index}
                        name={list.name}
                        calories={list.calories}
                        image={list.image}
                        quantity={list.quantity}
                    />
  
                     </div>
            })}
        </div>
    </div>
        )
        
}
export default FoodList;