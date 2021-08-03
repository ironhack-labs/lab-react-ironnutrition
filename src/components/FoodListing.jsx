import { Avatar, Badge, Box, Button, Flex, FormControl, Input, InputGroup, InputLeftElement, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Spinner, Text } from "@chakra-ui/react"
import React, { useState } from "react";
import foodsData from '../foods.json'
import { Stack } from '@chakra-ui/layout'
import { Search2Icon } from '@chakra-ui/icons'
import { AddFood } from "./AddFood";

export function FoodListing(){

    const [foods, setFoods] = useState(foodsData)

    const [inputValue, setInputValue] = useState("")

    const onSearch = (event) => {
        setInputValue(event.target.value)
    }

    const addFood = (newFood) => {
        const upDatedFoodData = [ newFood, ...foods ]
        setFoods(upDatedFoodData)
    }

    return(
        <section>
       <AddFood
            addFoodHandler={addFood}
              />
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
        { foodsData.filter((val) => {
            if(inputValue === ""){
                return val
            } else if(val.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())){
                return val
            }
                 }).map((food, index_i) => (
                <Flex key={index_i.id} mb="20px" justifyContent="space-around">
                    <Avatar src={food.image}/>
                    <Box ml="3">
                        <Text fontWeight="bold" w="170px">
                            {food.name}
                        <Badge ml="1" colorScheme="green">New</Badge>
                        </Text>
                        <Text fontSize="sm">{food.calories} cal</Text>
                    </Box>

                    <FormControl id="amount">
                        <NumberInput max={20} min={1} w="80px">
                            <NumberInputField />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        <Button>Add</Button>
                        </FormControl>
                </Flex>
                ) )
            }
    </Flex>
    </section>
    )
}