import React, { Component } from 'react';
import foods from '../../foods.json';
import FoodBox from '../foodBox/FoodBox';
import Button from '../button/Button';
import FormFood from '../formFood/FormFood';
import './App.css';
import 'bulma/css/bulma.css';


class App extends Component {
  constructor() {
    super();
    this.form = false;
  }

  showForm() {
    (this.form = !this.form);
  }

  render() {
    return (
      <div className="App">
        <Button name="Add" className="button is-success" onCLick={ } />
        {
          if (showForm) { 
            <FormFood />
          }
        }
        {
          foods.map((el, idx) => {
            return <FoodBox name={el.name} calories={el.calories} image={el.image} key={idx} />
          })
        }
      </div>
    );
  }
}

export default App;
