import React, { useContext } from "react";
import { FoodContext } from "../App";
import { withRouter } from "react-router-dom";

//Visual components
import { FoodBox } from "../components/FoodBox"
import { SearchBar } from '../components/SearchBar';
import { AddNewFoodBtn } from '../components/AddNewFood.button';
import { TodayFoodItem } from "../components/TodayFoodItem";




export const MainPage = withRouter(({ history }) => {
    const { foods, filtered, todayFoods } = useContext(FoodContext);

    const filteredFoods = foods.filter(food => {
        const re = new RegExp(filtered.toLowerCase());
        return re.test(food.name.toLowerCase());
    });


    return (
        <div>
            <div className="columns">
                <div className="column">
                    <AddNewFoodBtn onClick={() => history.push("/add")} />
                </div>
                <div className="column" style={{ paddingTop: 20 }}>or</div>
                <div className="column is-four-fifths">
                    <SearchBar />
                </div>
            </div>
            <div className="columns">


                <div className="column">
                    {filteredFoods.map((e, i) => <FoodBox key={i} food={e} />)}
                </div>


                <div className="column content">
                    <h2 className="subtitle">Today's foods</h2>
                    <ul>
                        {todayFoods.length !== 0 ? todayFoods.filter(e => e.quantity > 0).map((e, i) => <TodayFoodItem key={i} food={e} />) : <div>Add your today's foods by clicking +!</div>}
                    </ul>
                    {todayFoods.length !== 0 && <strong>Total: {todayFoods.length !== 0 ? todayFoods.filter(e => e.quantity > 0).reduce((e, acc) => e + Number(acc.calories) * acc.quantity, 0) : 0} cal</strong>}
                </div>
            </div>
        </div>)
});