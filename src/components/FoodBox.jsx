import { Card, Col, Button } from "antd";

function FoodBox({ food, handleDelete, searchValue }) {
  return (
    
      <Col style={{display:"flex", flexWrap:"wrap"}}>
        {food.length === 0 ? (
          <p>No hay nada</p>
        ) : (
          food.filter((eachFood) => {
            return eachFood.name.toLowerCase().includes(searchValue)
          })        
        .map((eachFood, index) => {

          const totalCalorias = eachFood.servings * eachFood.calories

          return (
            <Card  title={eachFood.name} style={{ width: 230, height: 300, margin: 10 }} key={index}>
              <img src={eachFood.image} height={60} alt="food"  />

              <p>Calories: {eachFood.calories}</p>
              <p>Servings {eachFood.servings}</p>

              <p>
                <b>
                  Total Calories: {totalCalorias}{" "}
                </b>{" "}
                kcal
              </p>

              <Button type="primary" onClick={() => handleDelete(eachFood.id)}>Delete</Button>
            </Card>
          );
        }))}
      </Col>
  );
}

export default FoodBox; // Your code here
