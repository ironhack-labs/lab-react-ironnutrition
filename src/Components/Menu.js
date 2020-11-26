import React from "react"
import Food from "./Food";
import "./style/Menu.css";

function Menu(props){

 const [todayFood,setTodayFood] = props.children;
    
    return (
      <aside>
        <h2 className="title is-2">Today's Food</h2>
        {todayFood.map((food, index) => {
          return (
            <Food
              key="index"
              name={food.name}
              quantity={food.quantity}
              image={food.image}
              calories={food.calories}
              todayFood={[todayFood, setTodayFood]}
            />
          );
        })}
        <div class="box has-text-centered">
          Total:{' '}{todayFood.reduce((acc, food) => acc + food.calories * food.quantity, 0)}{' '}calories
        </div>
      </aside>
    );
}

export default Menu;