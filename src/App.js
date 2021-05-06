import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

class App extends React.Component {
  state = {
    foods: foods,
    temporalNewfood: {
      name: '',
      image: '',
      calories: '',
      quantity: '',
    },

};

export default App;
