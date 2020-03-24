import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import 'bulma/css/bulma.css';
import './App.css';

//Components
import { Layout } from "./components/Layout"
import { MainPage } from './pages/Main.page';
import { AddNewFoodPage } from './pages/AddNewFood.page'

//Context
import initialFoods from "./foods.json";
export const FoodContext = React.createContext(initialFoods);


const App = () => {
  const [foods, setFoods] = useState(initialFoods);
  return (
    <FoodContext.Provider value={{ foods, setFoods }}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/add" component={AddNewFoodPage} />
          </Switch>
        </Layout >
      </Router>
    </FoodContext.Provider>

  )
};

export default App;
