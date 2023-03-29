import './App.css';
import foods from "./foods.json";
import React, { useState} from 'react';
import SimpleList from './components/SimpleList';

function App() {
  const [allFoods, setAllFoods] = useState(foods)
  return (
    <div>
    <SimpleList />
    
    </div>
  );
}

export default App;
