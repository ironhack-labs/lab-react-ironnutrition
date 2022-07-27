import styled from 'styled-components'
import { useState } from 'react'
import foodList from './foods.json'
import { Row, Divider, Button } from 'antd'
import 'antd/dist/antd.css'
import FoodBox from './components/FoodBox'

function App() {
  const [food, setFood] = useState(foodList)
  return (
    <Wrapper>
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      {/* <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      /> */}

      {/* {food.map((item, i) => (
        <div key={i}>
          <p>{item.name}</p>
          <img src={item.image} width={100} alt={item.name} />
        </div>
      ))} */}

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {food.map((item, i) => (
          <FoodBox food={item} />
        ))}
      </Row>
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  text-align: center;
`
