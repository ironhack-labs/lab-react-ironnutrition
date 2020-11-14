import React,{useState} from "react"

function Food(props){

    const {quantity, name, calories, image} = props;
    const [todayFood, setTodayFood] = props.todayFood;

function handleClick(e){
    let arr = [...todayFood];
    let idx = arr.map(el=>el.name).indexOf(name);
    if(idx >= 0){
        arr.splice(idx,1); 
    }
    setTodayFood([...arr]);
}

    return (
      <li>
        <p>
          <a onClick={handleClick} className="delete is-danger mx-1"></a>
          {quantity} - {name} - {quantity * calories}
        </p>
      </li>
    );
}


export default Food