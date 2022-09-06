import foods from './foods.json';
import { Row, Divider, Button} from 'antd';
import { useState } from 'react';
import FoodBox from './components/FoodBox.jsx';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';

function App() {
  const [listOfFood, setListOfFood] = useState(foods);
  const [ search, setSearch ] = useState('')
  
  

  return (
    <div className="App container">
      <AddFoodForm
        listOfFood={listOfFood}
        setListOfFood={setListOfFood}
        
      />

      <Button style={{ width: '100%', justifyContent: 'center' }}>
        {' '}
        Hide Form / Add New Food{' '}
      </Button>

      <SearchBar
         search={search}
         setSearch={setSearch}
      />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        <div>
          {listOfFood
          .filter((f) => f.name.toLowerCase().includes(search.toLowerCase()))
          .map((food, index) => (
            <FoodBox key={index} food={food} index={index }listOfFood={listOfFood} setListOfFood={setListOfFood}/>
          ))}
        </div>
      </Row>
    </div>
  );
}

export default App;
