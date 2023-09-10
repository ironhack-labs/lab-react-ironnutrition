import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



export default function Search({onSearch}) {

    return (
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField 
        id="outlined-basic" 
        label="Search" 
        onChange={onSearch}
        name='search'
        variant="outlined" />
        
      </Box>
    );
  }