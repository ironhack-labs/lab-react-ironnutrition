import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Button, Input, Select } from '@chakra-ui/react'
import React, {useState} from 'react'

export const AddFood = () => {

    const [formState, setFormState] = useState({})

    const handleChange = (e) => {
        setFormState({...formState, [e.target.name] : e.target.value})
    }

    const handleOnSubmit = (e) => {
        console.log("Me presionan", e)
    }

    return(
        <FormControl>

            <FormLabel>Food Name:</FormLabel>
                <Input type="text" name="name" value={formState.name} onChange={handleChange}/>

            <FormLabel>Calories:</FormLabel>
                <Input type="text" name="calories" value={formState.calories} onChange={handleChange} />

                <FormLabel>Quantity:</FormLabel>
                    <Select placeholder="Select a number" type="number" name="quantity" value={formState.quantity} onChange={handleChange} >
                        <option>-</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </Select>
                    <Button type="submit" onClick={handleOnSubmit} >Submit</Button>
         </FormControl>
    )
}