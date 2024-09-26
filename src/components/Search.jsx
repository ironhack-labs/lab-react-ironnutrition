import { useState } from "react"
import { Divider, Input } from "antd";


function Search({handleSearch}) {
    const [string, setString] = useState("")
    
    const handleChange = (e) => {
        setString(e.target.value)
        handleSearch(string)
    }

    return (
    <>
    <Divider>Search</Divider>
    <Input placeholder="find beer" type="search" name="search" value={string} onChange={handleChange}/>
    </>
)

}

export default Search