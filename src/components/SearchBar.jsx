import React, { useState } from 'react'
import { Stack } from '@chakra-ui/layout'
import { Search2Icon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'



export const SearchBar = (props) => {

    const [inputValue, setSearchText] = useState("")

    const onSearch = (event) => {
        setSearchText(event.target.value)
    }

    return(
        <Stack spacing={4}>

            <InputGroup>
                <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children={<Search2Icon color="gray.500" />}
                />
                <Input
                type="text"
                placeholder="Type your food"
                value={inputValue}
                onChange={onSearch}
                />
            </InputGroup>
        </Stack>
    )
}