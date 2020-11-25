import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './foods.json';
// import FoodBox from './Foodbox';
import { Table } from 'antd';
import { Button } from 'antd';

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
    title: 'calories',
    dataIndex: 'calories',
  },
  {
    title: 'quantity',
    dataIndex: 'quantity',
    width: 150,
    render: () => (
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="number" value="1" />
        </div>
        <div className="control">
          <Button type="primary">Primary Button</Button>
        </div>
      </div>
    ),
  },
];

function App() {
  return (
    <div className="App">
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 50 }}
      />
    </div>
  );
}

export default App;
