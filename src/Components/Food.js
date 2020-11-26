import React from "react";

function Food(props){

    const {quantity, name, calories, image} = props;
    const [todayFood, setTodayFood] = props.todayFood;

    function handleClick(foodName){
        let foodCollection = [...todayFood];
        let index = foodCollection.findIndex(food => food.name === foodName);
        foodCollection.splice(index,1); 
        setTodayFood([...foodCollection]);
    }

    return (
        <article className="media">
            <figure className="media-left">
                <p className="image is-64x64">
                    <img src={image} alt={name}/>
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
                <button className="delete" onClick={()=>handleClick(name)}></button>
            </div>
        </article>
    );
}

export default Food;