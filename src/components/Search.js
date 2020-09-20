import React, {useState} from 'react'
import 'bulma/css/bulma.css'
import foods from "../foods.json"

function Search() {

    const [arr, setArr] = useState([]);
    const [name, setName] = useState("")
    const [calories, setCalories] = useState("")
  
    function searchFood(e){
        e.preventDefault();
        [...foods].forEach((ele, index)=>{
            if (ele.name === name){
            console.log(ele)
            setArr([...arr, ele])
            setName("")
            }
        })
    }

    return(

       <div> <br />
            <h1>BUSCAR ALIMENTOS</h1> <br />
            <form onSubmit={searchFood}> 
                <label for = "name"> Nombre del alimento: </label>
                <input type="text" name="name" value={name} onChange={e=>setName(e.target.value)} />
                <button type="submit">Buscar</button> 
            </form><br />
        
        </div> 
    )    
}
  
export default Search