import React from 'react';

import '../App.css';
import 'bulma/css/bulma.css';
import Foodbox from '../components/FoodBox';
import FormFood from '../components/FormFood';
import NavBar from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="divForm">
        <div>
          <Foodbox />
        </div>
        <div className="Divfood">
          <FormFood />
        </div>
      </div>
    </div>
  );
}

export default App;
