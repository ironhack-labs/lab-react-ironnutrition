import {useState} from 'react'

const SearchBar = ({refreshFilteredFoodNames}) => {
  const [searchText, setSearchText] = useState("")

  const handleChange = e => {

    setSearchText(e.target.value)
    refreshFilteredFoodNames(e.target.value)
    console.log('searchText ', searchText)

  }

  return (
    <div>
      <input value={searchText} onChange={handleChange} />
    </div>
  )
}

export default SearchBar
