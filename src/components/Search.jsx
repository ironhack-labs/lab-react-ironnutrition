import { useState} from 'react'

function SearchBar({filterFood}) {

    const [query, setQuery] = useState('')

    const handleQuery = (e) => {
        setQuery(e.target.value);
        filterFood(e.target.value);
      };
  return (
    <div>
      <h3>Search</h3>
      <input type="text" value={query} onChange={handleQuery} />
    </div>
  )
}

export default SearchBar
