import React, { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundClor: 'grey.400',
    width: "200px",
    bgcolor: 'grey.400',
    border: '4px solid #000',
    boxShadow: 10,
    pt: 2,
    px: 4,
    pb: 3,
    borderRadius: '10px',
    color: 'white',
};

function FoodForm() {

    const [value, setValues] = useState({
        name: '',
        calories: '',
        image: '',
        servings: '',
    });

    const onSubmited = (event) => {
        event.preventDefault();
        console.log(value);
    }

    const onChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...value, [name]: value });
    }

    return (
        <Box 
            component="form"
            sx={style}
            noValidate
            autoComplete="off"
        >
            <form>
            <TextField id='name' name='name' value={value.name} onChange={onChange} label="name of Food" variant="filled" color="success" focused sx={{fontSize:"45px"}}/>
            <TextField type="number" inputProps={{min:0}} id='calories' name='calories' value={value.calories} onChange={onChange} label="calories" variant="filled" color="success" focused sx={{fontSize:"45px"}}/>
            <TextField id='image' name='image' value={value.image} onChange={onChange} label="image" variant="filled" color="success" focused sx={{fontSize:"45px"}}/>
            <TextField type="number" inputProps={{min:0}} id='servings' name='servings' value={value.servings} onChange={onChange} label="servings" variant="filled" color="success" focused sx={{fontSize:"45px"}}/>

            
            

            <Stack direction="row" spacing={2} sx={{marginTop:'10px'}}>

                <Button variant="contained" color="success" >
                    Add Food
                </Button>

            </Stack>
            </form>

        </Box>
    )

}

export default FoodForm;