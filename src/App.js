import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Main from './components/Main'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Foods">
      <Main />
      </div>
    </div>
  );
}

export default App;
