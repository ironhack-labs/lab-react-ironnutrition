import { Input } from "antd";
import { useState } from "react";



const Search = (props)=>{

    const[searchInfo, setSearchInfo] = useState("")

    const searchSetter = (e)=>{


        setSearchInfo(e.target.value)
        
        props.filter(e.target.value)
    }

return(

    
        <Input value = {searchInfo} placeholder="Search" type="text" name="name" onChange={searchSetter}/>
        
    
)
}

export default Search