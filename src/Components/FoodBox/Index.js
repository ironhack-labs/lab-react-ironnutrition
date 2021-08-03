import React from 'react'
import { BsPlusSquare } from "react-icons/bs"
import {useState} from 'react'
import {Center, Box, Flex, Text, Image, Button, NumberInputField, NumberInput, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react"
import OrderBox from '../OrderBox/Index';

export default function FoodBox({foodName='food name here', calories='9999', imageSrc='https://i.imgur.com/eTmWoAN.png', onBtnPress, onQuantityChange}) {

    const handleInputChange = e => {
        onQuantityChange(e,foodName);
    };

    return (
        <Box margin="5px" height="77px" width="500px" border="2px" borderRadius="8px" borderColor="gray.300">
            <Flex
                display="flex"
                justifyContent="space-between"
                alignContent="space-between"
            >
                <Flex display="flex">
                    <Image boxSize="77px" objectFit="contain" borderRadius="full" src={imageSrc} alt="Food" marginRight="5px"/>
                    <Flex
                        display="flex"
                        flexDir="column"
                        justifyContent="center"
                    >
                        <Text fontWeight="600" fontSize="xl">{foodName}</Text>
                        <Text textColor="gray.600">{calories} cal</Text>
                    </Flex>
                </Flex>
                <Flex display="flex">
                    <NumberInput name={foodName} height="73px" width="80px" defaultValue={1} min={1} max={99} onChange={handleInputChange}>
                        <NumberInputField height="73px" />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <Button onClick={onBtnPress} marginLeft="5px" height="73px" width="73px" colorScheme="cyan" variant="solid"> <BsPlusSquare size="55%" color="white" /> </Button>
                </Flex>
            </Flex>
        </Box>
    )
}