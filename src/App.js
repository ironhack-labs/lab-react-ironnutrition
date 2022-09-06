import './App.css';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import PageNoContent from './components/PageNoContent';
function App() {
  const [products, setProducts] = useState(foods);
  const [showForm, setShowForm] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(foods)
  const deleteFood = (nameFood) => {
    const updateProducts = products.filter((product) => {
      return product.name !== nameFood;
    });
    setProducts(updateProducts);
    setFilteredProducts(updateProducts)
  };

  const AddFood = (food) => {
    const newArray = [food, ...products];
    const updateProducts = [food, ...products]
    setProducts(newArray);
    setFilteredProducts(updateProducts)
    setShowForm(false);
  };
  const SearchFood = (str) => {
    let newFilteredProducts
    if (str === '') {
      newFilteredProducts = [...products]
    } else {
      newFilteredProducts = products.filter((product) => {
        return product.name.toUpperCase().includes(str.toUpperCase());
      });
    }
    setFilteredProducts(newFilteredProducts);
  };

  return (
    <div className="App">
      {showForm && <AddFoodForm addFood={AddFood} />}
      <Button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Form' : 'Add NewFood'}
      </Button>
      <Search search={SearchFood} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filteredProducts.length === 0 ? <PageNoContent /> : filteredProducts.map((product) => {
          return (
            <FoodBox
              food={{
                name: product.name,
                calories: product.calories,
                image: product.image,
                servings: product.servings,
              }}
              delete={deleteFood}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
