// Your code here

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Food(props) {

    const { name, calories, image,servings, deleteFood } = props;




  return (

    

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={name}
        />
        <CardContent >
          <Typography gutterBottom variant="h4" component="div">
            {name}
          </Typography><hr />
          <Typography variant="p" color="text.secondary">
            calories: {calories}
          </Typography><hr />
          <Typography variant="p" color="text.secondary">
          servings: <strong><span>{servings}</span></strong>
          </Typography><hr />
          <Typography variant="p" color="text.secondary">
          Total Calories: <strong><span>{calories*servings}</span></strong>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={deleteFood}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
