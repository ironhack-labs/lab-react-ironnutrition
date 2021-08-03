import { Box } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"
import { FoodListing } from "../components/FoodListing"
import { SearchBar } from "../components/SearchBar"

export const Home = () => {

    return(
        <section>
                <h1>IronNutrion</h1>
        <Flex flexWrap="wrap" ml="20%" mr="20%" mt="2%">

                  <FoodListing />

            </Flex>
        </section>
    )
}