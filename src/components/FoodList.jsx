import FoodBox from "./FoodBox";
import { Row } from "antd";
import SearchFood from "./SearchFood";
import EmptyFood from "./EmptyFood";

const FoodList = ({
  fSrchFoods,
  filterSearch,
  searchFoodStr,
  setSearchFoodStr,
  deleteFood,
}) => {
  return (
    <div>
      <h2>Food List</h2>
      <SearchFood
        searchFoodStr={searchFoodStr}
        setSearchFoodStr={setSearchFoodStr}
        filterSearch={filterSearch}
      />
      <Row style={{ width: "100%", justifyContent: "center" }}>
        {fSrchFoods.length > 0 ? (
          fSrchFoods.map((food) => {
            return (
              <FoodBox
                key={food.id}
                food={food}
                deleteFood={() => {
                  deleteFood(food.id);
                }}
              />
            );
          })
        ) : (
          <EmptyFood />
        )}
      </Row>
    </div>
  );
};

export default FoodList;
