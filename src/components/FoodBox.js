import React, { useState, useEffect } from 'react';
import { Form, Input, Button, InputNumber, Card, Modal } from 'antd';
const { Meta } = Card;
//function
const FoodBox = (props) => {
  const [foods, setFoods] = useState(props.foodsArr);
  const [form] = Form.useForm();
  const [searchForm] = Form.useForm();
  const [modalState, setModalState] = useState(false);
  const [filteredFoods, setFilteredFoods] = useState(null);
  const [todayFoods, setTodayFoods] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    todayFoods.forEach((food) => {
      total += food.calories * food.quantity;
    });
    setTotal(total);
  }, [todayFoods, foods]);

  async function onFinish({ name, image, calories }) {
    setFoods([...foods, { name, calories, image, quantity: 1 }]);
    handleModal();
  }
  async function onFinishSearch({ query }) {
    setFilteredFoods(
      foods.filter((food) =>
        food.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }

  function handleModal() {
    setModalState(!modalState);
  }

  function handleDecrement(quantity, index) {
    const newArr = [...foods];
    newArr[index].quantity--;
    setFoods(newArr);
  }
  function handleIncrement(quantity, index) {
    const newArr = [...foods];
    newArr[index].quantity++;
    setFoods(newArr);
  }
  function addToDaily(index) {
    const newArr = [...foods];
    newArr[index].daily = true;
    console.log(newArr[index]);
    setFoods(newArr);
    setTodayFoods([...newArr].filter((food) => food.daily));
  }

  return (
    <div>
      <Form layout="vertical" form={searchForm} onFinish={onFinishSearch}>
        <Form.Item label="Search Bar" name="query">
          <Input />
        </Form.Item>
      </Form>
      <Button
        style={{
          marginBottom: '30px',
          backgroundColor: '#638165',
          color: 'white',
          borderRadius: '10px',
        }}
        block
        type="primary"
        onClick={handleModal}
      >
        Add new food
      </Button>
      <Modal
        title="Add new food"
        visible={modalState}
        onOk={handleModal}
        onCancel={handleModal}
      >
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item
            label="Food name"
            name="name"
            rules={[{ required: true, message: 'Please input food name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Image URL"
            name="image"
            rules={[{ required: true, message: 'Please input image URL' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Calories"
            name="calories"
            rules={[{ required: true, message: 'Please input calories' }]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item>
            <Button
              style={{
                marginTop: '15px',
                backgroundColor: '#638165',
                color: 'white',
                borderRadius: '10px',
              }}
              block
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Card>
        <center>
          <Meta
            title="Today's foods"
            description={
              <div>
                {todayFoods?.map((food, i) => (
                  <p key={i}>
                    {food.name} - {food.quantity * food.calories}
                  </p>
                ))}
                <p>total: {total}</p>
              </div>
            }
          />
        </center>
      </Card>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {filteredFoods
          ? filteredFoods.map((food, i) => {
              return (
                <Card
                  key={i}
                  style={{ width: 240 }}
                  cover={<img alt="example" src={food.image} />}
                >
                  <center>
                    <Meta
                      title={food.name}
                      description={`${food.calories}kCal`}
                    />

                    <p>{food.quantity}</p>
                    <Button
                      onClick={() => {
                        handleDecrement(food.quantity, i);
                      }}
                      style={{
                        marginTop: '15px',
                        backgroundColor: 'aliceblue',
                        color: 'black',
                        borderRadius: '10px',
                      }}
                    >
                      -
                    </Button>
                    <Button
                      onClick={() => {
                        handleIncrement(food.quantity, i);
                      }}
                      style={{
                        marginTop: '15px',
                        backgroundColor: 'aliceblue',
                        color: 'black',
                        borderRadius: '10px',
                      }}
                    >
                      +
                    </Button>
                    <Button
                      onClick={() => {
                        addToDaily(i);
                      }}
                      block
                      style={{
                        marginTop: '15px',
                        backgroundColor: 'aliceblue',
                        color: 'black',
                        borderRadius: '10px',
                      }}
                    >
                      Add to my daily food
                    </Button>
                  </center>
                </Card>
              );
            })
          : foods.map((food, i) => {
              return (
                <Card
                  key={i}
                  style={{ width: 240 }}
                  cover={<img alt="example" src={food.image} />}
                >
                  <center>
                    <Meta
                      title={food.name}
                      description={`${food.calories}kCal`}
                    />
                    <p>{food.quantity}</p>
                    <Button
                      onClick={() => {
                        handleDecrement(food.quantity, i);
                      }}
                      style={{
                        marginTop: '15px',
                        backgroundColor: 'aliceblue',
                        color: 'black',
                        borderRadius: '10px',
                      }}
                    >
                      -
                    </Button>
                    <Button
                      onClick={() => {
                        handleIncrement(food.quantity, i);
                      }}
                      style={{
                        marginTop: '15px',
                        backgroundColor: 'aliceblue',
                        color: 'black',
                        borderRadius: '10px',
                      }}
                    >
                      +
                    </Button>
                    <Button
                      onClick={() => {
                        addToDaily(i);
                      }}
                      block
                      style={{
                        marginTop: '15px',
                        backgroundColor: 'aliceblue',
                        color: 'black',
                        borderRadius: '10px',
                      }}
                    >
                      Add to my daily food
                    </Button>
                  </center>
                </Card>
              );
            })}
      </div>
    </div>
  );
};

export default FoodBox;
