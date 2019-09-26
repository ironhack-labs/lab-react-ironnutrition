import React, { Component } from 'react';
import './App.css';
import foodsData from './foods.json'
import { Layout, Form, Input, Button, List } from 'antd'
import Foods from './components/Foods'
const { Content } = Layout

class App extends Component {
  state = {
    foods: foodsData,
    newFood: {},
    filtered: [],
    dataList: [],
    sumCalories: 0
  }

  addSummary = foodName => {
    const { foods } = this.state
    const food = Object.values(foods.filter(food => food.name === foodName))
    this.setState(state => {
      return {
        sumCalories: state.sumCalories + Number(food[0].calories),
      }
    })
    this.updateListData(food)
  }

  updateListData = food => {
    this.setState(prevState => {
      return {
        ...prevState,
        dataList: [...prevState.dataList, `${food[0].quantity} ${food[0].name} ${food[0].quantity * food[0].calories} cal`]
      }
    })
  }

  showNewFoodForm = () => {
    document.querySelector('#foodForm').style.display = 'block'
  }

  addNewFood = (e) => {
    e.preventDefault()
    const { newFood } = this.state
    newFood.quantity = 1
    this.setState({ newFood })
    this.setState({ foods: [...this.state.foods, this.state.newFood], newFood: {} })
    // for (let i = 0; i < e.target.length - 1; i++) {
    //   e.target[i].value = ''
    // }
    // console.log(e.target[0].value)

    document.querySelector('#image').value = ''
    document.querySelector('#foodForm').style.display = 'block'
  }

  handleInput = (e) => {
    const { newFood } = this.state;
    const key = e.target.name;
    newFood[key] = e.target.value;
    this.setState({ newFood });
  };

  searchFood = (e) => {
    const { value } = e.target
    const { foods } = this.state
    const query = value.toLowerCase()
    const filtered = foods.filter(food => (
      food.name.toLowerCase().includes(query)
    ))
    this.setState({ filtered })
  }

  updateQty = (name, value) => {
    const { foods } = this.state
    foods.forEach(food => {
      if (food.name === name) food.quantity = value
    })
    this.setState(state => {
      return { foods: state.foods }
    })
  }

  render() {
    const { foods, filtered, dataList } = this.state
    return (
      <Layout >
        <Content className="main">
          <div >
            <Input onChange={this.searchFood} />
            <Button onClick={this.showNewFoodForm}>Add new food</Button>
            {filtered.length === 0 &&
              foods.map((food, index) => (
                <Foods key={index} name={food.name} calories={food.calories} image={food.image} addSummary={this.addSummary} updateQty={this.updateQty} />
              ))
            }
            {filtered.length !== 0 &&
              filtered.map((food, index) => (
                <Foods key={index} name={food.name} calories={food.calories} image={food.image} addSummary={this.addSummary} updateQty={this.updateQty} />
              ))
            }
          </div>
          <div >
            <List
              size="small"
              header={<div>Today's food</div>}
              footer={<div>Total {this.state.sumCalories} cal</div>}
              bordered
              dataSource={dataList}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
          </div>
          <div id="foodForm">
            <Form key="formFood" layout="horizontal" id="newFood" onSubmit={this.addNewFood}>
              <Form.Item label="Food picture" >
                <Input name="image" id="image" onChange={this.handleInput} placeholder="Picture URL" />
              </Form.Item>
              <Form.Item label="Food Name" >
                <Input name="name" onChange={this.handleInput} placeholder="Name" />
              </Form.Item>
              <Form.Item label="Food Calories" >
                <Input name="calories" onChange={this.handleInput} placeholder="Calories" />
              </Form.Item>
              <Form.Item >
                <Button htmlType="submit" type="primary" >Add new food</Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default App;
