import styled from 'styled-components'
import { useState } from 'react'
import foodList from './foods.json'
import { Row, Divider, Button } from 'antd'
import 'antd/dist/antd.css'
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm'
import Search from './components/Search'

function App() {
  const [food, setFood] = useState(foodList)
  const [searchResults, setSearchResults] = useState([])

  const addFoodHandler = (item) => {
    setFood((prevList) => [item, ...prevList])
  }

  const filterHandler = (value) => {
    setSearchResults(food.filter((item) => item.name.trim().toLowerCase().includes(value.trim().toLowerCase())))
  }

  const deleteHandler = (index) => {
    setFood(food.filter((item, i) => index !== i))
  }

  return (
    <Wrapper>
      <AddFoodForm addFood={addFoodHandler} />

      <Button> Hide Form / Add New Food </Button>

      <Search listFilter={filterHandler} />

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

      {!searchResults[0] ? (
        <Row style={{ width: '100%', justifyContent: 'center' }}>
          {food.map((item, i) => (
            <FoodBox key={i} index={i} food={item} remove={deleteHandler} />
          ))}
        </Row>
      ) : (
        <Row style={{ width: '100%', justifyContent: 'center' }}>
          {searchResults.map((item, i) => (
            <FoodBox key={i} index={i} food={item} remove={deleteHandler} />
          ))}
        </Row>
      )}
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  text-align: center;
`
