import { useState } from 'react'
import AddForm from './AddFoodForm'
import Search from './Search'
import { Card, Row, Col, Divider, Input, Button } from 'antd'

const FoodBox = ({ foods }) => {
  // Correctly destructure `foods` prop
  const [foodList, setFoodList] = useState(foods)
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = term => {
    setSearchTerm(term.toLowerCase())
    console.log(term)
  }

  const itemDelet = id => {
    const deletItems = foodList.filter(food => food.id !== id)
    setFoodList(deletItems)
  }

  const handleAddFood = newFood => {
    setFoodList([newFood, ...foodList])
  }

  const filteredFoods = foodList.filter(food =>
    food.name.toLowerCase().includes(searchTerm)
  )

  return (
    <div>
      <AddForm onAddFood={handleAddFood} />
      <Search onSearch={handleSearch} />
      {filteredFoods.length > 0 ? (
        <Row>
          {filteredFoods.map(food => (
            <Col key={food.id}>
              <Card
                title={food.name}
                style={{ width: 230, height: 300, margin: 10 }}
              >
                <img src={food.image} alt={food.name} height={60} />

                <p>Calories: {food.calories}</p>
                <p>Servings: {food.servings}</p>

                <p>
                  <b>Total Calories: {food.servings * food.calories}</b> kcal
                </p>

                <Button onClick={() => itemDelet(food.id)}>Delete</Button>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>Oops! There is no more content to show.</p>
      )}
    </div>
  )
}

export default FoodBox
