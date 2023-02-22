import { Divider, Input } from 'antd';
import { useState } from "react"

    function Search(props) {
        
        const [text, setText] = useState("")

        const handleSelect = (e) => {

        setText(e.target.value)
        props.filterFood(e.target.value)
        }
    
    return (
    <>
    <form action="">
        <Divider>Search</Divider>

        <label>Search</label>
        <Input value={text} type="text" onChange={(e) => handleSelect(e)} /> 

        </form>
    </>
    );
}

export default Search;