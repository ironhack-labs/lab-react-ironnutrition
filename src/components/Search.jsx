import { Divider, Input } from "antd";

function Search(props) {

    const {filterBy, setFilterBy, handleUpdate} = props
    
    return (
    <>
        <Divider>Search</Divider>

        <label>Search</label>
        <Input name="search" value={filterBy} type="text" onChange={() => handleUpdate(event)} />
    </>
    );
    }

export default Search;