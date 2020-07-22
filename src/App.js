import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import Home from "./components/Home/Home"
import { Route } from 'react-router-dom'
import Form from './components/Form/Form';

function App() {

  
  return (
    <div id="root"> 
  
    <Route exact path="/">
    <Home/>
    </Route>
    <Route exact path="/form">
      <Form/>
    </Route>
    
    </div>
    
  );
}

export default App;
