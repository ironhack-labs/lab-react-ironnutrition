import { Card, Col, Button } from 'antd';


function FoodBox(props){
    const {food, foods, setFoods, setFoodFiltered } = props
    const copyOfFood = [...foods]

    const deleteFood = (event) =>{
        let foodName = event.target.parentElement.value
        const foodsToKeep = copyOfFood.filter(food=>{
            return food.name !== foodName
        })
        console.log(foodsToKeep)
        setFoods(foodsToKeep)
        setFoodFiltered(foodsToKeep)
        
        
    }

    return(
        <Col className='flex'>
        {food.length !==0 ? food.map(food=>{
            return <Card className='width-lim'
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {(food.calories) * (food.servings)} </b> kcal
        </p>
        <Button type="primary" value={food.name} onClick={(event)=>deleteFood(event)}> Delete </Button>
      </Card>
        })
        :  <div>
            <h1 className='highlighted'>Oops! There are no more items to be deleted!</h1>
            <img className='small' alt="image" src="https://thumbs.dreamstime.com/z/oops-problem-man-business-concept-pop-art-retro-style-word-ooops-unexpected-news-surprise-66133851.jpg"/>
            </div>
        }
      
    </Col>
    )
}

export default FoodBox