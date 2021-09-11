import React from "react";
import './listBox.css'

const ListBox = (props)=>{
    console.log('lista de comida para editar ', props.list)
    
    const listFood = props.list.map((elem,index)=> {return (
        <li key={new Date()* index}>
            {elem.quantity} {elem.name} - {elem.calories*elem.quantity}
        </li>
    )});
        console.log('lista de comida editada ',listFood);
    return listFood;

}

export default ListBox;