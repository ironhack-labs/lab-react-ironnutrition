import Foods from '..foods.json'
import { useState } from "react"

export default function Search(){

const [search, setSearch] = useState("")

    return(
        <div>
        <form>
        <label> Search </label>
            <input type="text" name="search" value="" onChange={(e)=>{setSearch(e.target.value)}}/>
        </form>
        {Foods.map((food,index)=>{
           return(<p>{food.name}</p>) 
        })}
        </div>
    )
}

