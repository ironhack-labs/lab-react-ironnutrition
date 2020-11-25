import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './foods.json';
import FoodBox from './Foodbox';
import { Table, Button } from 'antd';

const columns = [
  {
    title: 'image',
    dataIndex: 'image',
    width: 150,
    render: (image) => (
      <img
        src={image}
        style={{
          width: '25px',
        }}
      />
    ),
  },
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'quantity',
    dataIndex: 'quantity',
  },
  {
    title: 'calories',
    dataIndex: 'calories',
  },
];

function App() {
  return (
    <div className="App">
      <FoodBox></FoodBox>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 50 }}
      />
    </div>
  );
}

export default App;
