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

  <article className="media">
    <figure className="media-left">
      <p className="image is-64x64">
        <img src={image} />
      </p>
    </figure>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{name}</strong><br/><small>({quantity})</small> <small>{calories*quantity} cal</small>
          </p>
      </div>
    </div>
    <div className="media-right">
      <button className="delete" onClick={handleClick}></button>
    </div>
  </article>

    );
}


export default Food