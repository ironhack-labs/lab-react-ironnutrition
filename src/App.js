import foods from './foods.json'
import { useState } from 'react'
import { Row, Divider, Button } from 'antd'

function App() {
  const [foodsData, setFoodsData] = useState(foods)


  return (
    <div className="App">
      <Divider>
        <h1>Food List</h1>
      </Divider>

      {
        foodsData.map((food) => {
          return (
            <Row style={{ width: '100%', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                <p>{food.name}</p>
                <img src={food.image} alt="foodImage" width={'200px'} />
            </Row>
          );
        })
      }
    </div>
  );
}

export default App;
