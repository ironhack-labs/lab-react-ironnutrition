import { Box } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"
import { FoodListing } from "../components/FoodListing"
import { SearchBar } from "../components/SearchBar"

export const Home = () => {

    // const [items, setItems] = useState([])
    //     setItems({items})

    return(
        <section>
        <Flex flexWrap="wrap" ml="20%" mr="20%" mt="2%">
                <h1>IronNutrion</h1>

                <Box bg="white" w="100%" p={4} >
                   <SearchBar/>
                </Box>

                <Box bg="white" w="400px" h="500px" p={4} overflow="auto">
                  <FoodListing />
                </Box>

                <Box bg="blue" w="350px" h="500px" p={4} color="white">
                    This is the Box
                </Box>
            </Flex>
        </section>
    )
}