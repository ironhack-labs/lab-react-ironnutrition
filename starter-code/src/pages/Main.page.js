import React from "react";
import foods from "../foods.json";


//Components
import { FoodBox } from "../components/FoodBox"
import { SearchBar } from '../components/SearchBar';
import { AddNewFoodBtn } from '../components/AddNewFood.button';

import { withRouter } from "react-router-dom";

export const MainPage = withRouter(({ history }) => (
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
                {foods.map((e, i) => <FoodBox key={i} food={e} />)}
            </div>
            <div className="column content">
                <h2 className="subtitle">Today's foods</h2>
                <ul>
                    <li>1 Pizza = 400 cal</li>
                    <li>2 Salad = 300 cal</li>
                </ul>
                <strong>Total: 700 cal</strong>
            </div>
        </div>
    </div>));