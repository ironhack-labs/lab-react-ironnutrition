import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListFood from './ListFood';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
		<Nav/>
		<ListFood />
    </div>
  );
}

export default App;
