import foods from './foods.json';
import React, { Component } from 'react';
import FoodList from './components/FoodList/FoodList';
import FoodForm from './components/FoodForm/FoodForm';
import { v4 as uuidv4 } from 'uuid';

import { Layout, Typography } from 'antd';
const { Content } = Layout;
const { Title } = Typography;

class App extends Component {
  state = {
    foods: [...foods],
  };


  createFood = (newFood) => {
    const foodToCreate = {
      ...newFood,
      id: uuidv4(), // paquete para generar un id, para que no nos salte el error de las keys de react
    };

    this.setState({ foods: [foodToCreate, ...this.state.foods] });
  };

  render() {
    return (
      <div className="App">
        <Layout>
          <Content style={{ padding: '0 50px', minHeight: '100vh' }}>
            
            <h2>Add food Entery</h2>
            <FoodForm createFood={this.createFood} />
            
            <Title>Food list</Title>
           
            <FoodList foods={this.state.foods} />;
         
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;

