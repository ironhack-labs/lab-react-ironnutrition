import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {
    const handleInputChange = (event) => {
        props.setQueryProp(event.target.value)
    }
    return (
        <>
            <Divider>Search</Divider>
            <Input value={props.query} type="text" onChange={handleInputChange} />
        </>
    );
}

export default Search;

// function SearchField(props) {
//     const handleInputChange = (event) => {
//         props.setQueryProp(event.target.value)
//     } 

//     return (
//         <input type="text" onChange={handleInputChange} />
//     )
// }

// export default SearchField