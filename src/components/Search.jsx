const Search = (props) => {


const searchChangeHandler = (event) => {
    props.onSearch(event.target.value)
}
    return (
        <div>
            <input type="text" onChange={searchChangeHandler} ></input>
        </div>
    )
}

export default Search