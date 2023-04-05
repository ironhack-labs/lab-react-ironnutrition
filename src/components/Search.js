import { Input } from "antd";

function Search(props) {
    return <Input value={props.query} onChange={(e) => {props.setQuery(e.target.value)}} />
}

export default Search;