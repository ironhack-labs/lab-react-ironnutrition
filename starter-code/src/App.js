import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json'

class App extends Component {
	render() {
    return (
      <div className="App">
        <p className="App-intro">
          Some foods {foods.length}
        </p>
      </div>
    );
  }
}

export default App;
