import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import Food from './components/Food/Food';
import addFood from './components/addFood/addFood';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.showFoods = this.showFoods.bind(this);
    this.state = {
      foods: foods,
      showForm: false,
      quantities: [],
      total: 0
    }
  }
    this.state = {
      foodForm: false,
    };

    this.addfoodForm = this.addfoodForm.bind(this);
  }

export default App;
  showaddFoodForm = () => {
    this.setState({ addfoodForm: !this.state.addfoodForm });
  };

  render() {
    return (
      <div>
        {this.state.addfoodForm ? (
          <NewFood
            updateFoodList={this.updateFood}
            addfoodForm={this.addfoodForm}
          />
        ) : (
          <button onClick={this.addfoodForm}>Add New</button>
        )}
        <Food />
      </div>
    );
  }
}