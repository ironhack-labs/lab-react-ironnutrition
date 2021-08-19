// Style Guide:
// In this file you can find reference examples of the structure
// for all of the components that you will need to create.
import { Card, Row, Col, Divider, Input, Button } from "antd";

// Iteration 2
function FoodBox(props) {
  return (
    <Col>
      <Card
        title={"SHOW_FOOD_NAME_HERE"}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={"SHOW_FOOD_IMAGE_HERE"} alt="food" height={60} />
        <p> Calories: SHOW_FOOD_CALORIES_HERE </p>
        <p>
          {" "}
          Servings: <b>SHOW_FOOD_SERVINGS_HERE</b>{" "}
        </p>
        <p>
          <b>Total Calories: FOOD_SERVINGS * FOOD_CALORIES</b> kcal
        </p>
        <Button type="primary" onClick={() => {}}>
          {" "}
          Delete{" "}
        </Button>
      </Card>
    </Col>
  );
}

// Iteration 4
function AddFoodForm(props) {
  return (
    <form>
      <Divider>Add Food Entry</Divider>
      <label>Name</label>
      <Input value={undefined} type="text" onChange={() => {}} />

      <label>Image</label>
      <Input value={undefined} type="text" onChange={() => {}} />

      <label>Calories</label>
      <Input value={undefined} type="number" onChange={() => {}} />

      <label>Servings</label>
      <Input value={undefined} type="number" onChange={() => {}} />

      <button type="submit">Create</button>
    </form>
  );
}

// Iteration 5
function Search(props) {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={undefined} type="text" onChange={() => {}} />
    </>
  );
}

function App() {
  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
        {/* Map over the food array and render a list of FoodBox components */}
        {/*  yourArrayWithFood.map(()=> {   */}

        <FoodBox />

        {/*    })    */}
      </Row>
    </div>
  );
}
