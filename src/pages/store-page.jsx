import { FoodBox } from "../components/foods";
import { StoreLayout } from "../components/layout";

function StorePage() {
    return (
        <StoreLayout> 
            <FoodBox />
        </StoreLayout>
    );
}

export default StorePage;