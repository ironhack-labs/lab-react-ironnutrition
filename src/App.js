import { useEffect, useState } from 'react';
import './App.css';
import FoodList from './components/Food/FoodList';
import foodsJson from './foods.json'
import { Row, Divider, Button } from 'antd'
import AddFoodForm from './components/AddFoodForm';

const initialFormState = {
  "name": "",
  "calories": 0,
  "image": "",
  "servings": 0
}

function App() {

  const [foods, setFoods] = useState([]);
  const [form, setForm] = useState(initialFormState)

  useEffect(() => {
    setFoods(foodsJson)
  }, [])

  const onDelete = (name) => {
    setFoods((prev) => prev.filter(food => food.name !== name)
    )
  }

  const onFormInputChange = (ev) => {
    const key = ev.target.id
    const value = ev.target.value
    setForm((prev) => ({
      ...prev,
      [key]: value
    }
    ))
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    setFoods((prev) => ([
      form,
      ...prev
    ]
    ))
    setForm(initialFormState)
  }

  return (
    <div className="App">
      <AddFoodForm form={form} onFormInputChange={onFormInputChange} onSubmit={onSubmit} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        <FoodList foods={foods} onDelete={onDelete} />
      </Row>

    </div>
  );
}

export default App;
