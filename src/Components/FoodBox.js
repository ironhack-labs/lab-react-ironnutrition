import { Card, Row, Col, Divider, Input, Button } from "antd";


function FoodBox(food) {

    const { foodArray, modifiedFoodArr, deleteFood } = food;

    console.log(foodArray); // Food Array is the filtered foods coming through during Search
    console.log(modifiedFoodArr); //modified Food Arr is the entire collection post addition / deletion

    //Currently used food name as key with the assumption that the names will be unique. Ideally, a unique id generator would be better to use.

    if (modifiedFoodArr.length === foodArray.length && modifiedFoodArr.length > 0 && foodArray.length>0) {
        return (
            <div className="gridDiv">
                {modifiedFoodArr.map((food) => {
                    return (
                        <div key={food.name}>
                            <Col>
                                <Card>
                                    <Card><h3>{food.name}</h3></Card>
                                    <img src={food.image} width={200} />
                                    <p>{food.servings}</p>
                                    <p>{food.calories}</p>
                                    <Button onClick={() => deleteFood(food.name)} style={{ backgroundColor: 'grey' }}>
                                        Delete
                                    </Button>
                                </Card>
                            </Col>
                        </div>
                    )
                })}
            </div>
        )
    }
    else if (foodArray.length < modifiedFoodArr.length && foodArray.length > 0) {
        return (
            <div className="gridDiv">
                {foodArray.map((food) => {
                    return (
                        <div key={food.name}>
                            <Col>
                                <Card>
                                    <Card><h3>{food.name}</h3></Card>
                                    <img src={food.image} width={200} />
                                    <p>{food.servings}</p>
                                    <p>{food.calories}</p>
                                    <Button onClick={() => deleteFood(food.name)} style={{ backgroundColor: 'grey' }}>Delete</Button>
                                </Card>
                            </Col>
                        </div>
                    )
                })}
            </div>
        )
    }
    else if (modifiedFoodArr.length > foodArray.length) {
        return (
            <Col>
                <Card><h1>Food Does Not Exist</h1></Card>
            </Col>
        )
    }
    else if (modifiedFoodArr.length === 0 && foodArray.length === 0) {
        return (
            <Col>
                <Card><h1>No Food Available</h1></Card>
            </Col>
        )
    }
}
export default FoodBox;

