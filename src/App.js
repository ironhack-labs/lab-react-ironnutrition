import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './foods.json';
// import FoodBox from './Foodbox';
import { Table } from 'antd';
import { Button } from 'antd';
import { Formik } from 'formik';

const columns = [
  {
    title: 'image',
    dataIndex: 'image',
    width: 150,
    render: (image) => (
      <img
        src={image}
        style={{
          width: '200px',
        }}
      />
    ),
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'calories',
    dataIndex: 'calories',
  },
  {
    title: 'quantity',
    dataIndex: 'quantity',
    render: () => (
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="number" value="1" />
        </div>
        <div className="control">
          <Button type="primary">+</Button>
        </div>
      </div>
    ),
  },
];

function App() {
  return (
    <div className="App">
      <div>
        <h1>My Form</h1>
        <Formik
          initialValues={{ name: 'jared' }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name="name"
              />
              {props.errors.name && (
                <div id="feedback">{props.errors.name}</div>
              )}
              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 50 }}
      />
    </div>
  );
}

export default App;
