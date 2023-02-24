import { Divider, Input } from "antd";

function Search(props) {
    return (
        <div>
        <Divider>Search</Divider>
            <label>Search</label>
            <Input type='text' onChange={(event) => {props.Searched(event.target.value)}} />
            </div>
    )
}

export default Search