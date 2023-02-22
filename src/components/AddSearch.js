import { Card, Row, Col, Divider, Input, Button } from "antd";
import { useState } from "react";

function AddSearch(props) {
    
    const [firstLetter, setFirstLetter] = useState("")

    const handleSelect = (e) => {
        setFirstLetter(e.target.value)
    
        props.filterFood(e.target.value)
      }
    
    return ( 
        <div className="Search">
        <h2>Search</h2>
        <form>
            <label htmlFor="name"></label>
            <Input type="text" name="name" onChange={handleSelect}/>

        </form>
    </div> 
     );
}

export default AddSearch;