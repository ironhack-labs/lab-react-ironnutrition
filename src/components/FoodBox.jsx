import React from "react";
import { Card, Col, Button } from "antd";

export default function FoodBox(props) {
    console.log(props.food);
    const deleteFunc = (id) => {
        props.callbackToDelete(id);
    };
    return (
        <div>
            {props.food.map((e) => {
                return (
                    <Col key={e.id}>
                        <Card
                            title={e.name}
                            style={{ width: 230, height: 300, margin: 10 }}
                        >
                            <img src={e.image} height={60} alt="food" />
                            <p>Calories: {e.calories}</p>
                            <p>Servings {e.servings}</p>
                            <p>
                                <b>
                                    Total Calories: {e.calories * e.servings}{" "}
                                </b>
                                kcal
                            </p>
                            <Button
                                type="primary"
                                onClick={() => {
                                    deleteFunc(e.id);
                                }}
                            >
                                Delete
                            </Button>
                        </Card>
                    </Col>
                );
            })}
        </div>
    );
}
