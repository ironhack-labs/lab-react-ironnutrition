import { Form, Divider, Input } from "antd";

function SearchBar(props) {
    function handleInput(event) {
        if (!event.target.value) {
            props.setFoodsFunction(props.foods)
        }
        let tempFoods = [...props.foods].filter((food) => food.name.toLowerCase().includes(event.target.value.toLowerCase()))
        props.setFoodsFunction(tempFoods)
    }

    return (
        <><Form>
            <Divider>Search</Divider>
            <Input addonBefore="Search:" type="text" allowClear onChange={handleInput} />
        </Form>
        </>
    );
}

export default SearchBar;