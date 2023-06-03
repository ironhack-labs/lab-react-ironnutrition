import { Input } from "antd"

function SearchBar (props) {

return (
    <div>
        <p>Search</p>
        <div>
            <Input name="food-search" className="search-bar" placeholder="Search food" onChange={props.searchFoods} />
        </div>
    </div>
)
}

export default SearchBar