import { Row, Col, Divider, Input, Button } from 'antd';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid"

const AddFoodForm = (props) => {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [calories, setCalories] = useState(0)
  const [servings, setServings] = useState(0)
  const [isFormHidden, setIsFormHidden] = useState(false)
  console.log(isFormHidden)

  const handleName = event => {
    setName(event.target.value)
  }
  const handleImage = event => {
    setImage(event.target.value)
  }
  const handleCalories = event => {
    setCalories(event.target.value)
  }
  const handleServings = event => {
    setServings(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = {
      _id: uuidv4(),
      name,
      image,
      calories,
      servings
    }

    props.setFood(newFood);
    // Reset the state
    setName("");
    setImage("");
    setCalories();
    setServings();
  }

  return (
    <>
      <form className={isFormHidden ? `isFormHidden` : ""} onSubmit={handleSubmit}>
        <div>
          <Row >
            <Col>
              <Divider>Add Food Entry</Divider>
              <label htmlFor="name">Name:</label>
              <Input value={name} type="text" onChange={handleName} required />
              <label htmlFor="image">Image:</label>
              <Input value={image} type="text" onChange={handleImage} required />
              <label htmlFor="calories">Calories:</label>
              <Input value={calories} type="Number" onChange={handleCalories} required />
              <label htmlFor="servings">Servings:</label>
              <Input value={servings} type="Number" onChange={handleServings} required />
              <Button type="primary" htmlType='submit'>Create</Button>
            </Col>
          </Row>
        </div>
      </form>
      <Button onClick={() => setIsFormHidden(!isFormHidden)}>{isFormHidden ? 'Add new food' : 'Hide Form'}</Button>
    </>

  )
}

export default AddFoodForm;