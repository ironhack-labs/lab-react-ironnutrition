// import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from 'react';

import './App.css';
import FoodBox from './components/FoodBox';
import foodsArr from './foods.json';

function App() {
  const [foods, setFoodsArr] = useState(foodsArr);

  return (
    <div className="App">
      {/* // iteration 1 */}
      {/* {foods.map((eachFood) => {
        return (
          <div>
            <p> {eachFood.name} </p>
            <img src={eachFood.image} width={150} />
          </div>
        );
      })} */}
      {/* // ------------------------- // iteration 2 */}
      {/* <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      /> */}
      {/* // -------------------- // iteration 3 */}

      {foods.map((fruit) => {
        return <FoodBox food={fruit} />;
      })}
    </div>
  );
}

export default App;
