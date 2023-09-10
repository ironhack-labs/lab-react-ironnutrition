// Your code here
import { useState } from 'react';
import { Box, TextField, Button, Stack,Accordion,AccordionSummary,Typography,AccordionDetails  } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './FoodBox.css'


function AddFoodForm ({onCreate}) {
    const [values, setValues] = useState ({
        name: '',
        image: '',
        calories: 10,
        servings: 0,
    })

    // para que no se cargue la pagina cuando se le de click a submit y guarde el nuevo contenido
    const onSubmit = (event) => {
        event.preventDefault();
        console.log('Form values:', values);

        // Llamar a la función onCreate para guardar el nuevo elemento de comida
    onCreate(values);

    // Limpiar los campos del formulario después de guardar
    setValues({
      name: '',
      image: '',
      calories: 10,
      servings: 0,
    });
    }

    // function para que se pueda guardar el cambio de los inputs
    const onChange =(event) => {
        const {name, value, type } = event.target;

        setValues({
            ...values,
            [name]: type === 'number' ? Number(value) : value,
          });

    }

    return (
        <>

        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Creat new food</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box 
            
            component="form"
            onSubmit={onSubmit}
            sx={{ 
            '& .MuiTextField-root': { m: 1, width: '30ch'  },
            flexWrap: 'wrap' 
            }}
            noValidate
            autoComplete="off"
        >
        <TextField
          id="standard-search"
          label="Name"
          name="name"
          value={values.name}
          onChange={onChange}
          type="text"
          variant="outlined"
          helperText="* Require"
          className="form-input"
        />
        <TextField
          id="standard-search"
          label="Image"
          name="image"
          value={values.image}
          onChange={onChange}
          type="text"
          variant="outlined"
          helperText="* Require"
        />
        <TextField
          id="standard-number"
          label="Calories"
          name="calories"
          value={values.calories}
          onChange={onChange}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          helperText="* Require"
        />
        <TextField
          id="standard-number"
          label="Servings"
          name="servings"
          value={values.servings}
          onChange={onChange}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          helperText="* Require"
        />
        
    <Stack direction="row" spacing={2}>
      <Button 
      className='btn-send'
      variant="contained" 
      color="success" 
      type="submit">
        Submit
      </Button>
    </Stack>

    </Box>


        </AccordionDetails>
      </Accordion>
        
    </>


    
    )
}

export default AddFoodForm;