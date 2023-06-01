import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

import { Row, Divider, Button } from 'antd';
import { useState } from 'react';

function App() {
  const [allAliments, setAllAliments] = useState(foods);
  const [aliments, setAliments] = useState(foods);
  const [display, setDisplay] = useState('none');
  const [textButton, setTextButton] = useState('Add New Food');

  const addNewAliment = (aliment) => {
    setAliments((state) => [aliment, ...state]);
    setAllAliments((state) => [aliment, ...state]);
  };

  const deleteAliment = (alimentName) => {
    setAliments((state) =>
      [...state].filter((food) => food.name !== alimentName)
    );
  };

  const handleChangeSearchBar = (filterAliment) => {
    let copy = [...allAliments];
    copy = copy.filter((aliment) =>
      aliment.name.toLowerCase().includes(filterAliment.toLowerCase())
    );
    setAliments(copy);
  };

  const handleChangeDisplay = () => {
    if (display === 'none') {
      setDisplay('block');
      setTextButton('Hidde Form');
    } else {
      setDisplay('none');
      setTextButton('Add New Food');
    }
  };

  return (
    <div className="App">
      <div style={{ display: display }}>
        <AddFoodForm addNewAliment={addNewAliment} />
      </div>

      <Button onClick={() => handleChangeDisplay()}> {textButton} </Button>

      <Search handleChangeSearchBar={handleChangeSearchBar} />

      <Divider>Food List</Divider>

      {aliments.length > 0 ? (
        <Row style={{ width: '100%', justifyContent: 'center' }}>
          {aliments.map((aliment) => {
            return <FoodBox food={aliment} delete={deleteAliment} />;
          })}
        </Row>
      ) : (
        <img
          src="https://img-9gag-fun.9cache.com/photo/axBOAjL_460s.jpg"
          alt="No more food"
        />
      )}
    </div>
  );
}

export default App;
