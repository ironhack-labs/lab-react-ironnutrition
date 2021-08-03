import {Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import React, { useState } from "react";
import foodData from '../foods.json'
import { Stack } from '@chakra-ui/layout'
import { Search2Icon } from '@chakra-ui/icons'
import { FoodBox } from "./FoodBox";

export function FoodListing(){
    const [inputValue, setInputValue] = useState("")

    const onSearch = (event) => {
        setInputValue(event.target.value)
    }

    return(
        <section>
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
                    onChange={onSearch}
                    />
                </InputGroup>
             </Stack>

          <Flex flexDirection="column">
             {foodData.filter((val) => {
                    if(inputValue === ""){
                        return val
                    } else if(val.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())){
                        return val
                    }
                  }).map((food, index)=>{
                    return(
                        <FoodBox key={index} food={food} />
                    )
                })}
          </Flex>
    </section>
    )
}