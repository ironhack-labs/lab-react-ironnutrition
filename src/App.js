import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox/FoodBox';
import foods from './foods.json';


class App extends React.Component {

  state = {
    foods: [],
  };

  componentDidMount() {
    this.setState({ foods })
  }


  render() {
    const { foods } = this.state
    return (
      <div className='w-25'>
        {foods.map(food =>
          <FoodBox {...food} />
        )}
      </div>

    )
  }
}

export default App
