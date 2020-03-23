import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import 'bulma/css/bulma.css';
import './App.css';

//Components
import { Layout } from "./components/Layout"
import { MainPage } from './pages/Main.page';
import { AddNewFoodPage } from './pages/AddNewFood.page'

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/add" component={AddNewFoodPage} />
      </Switch>
    </Layout >
  </Router>

);

export default App;
