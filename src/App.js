import React from 'react';
import datos from './foods.json';
import Food from './components/Food';
import Formulario from './components/Formulario';
import './App.css';
import { useState } from 'react';

function App() {
  const [searchTerm, setsearchTerm] = useState('');
  return (
    <>
      <h1 className="title-app">IronFood</h1>
      <div className="navBar">
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setsearchTerm(event.target.value);
          }}
        />
      </div>

      <div style={{ display: 'flex' }}>
        <Food datos={datos.filter((val) => {
          if(searchTerm === ''){
            return val
          } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return val;
          }
        })} />
        <Formulario />
      </div>
    </>
  );
}

export default App;

