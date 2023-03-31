import { useEffect, useState } from 'react';
import './App.css';
import FoodList from './components/Food/FoodList';
import foodsJson from './foods.json'
import { Row, Divider, Button } from 'antd'
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';

const initialFormState = {
  "name": "",
  "calories": 0,
  "image": "",
  "servings": 0
}

function App() {

  const [foods, setFoods] = useState([]);
  const [form, setForm] = useState(initialFormState)
  const [search, setSearch] = useState("")
  const [viewForm, setViewForm] = useState(false)

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

  const onSearch = (ev) => {
    const value = ev.target.value
    setSearch(value)
    setFoods((prev) => prev.filter(f => f.name.toLowerCase().includes(value.toLowerCase())))
  }

  const handleClick = () => { 
    setViewForm((prev) => !prev)
  }

  return (
    <div className="App">

      {
        viewForm && (<AddFoodForm form={form} onFormInputChange={onFormInputChange} onSubmit={onSubmit} />)
      }
      <Button onClick={handleClick}> {viewForm ? "Hide Form" : "Add New Food"} </Button>

      <SearchBar onSearch={onSearch} search={search} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        <FoodList foods={foods} onDelete={onDelete} />
      </Row>

    </div>
  );
}

export default App;
