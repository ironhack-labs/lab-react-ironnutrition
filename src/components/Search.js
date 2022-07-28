import { useState } from 'react';
import foods from "../foods.json"

function Search(){
    const [food, setFood] = useState(foods);
    const[name,setName] = useState('');

    const handleSubmit = (e) => { setName(() => { 
    const newArr = foods.filter((food) => {
        return food.name.includes(e.target.value)
    })
})}
    function change1(e){
        setName({...name, [e.target.name] : e.target.value })
        console.log(name)
    }
    
    return(
    <form onChange={handleSubmit} >
        <label>Saerch</label><input value={name} type="text" onChange={change1} name="name" />
    </form>
        )
}
export default Search;