import { Input} from "antd";
export default function Search(props){
    function searchValue(e){
        props.displayMeals(e.target.value);
    }
    return(
        <div id="searchbar-container">
            <h2>Search</h2>
            <Input type="text" onChange={searchValue}/>
        </div>
    )
}