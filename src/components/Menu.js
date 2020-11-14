import React, {useState} from "react"
import Food from "./Food";

function Menu(props){

 const [todayFood,setTodayFood] = props.children;

    return (
        <aside>
            <h2 className="title is-2">Today's Food</h2>
            {todayFood.map((el,idx)=>{
                return (
                  <Food
                    key="idx"
                    name={el.name}
                    quantity={el.quantity}
                    image={el.image}
                    calories={el.calories}
                    todayFood={[todayFood, setTodayFood]}
                  />
                );
                })
                }
            Total: {todayFood.reduce((acc,el)=>acc+el.calories*el.quantity,0)} calories    
        </aside>

    )

}

export default Menu;