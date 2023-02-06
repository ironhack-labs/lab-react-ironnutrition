import './App.css';
import 'antd/dist/reset.css';
import foodData from './foods.json';
import { Button, Divider, Row } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';
import { useState, useEffect } from 'react';

function App() {
  const [foods, setFoods] = useState(foodData);
  const [word, setWord] = useState('');

  //Bonus
  const [hidden, setHidden] = useState(false);

  // una funcion que espere cuando se termine de llenar todos los datos del
  //formulario para almacenar un nuevo objeto
  const addFood = (newFood) => {
    //[{...},{...}]=>[...]
    setFoods((prevState) => [...prevState, newFood]);
    /**
     * const newArr = [...foods]
     * newArr.push(newFood)
     * setFoods(newArr)
     */
  };

  const onSearch = (word) => {
    setWord(word);
  };

  const deleteFood = (index)=>{
    const newFoods = [...foods]
    newFoods.splice(index, 1)
    setFoods(newFoods)
  }


  //useEffect mounting
  //el [] es muy importante para un useEffect, este indica que solo se active una vez
  //si el [variable] este estara a la espra de un cambio ene sa variable para ejecutarse otra vez
  // si no colocamos los [], el useEffect se va a estar activando n cantidad de veces

  useEffect(() => {
    console.log("Me ejecuto");
  }, [])

    //useEffect updating
    useEffect(()=>{
      console.log("Cantidad de comida", foods.length);
    },[foods.length])

  return (
    <div className="App">
      {/* demo list */}
      {/* Display Add Food component here */}
      {!hidden && <AddFoodForm addFood={addFood} />}

      <Button onClick={() => setHidden(!hidden)}>
        {!hidden ? 'Hide Form ' : 'Add New Food'}{' '}
      </Button>

      {/* Display Search component here */}
      <SearchBar onSearch={onSearch} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {foods.filter((itemFood) =>
          itemFood.name.toLowerCase().includes(word.toLowerCase())
        ).length
          ? foods
              .filter((itemFood) =>
                itemFood.name.toLowerCase().includes(word.toLowerCase())
              )
              .map((food, index_food) => (
                //name.image, calories
                //food = {name,image,calories}
                //{...food}
                //name={item.name}
                //item={item}
                <FoodBox {...food} key={index_food} deleteFood = {()=>deleteFood(index_food)} />
              ))
          : 'No hay nada'}
      </Row>
    </div>
  );
}

export default App;
