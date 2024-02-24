import { Card, Col, Button } from "antd";


function FoodBox(props) {
  //   console.log(props.foods);

  const handleRemove = (indiceAlBorrar) => {
    console.log("borrando", indiceAlBorrar);
    let cloneFoodArr = JSON.parse(JSON.stringify(props.foods));

    cloneFoodArr.splice(indiceAlBorrar, 1);
    props.setFoods(cloneFoodArr);
   
  };

  return (
    <div>
    {props.foods.length > 0 ? ( // Verifica si hay elementos en props.foods
      props.foods.map((eachFood, index) => (
        <Col key={eachFood.id}>
          <div>
            <Card
              title={eachFood.name}
              style={{ width: 230, height: 300, margin: 10 }}
            >
              <img src={eachFood.image} height={60} alt="food" />
              <p>{eachFood.calories}</p>
              <p>{eachFood.servings}</p>
              <p>
                <b>Total Calories: {eachFood.servings * eachFood.calories} </b>{" "}
                kcal
              </p>
              <Button type="primary" onClick={() => handleRemove(index)}>Delete</Button>
            </Card>
          </div>
        </Col>
      ))
    ) : (
      // Si no hay elementos en props.foods, muestra este mensaje
      <h3>¡Ups! No hay más contenido para mostrar</h3>
    )}
  </div>
  );
}

export default FoodBox; // Your code here
