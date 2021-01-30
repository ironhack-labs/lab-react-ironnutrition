import React from 'react';
import { List, Avatar, Button, InputNumber, Row, Col } from 'antd';

const FoodBox = ({foods, selectedFoods, setSelectedFoods}) => {

    function onClick(id) {
        const newList = selectedFoods.map(food => {
            if(food.name === id.replace('_', ' ')) {
                food.quantity = parseInt(food.quantity) + parseInt(document.getElementById(id).value);
            }

            return food;
        });

        setSelectedFoods(newList);
    }

    //console.log(foods);
    return (
        <List
            size="small"
            itemLayout="horizontal"
            dataSource={foods}
            renderItem={food => (
                <List.Item
                    extra={
                        <Row className="field has-addons">
                            <Col span={16} className="control">
                                <InputNumber size="large" min={1} defaultValue={1} id={food.name.replace(' ', '_')} className="input" />
                            </Col>
                            <Col span={8} className="control">
                                <Button size="large" type="primary" className="button is-info" onClick={e => onClick(food.name.replace(' ', '_'))}>+</Button>
                            </Col>
                        </Row>
                    }
                >
                    <List.Item.Meta
                        avatar={
                            <Avatar shape="square" size={75} src={food.image} />
                        }
                        title={food.name}
                        description={<small>{food.calories} cal</small>}
                    />
                </List.Item>
            )}
        />
    )
}

export default FoodBox;

/* <Row className="field has-addons">
    <Col span={16} className="control">
        <InputNumber size="large" min={1} defaultValue={1} onChange={onChange} className="input" />
    </Col>
    <Col span={8} className="control">
        <Button size="large" type="primary" className="button is-info">+</Button>
    </Col>
</Row> 
<Form form={form} name={food.name.replace(' ', '_')} layout="inline" onFinish={onFinish}>
    <Form.Item
        name={`${food.name.replace(' ', '_')}_quantity`}
        initialValue={1}
        style={{margin:0}}
    >
        <InputNumber size="large" min={1} defaultValue={1} onChange={onChange} className="input" style={{borderRadius: "2px 0 0 2px"}} />
    </Form.Item>
    <Form.Item>
        <Button size="large" type="primary" htmlType="submit" className="button is-info" style={{borderRadius: "0 2px 2px 0"}}>+</Button>
    </Form.Item>
</Form>*/