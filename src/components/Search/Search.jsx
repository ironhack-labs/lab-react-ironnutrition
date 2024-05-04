import './Search.css'
import { Input, Card } from "antd";

const Search = ({ foodQuery, handleFoodQuery }) => {
    return (
        <Card className="search-field">
            <label>Search</label>
            <br />
            <Input type="text" placeholder="Enter food name here" value={foodQuery} onChange={handleFoodQuery} />
        </Card>
    )
}

export default Search