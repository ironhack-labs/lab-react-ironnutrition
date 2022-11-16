import {useState} from 'react'

function Searchbar(props) {
    const [query, setQuery] = useState('');
const {filterFoods} = props

    const handleQuery = (e) => {
        setQuery(e.target.value);
        filterFoods(e.target.value);
    }
  return (
    <div>
      <h3>Search</h3>
      <input type="text" value={query} onChange={handleQuery} />
    </div>
  )
}

export default Searchbar