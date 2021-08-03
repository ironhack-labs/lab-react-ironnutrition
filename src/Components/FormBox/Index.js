import React from 'react'
import { useForm } from "react-hook-form";
import {Box, Center, Flex, Text, Input, Form, FormControl, FormLabel, FormErrorMessage, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Button} from "@chakra-ui/react"
import {useState, useEffect} from 'react'

export default function FormBox({submitFood=()=>{}}) {

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
      } = useForm();

      function onSubmit(values) {
        return new Promise((resolve) => {
          setTimeout(() => {
            submitFood(values.name, values.quantity);
            resolve();
          }, 3000);
        });
      }

    return (
        <Box height="70vh" width="400px" border="2px" borderRadius="8px" borderColor="gray.300">
            <Flex
                display="flex"
                flexDir="column"
                justifyContent="center"
                margin="10px"
            >
                <Text fontWeight="600" fontSize="2xl" marginBottom="10px">Enter new food item</Text>
                <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.name}>
                    <FormLabel htmlFor="foodName">Food name</FormLabel>
                    <Input
                    id="foodName"
                    placeholder="Food name"
                    {...register("name", {
                        required: "This is required",
                        minLength: { value: 2, message: "Minimum length should be 2" },
                        maxLength: { value: 30, message: "Maximum length should be 30" },
                        pattern: { value: /^[a-zA-Z ]*$/i, message: "Only alphabetical characters allowed"}
                    })}
                    />
                    <FormErrorMessage>
                    {errors.name && errors.name.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.quantity}>
                    <FormLabel htmlFor="quantity">Calories</FormLabel>
                    <Input
                    type="number"
                    id="quantity"
                    placeholder="Quantity"
                    {...register("quantity", {
                        required: "This is required",
                        min: { value: 1, message: "Minimum should be 1" },
                        max: { value: 9999, message: "Maximum should be 9999" }
                    })}
                    >
                    </Input>
                    <FormErrorMessage>
                    {errors.quantity && errors.quantity.message}
                    </FormErrorMessage>
                </FormControl>
                    <Center>
                        <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
                            Submit
                        </Button>
                    </Center>
                </form>
            </Flex>
        </Box>
    )
}