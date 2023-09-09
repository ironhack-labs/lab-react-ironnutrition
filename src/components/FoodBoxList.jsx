
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const FoodBoxList = ({ food, onDeleteFood }) => {
    return (
        
        <Card className="food-card" sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={food.image}
            alt={food.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {food.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <p>Calories: {food.calories} <br />
            Servings: {food.servings} <br />
            Total Calories: {food.servings * food.calories} kcal
            </p>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button variant="outlined" color="error" onClick={onDeleteFood}>
            Delete
            </Button>
        </CardActions>
      </Card>
    );
  };
  
  export default FoodBoxList;






  //<div>
  //<p>{food.name}</p>
  //<img src={food.image} alt={food.name} />
  //<p>Calories: {food.calories}</p>
  //<p>Servings: {food.servings}</p>
  //<p>
    //<b>Total Calories: {food.servings * food.calories} kcal</b>
  //</p>
  //<button>Delete</button>
//</div>