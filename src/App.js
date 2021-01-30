import React, { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { Row, Col, PageHeader, Button, Modal, Form, Input, InputNumber, Typography, List, Divider } from 'antd';

const { Title } = Typography;

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="Create a new collection"
            okText="Create"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
            form
                .validateFields()
                .then((values) => {
                form.resetFields();
                onCreate(values);
                })
                .catch((info) => {
                console.log('Validate Failed:', info);
                });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{
                    modifier: 'public',
                }}
            >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                    {
                        required: true,
                        message: 'Please input the name of the food!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
				<Form.Item
                    name="calories"
                    label="Calories"
					initialValue={1}
                    rules={[
						{
							required: true,
							message: 'Please input the calories of the food!',
						},
                    ]}
                >
                    <InputNumber
						min={1}
						defaultValue={1}
						formatter={value => `${value} cal`}
					/>
                </Form.Item>
				<Form.Item
                    name="image"
                    label="Image URL"
                    rules={[
						{
							required: true,
							message: 'Please input the image URL of the food!',
						},
                    ]}
                >
                    <Input />
                </Form.Item>
				<Form.Item
                    name="quantity"
					hidden= {true}
					initialValue={0}
                    rules={[
						{
							required: true,
							message: 'Please input the quantity of the food!',
						},
                    ]}
                >
                    <InputNumber
						defaultValue={0}
						disabled={true}
					/>
                </Form.Item>
            </Form>
        </Modal>
    );
};

const App = () => {
	const [visible, setVisible] = useState(false);
	const [allFoods, setAllFoods] = useState(foods);
	const [filteredFoods, setFilteredFoods] = useState(allFoods);
	const [selectedFoods, setSelectedFoods] = useState(allFoods);

	const onCreate = (values) => {
		console.log('Old list: ', allFoods);
		const newList = allFoods;
		newList.unshift(values);
		setAllFoods(newList);
		console.log('New list: ', allFoods);
		setVisible(false);
	};

	const onChange = e => {
		console.log('allFoods: ', allFoods);
		const newList = allFoods.filter(food => food.name.toLowerCase().includes(e.target.value.toLowerCase()));
		console.log('filteredFoods: ', newList);
		setFilteredFoods(newList);
	};

	return (
		<Row justify="center" gutter={[20, 25]}>
			<Col span={22}>
				<PageHeader
					className="site-page-header"
					title={<Title style={{margin:0}}>IronNutrition</Title>}
					subTitle={
						<div>
							<Button
								type="primary"
								onClick={() => {
									setVisible(true);
								}}
							>
								Add food
							</Button>
							<CollectionCreateForm
								visible={visible}
								onCreate={onCreate}
								onCancel={() => {
									setVisible(false);
								}}
							/>
						</div>
					}
				/>
				<Input placeholder="Search" size="large" onChange={onChange} />
			</Col>
			<Col span={11} id='foodList'>
				<FoodBox foods={filteredFoods} selectedFoods={selectedFoods}  setSelectedFoods={setSelectedFoods}/>
			</Col>
			<Col span={11}>
				<Title level={2}>Today's foods</Title>
				<List
					dataSource={selectedFoods.filter(food => food.quantity > 0)}
					locale={{ emptyText: 'Nothing selected' }}
					split={false}
					size="small"
					renderItem={food => (
						<List.Item>
							{food.quantity} {food.name} = {food.calories * food.quantity} cal
						</List.Item>
					)}
				/>
				<Divider />
				<Title level={4}>Total: {
					selectedFoods.reduce(
						( accumulator, currentValue ) => accumulator + (currentValue.calories * currentValue.quantity)
						, 0
					)
				} cal</Title>
			</Col>
		</Row>
	);
}

export default App;