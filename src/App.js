import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox/FoodBox';
import AddFoods from './components/AddFoods/AddFoods';
import Search from './components/Search/Search';
function App() {
  const [show, setShow] = React.useState(true);
  return (
    <div className="App">
      <Search />
      {show ? <AddFoods /> : null}
      <button onClick={() => setShow(!show)}>Add new food</button>
    </div>
  );
}

export default App;
