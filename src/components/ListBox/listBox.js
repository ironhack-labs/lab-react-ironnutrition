import React, {useState} from "react";
import './listBox.css'

const ListBox = (props)=>{

    const [list, setList] = useState(props.list)


    const listFood = list.map((elem,index)=> {
        for(let index2 = index+1; index2<list.length; index2 +=1 ){
            if(elem.name === list[index2].name){
                console.log('condiÇão atendida ==>', elem,'é igual a ',list[index2].name);
            elem.quantity += list[index2].quantity;
            list.splice(index2,1);
            index2 += 1 ;    
            }
        }        
        return (
        <li key={index} className="is-list">
          	&rarr; {elem.quantity} {elem.name} - {elem.calories*elem.quantity} calories   
           <button id="button-remove-food" className="button is-small is-danger" onClick={()=>removeItem(elem,index)}> - </button>
        </li>
    )});
    
    const removeItem = (elem,index) =>{
        if(elem.quantity === 1){
            console.log('O elemento ', elem,' esta com o valor de ', elem.quantity, ' seu index é ', index)
            list.splice(index,1);
        }else{
            elem.quantity -= 1;
        }
        
        props.createList(list);
    }
    return listFood;

}

export default ListBox;