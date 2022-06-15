import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useId } from "react"

function handleRemove({value}, index) {
    const newArray = [...value]
    newArray.splice(index,1)
    return newArray 
}

function Foodbox({value, setFoods}) {
    const arrayLength = value.length
    console.log(arrayLength)
    return (
    value.map((element, index) => (
            <Col>
                <Card
                title={element.name}
                style={{ width: 230, height: 300, margin: 10 }}>
                <img src={element.image} height={60} alt="food" />
                <p>Calories: {element.calories}</p>
                <p>Servings: {element.servings}</p>
                <p>
                  <b>Total Calories: {element.calories * element.servings} </b> kcal
                </p>
                <Button type="primary" onClick={(e) => setFoods(handleRemove({value}, index)) }> Delete </Button>
              </Card>
             
                
            
            {/* <div>
                {arrayLength==0 && 
                <Card
                 <p>Nothing to show here, sorry!</p> 
                </Card>
             } 
            </div> */}
             
            </Col>
            
            
          )
          ))}


export default Foodbox
