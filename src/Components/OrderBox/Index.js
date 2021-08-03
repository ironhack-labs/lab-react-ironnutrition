import React from 'react'
import {Box, Flex, Text, UnorderedList, ListItem} from "@chakra-ui/react"
import {useState, useEffect} from 'react'

export default function OrderBox({orderItems=[{name:"foodname",quantity:"1",calories:"999999"}]}) {

    const ObtainTotalCalories = () =>{
        let totalCalories = 0;
        orderItems.map(element => {
            totalCalories+=(element.calories*element.quantity)
        })
        return totalCalories;
    }

    return (
        <Box marginRight="50px" height="70vh" width="400px" border="2px" borderRadius="8px" borderColor="gray.300">
            <Flex
                display="flex"
                flexDir="column"
                justifyContent="center"
                margin="10px"
            >
                <Text fontWeight="600" fontSize="2xl" marginBottom="5px">Today's foods</Text>
                <UnorderedList>
                    {orderItems.map((item)=>(
                        <ListItem fontSize="lg">{item.quantity} {item.name} = {item.calories * item.quantity} cal</ListItem>
                    ))}
                </UnorderedList>
                <Text marginTop="5px">Total calories: {ObtainTotalCalories()}</Text>
            </Flex>
        </Box>
    )
}