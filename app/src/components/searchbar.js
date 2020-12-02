import 'bulma/css/bulma.css'

const SearchBar = ({ search }) => {

    return (
        <div className="field">
            <div className="control">
                <input className="input is-primary" type="text"  placeholder="Primary input" />
            </div>

        </div>
    )
}

export default SearchBar
