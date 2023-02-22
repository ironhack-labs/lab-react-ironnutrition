import { Card, Row, Col, Divider, Input, Button } from "antd";
import { useState } from "react";

function AddSearch(props) {
    
    const [query, setQuery] = useState("")

    const handleSelect = (e) => {
        setQuery(e.target.value)
        props.filterFood(e.target.value)
      }
    
    return ( 
        <div className="Search">
        <h2>Search</h2>
        <form>
            <label htmlFor="name"></label>
            <Input type="text" name="name" value={query} onChange={(e) => handleSelect(e)}/>

        </form>
    </div> 
     );
}

export default AddSearch;