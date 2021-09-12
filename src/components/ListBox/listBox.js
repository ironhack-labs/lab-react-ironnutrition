import React from "react";
import './listBox.css'

const ListBox = (props)=>{
    console.log('lista de comida para editar ', props)   

    console.log('dentro do listbox --> trabalhando o array', props);
    const listFood = props.list.map((elem,index)=> {return (
        <li key={index}>
            {elem.quantity} {elem.name} - {elem.calories*elem.quantity} calories
        </li>
    )});
        console.log('lista de comida editada ',listFood);
    return listFood;

}

export default ListBox;