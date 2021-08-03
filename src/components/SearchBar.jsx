import React, { useState } from 'react'
import { Stack } from '@chakra-ui/layout'
import { Search2Icon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'



export const SearchBar = (props) => {

    const[formState, setFormState] = useState('')
    const{filterFood} = props

    const onSearch = (event) => {
        setFormState(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        filterFood(formState)
    }

    return(
        <Stack spacing={4}>

            <InputGroup>
                <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children={<Search2Icon color="gray.500"
                onSubmit={handleSubmit}
                />}
                />
                <Input
                type="text"
                name="formState"
                placeholder="Type your food"
                value={formState}
                onChange={onSearch}
                />
            </InputGroup>
        </Stack>
    )
}
