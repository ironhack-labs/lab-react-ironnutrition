import './App.css';
import 'antd/dist/reset.css';
import foodData from './foods.json';
import { Button, Divider, Row } from 'antd';
import FoodBox from './components/FoodBox';
import FormExample from './components/FormExample';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { useEffect, useState } from 'react';

function App() {
  const [foods, setFoods] = useState(foodData);
  const [word, setWord] = useState('');

  //Bonus
  const [hidden, setHidden] = useState(false);

  //return
  const sinLlaves = () => 4 + 4; //indican multilena
  const conLlaves = () => {
    return 4 + 7;
  };

  //una funcion que espere cuando se termiene de llenar todos los datos del formulario para almacenar ese nuevo objeto
  //{name:"Dorilocos",cal:0}
  const addFood = (newFood) => {
    //[{..},{...}] => [...{..},{...},{name:"Dorilocos",cal:0}]
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

  //useEffect mounting

  useEffect(()=>{
    console.log("Me ejecuto!")
  },[])
  //el [] es muy importante para un useEffect, este indica que solo se active una vez
  //si el [variable] este estara a la espera de un cambio en esa variable para ejecutarse otra vez
  // si no colocamos los [] el useEffect se va a  estar activando n cantidad de veces

  // mounting/updating
  useEffect(()=>{
    console.log("Cantidad de comida",foods.length)
  },[foods.length])

  //useEffect con Fetch y Axios => peticiones al backend
  //socket--useEffect 

  useEffect(()=>{
    console.log("perro")
  },[])
  return (
    <div className="App">
      <div
        //style="background-color:blue; width:100px; " solo en html
        style={{ backgroundColor: 'red', width: '100%', height: '100px' }} //react
      />
      {/* Display Add Food component here */}
      {!hidden && <AddFoodForm addFood={addFood} />}
      <Button onClick={() => setHidden(!hidden)}>
        {!hidden ? 'Hide Form ' : 'Add New Food'}
      </Button>

      {/* Display Search component here */}
      <Search onSearch={onSearch} />
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
              .map((food, index_food) => <FoodBox key={index_food} {...food} />)
          : 'No hay productos'}
      </Row>
    </div>
  );
}

export default App;

/**
 *  .map((food, index_food) => (
          //name,image,calories
          //food = {name,image,calories}
          //---------
          // {...item}
          //name={item.name}
          //item={item}
          <FoodBox   
            //style={{textAlign:"center",backgroundColor:'red',width:100}}
          key={index_food} {...food} />
        ))
 */