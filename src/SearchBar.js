import 'bulma/css/bulma.css';

const SearchBar = (props) => {
    return <input type="text" value={props.value} onChange={event => props.onChange(event.currentTarget.value)} placeholder="Search for food..." className="input"></input>
}

export default SearchBar; 