import './App.css';
import Foods from './foods.json';
import { useState } from "react";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Result, Row, Divider, Button } from 'antd';

function App() {
  const[foods, setFoods] = useState(Foods);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);  

function click(){
  setShowForm(!showForm);
}


  return (                   
    <div className="App">
      {showForm && <AddFoodForm foods={foods} setFoods={setFoods} />}
      <div className="center">
        <Button onClick={click}>
          {' '}
          {showForm ? 'Hide Form' : 'Add New Food' }
        </Button>
      </div>

      <Search search={search} setSearch={setSearch} />
      
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {!foods.length && (
          <Result
            status="warning"
            title="Oops! There is no more content to show."
          />
        )}
        {foods
          .filter((food) => {
            return food.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((food) => {
            return (
              <FoodBox
                food={food}
                foods={foods}
                setFoods={setFoods}
                key={food.name}
              />
            );
          })}
      </Row>
    </div>
  );
}

export default App;

