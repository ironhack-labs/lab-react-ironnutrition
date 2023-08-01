import { useState } from 'react'
import { Divider, Input, Button, Form, InputNumber } from 'antd'

const initialState = {
  name: '',
  image: '',
  calories: 0,
  servings: 0
}

const AddFoodForm = (props) => {
  const [name, setName] = useState(undefined);
  const [image, setImage] = useState(undefined);
  const [calories, setCalories] = useState(undefined);
  const [servings, setServings] = useState(undefined);
  // const [formData, setFormData] = useState(initialState)

  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  // Handles state of form inputs
  // const handleFormInput = (identifier, value) => {
    // const updatedForm = [...formData]
    // updatedForm[identifier] = value
    // setFormData(updatedForm)

    /* Short hand method */
  //   setFormData((prevFormData) => ({ ...prevFormData, [identifier]: value }))
  // }

  const handleSubmit = (e) => {
    const newFood = { name, image, calories, servings };

    if (newFood.calories && newFood.name && newFood.calories && newFood.servings) {
      props.addFood(newFood);
      setName(undefined);
      setImage(undefined);
      setCalories(undefined);
      setServings(undefined);

      // props.addFood(formData)
      // setFormData(initialState)
    }
  }

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  }

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      number: '${label} is not a valid number!',
      text: '${label} is required!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  }
  /* eslint-disable no-template-curly-in-string */

  return (
    <Form
      {...layout}
      name="nest-messages"
      style={{ maxWidth: 600, minWidth: 400 }}
      onFinish={handleSubmit}
      validateMessages={validateMessages}
    >
      <Divider>Add Food Entry</Divider>

      <Form.Item
        label="Name"
        rules={[{ required: true }]}
        onChange={handleNameInput}
        // onChange={(e) => handleFormInput('name', e.target.value)}
      >
        <Input name="name" value={name} />
      </Form.Item>

      <Form.Item
        label="Image"
        rules={[{ required: true }]}
        onChange={handleImageInput}
        // onChange={(e) => handleFormInput('image', e.target.value)}
      >
        <Input name="image" value={image} />
      </Form.Item>

      <Form.Item
        label="Calories"
        rules={[{ type: 'number', min: 0, max: 9999, required: true }]}
        onChange={handleCaloriesInput}
        // onChange={(e) => handleFormInput('calories', e.target.value)}
      >
        <InputNumber name="calories" value={calories} />
      </Form.Item>

      <Form.Item
        label="Servings"
        rules={[{ type: 'number', min: 0, max: 10, required: true }]}
        onChange={handleServingsInput}
        // onChange={(e) => handleFormInput('servings', e.target.value)}
      >
        <InputNumber name="servings" value={servings} />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
      <Divider></Divider>
    </Form>
  )
}

export default AddFoodForm
