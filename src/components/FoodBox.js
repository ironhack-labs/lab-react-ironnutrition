import React, {useState} from 'react'
import foods from '../foods.json'
import { Form, Input, Button, InputNumber, Card, Modal } from 'antd';

const { Search } = Input;



const FoodBox = () => {

    let initialArr = [...foods]

    const [foodsArr, setFoodsArr] = useState(initialArr)
    const [number, setNumber] = useState(0)
    const [todayFood, setTodayFood] = useState([])
    const [totalCalories, setTotalCalories] = useState(0)

    function addTodayFood(name, calories){
        setTodayFood([...todayFood, {name, calories}])
        setTotalCalories(calories * number)
    }

    const [modalState, setModalState] = useState(false)

    const [search, setSearch] = useState('')

    const [form] = Form.useForm();

    function handleModal(){
        setModalState(!modalState)
    }

    async function createFood({ name, image, calories }) {
        setFoodsArr([...foods, { name, image, calories, quantity: 0 }]);
        handleModal();
      }

      const filteredFoods = foodsArr.filter( food => {
          return food.name.toLowerCase().includes( search.toLowerCase())
      })

    

    return (
        <div>
            <Button onClick={handleModal}>Add new food</Button> <br /> <br />

            <Search
      placeholder="Search by food name"
      onChange={e => setSearch(e.target.value)}
      style={{ width: 200 }}
    />
            <Modal
        title="Add new food"
        visible={modalState}
        onOk={handleModal}
        onCancel={handleModal}
      >
        <Form layout="vertical" form={form} onFinish={createFood}>
          <Form.Item
            label="Food name"
            name="name"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Image URL"
            name="image"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Calories"
            name="calories"
          >
            <InputNumber />
          </Form.Item>

          <Form.Item>
            <Button
              block
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

            <div style={{display:'flex', felxDirection: 'row'}}>
                <div>
             {filteredFoods.map((food, index) => {
                return (
                    <div className="box" key={index}>
                    <article className="media">
                      <div className="media-left">
                        <figure className="image is-64x64">
                          <img src={food.image} style={{width: 200}}/>
                        </figure>
                      </div>
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <strong>{food.name}</strong> <br />
                            <small>{food.calories} cal</small>
                          </p>
                        </div>
                      </div>
                      <div className="media-right">
                        <div className="field has-addons">
                          <div className="control">
                            <input className="input" type="number" value={number} onChange={e=>setNumber(e.target.value)} />
                          </div>
                          <div className="control">
                            <button className="button is-info" onClick={() => addTodayFood(food.name, food.calories)}>
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                    
                )
            })} 
            </div>

<div>
    <h1>Today's Foods</h1>
            {todayFood?.map((food, index) => {
                return (
                    <div key={index}>
                        <ul>
                            <li>{food.name}</li>
                            <li>{totalCalories}</li>
                        </ul>
                    </div>
                )
            })}
            </div>

            </div>
            
            
        </div>
    )
}

export default FoodBox


