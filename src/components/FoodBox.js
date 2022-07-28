import { Card, Col, Button,Row } from 'antd';
function FoodBox ({name,image,calories,servings,hadndleDelete}){
    
    const result =calories * servings
    
    return(
       
        <Col span={4}>
        <Card 
          title={name}
          style={{ width: 230, height: 300, margin: 10 }}>
          <img src={image} height={60} alt="food" />
          <p>Calories: {calories}</p>
          <p>Servings: {servings}</p>
          <p>
            <b>Total Calories: {result} </b> kcal
          </p>
          <Button type="primary" onClick={()=>hadndleDelete(name)}> Delete </Button>
        </Card>
      </Col>
     
    )
}

export default FoodBox;