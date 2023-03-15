import { Input } from "antd";
import { useState } from "react";
import "./../App"
function SearchBar ({onSearch}) {
const [searchText,setSearchText] = useState('');

function handleSearchTextChange (event){
const text = event.target.value;
setSearchText(text);
onSearch(text)
}

return (

<div className="search-bar">

<label>
    Search:
    <Input type = "text" name = "search" value = {searchText} onChange = {handleSearchTextChange}/>
</label>


</div>

)

}






export default SearchBar;