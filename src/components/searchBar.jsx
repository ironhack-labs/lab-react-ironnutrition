/* eslint-disable react/prop-types */
import {Row, Input} from "antd";
function SearchBar(props){
    return(
        <Row id="main-search">
            <Input style={{ color:"black", textAlign: "center"}} id="search" type="text" name="search"  placeholder="Search products" onChange={(e)=>props.filter(e.target.value)}></Input>
        </Row>
    )
}

export default SearchBar