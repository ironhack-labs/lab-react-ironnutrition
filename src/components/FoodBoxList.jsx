
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';

const FoodBoxList = ({ food, onDeleteFood }) => {
    return (
        
        <Box sx={{ justifyContent: 'center' }} > 

        <Card   className="food-card" >
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
            <span>Calories: {food.calories}</span>
            <br />
            <span>Servings: {food.servings}</span>
            <br />
            <span>
              <b>Total Calories: {food.servings * food.calories} kcal</b>
            </span>
            
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button variant="outlined" color="error" onClick={onDeleteFood}>
            Delete
            </Button>
        </CardActions>
      </Card>
      </Box>
    );
  };
  
  export default FoodBoxList;
