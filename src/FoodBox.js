import React, { useState } from 'react';
import { Card, Button, Modal } from 'antd';
import './FoodBox.css';

function FoodBox({ food, onDelete }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleDeleteClick = () => {
    setModalVisible(true);
  };

  const handleConfirmDelete = () => {
    onDelete(food.id);
    setModalVisible(false);
  };

  const handleCancelDelete = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <Card title={food.name} className="food-box-card">
        <img src={food.image} alt={food.name} className="food-box-image" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <Button type="danger" onClick={handleDeleteClick}>Delete</Button>
      </Card>
      
      <Modal
        title={`Delete ${food.name}`}
        visible={modalVisible}
        onOk={handleConfirmDelete}
        onCancel={handleCancelDelete}
      >
        Are you sure you want to delete {food.name}?
      </Modal>
    </div>
  );
}

export default FoodBox;

