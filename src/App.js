import './App.css';
import { useState} from 'react';
import { Row, Divider, Button } from 'antd';
import foods from './foods.json';
import { AddFoodForm} from './components/AddFoodForm';
import { uuid } from './utils/uuid';
import { FoodList } from './components/FoodList';
import { SearchBar } from './components/SearchBar';

const productsData = foods.map((data) => ({ ...data, id: uuid() }));



function App() {
  const [products, setProducts] = useState(productsData);
  const [searchString, setSearchString] = useState('');

  const deleteFood = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const addFood = (newFood) => {
    setProducts((old) => {
      return [...old, newFood];
    });
  };
  
  const onChange = (event) => {
    setSearchString(event.target.value);
  };

  return (
    <div className="App">
      <AddFoodForm addFood={addFood} />

      <Button> Hide Form / Add New Food </Button>

      <SearchBar {...{ searchString, onChange }} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        <FoodList
          products={products.filter((product) =>
            product.name
              .toLowerCase()
              .includes(searchString.trim().toLowerCase())
          )}
          onDelete={deleteFood}
        />
      </Row>
    </div>
  );
}

export default App;
