import { Avatar, Badge, Box, Flex, FormControl, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text } from "@chakra-ui/react"

export const FoodBox = (props) => {
    const {name, image, calories, quantity} = props

    return(
        <section>
          <Flex flexDirection="column">
                <Flex mb="20px" justifyContent="space-around">
                    <Avatar src={image}/>
                    <Box ml="3">
                        <Text fontWeight="bold" w="170px">
                            {name}
                        <Badge ml="1" colorScheme="green">New</Badge>
                        </Text>
                        <Text fontSize="sm">{calories} cal</Text>
                    </Box>

                    <FormControl id="amount">
                        <NumberInput max={20} min={1} w="80px" value={quantity}>
                            <NumberInputField />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        </FormControl>
                </Flex>
          </Flex>
    </section>
    )
}