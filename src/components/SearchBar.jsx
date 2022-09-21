import {useState} from 'react'

function SearchBar(props) {

  const {searchFood} = props

  const [searchedString, setSearchedString] = useState('')

  const handleChange = (event) => {
    searchFood(event.target.value)
    setSearchedString(event.target.value)
    console.log(event.target.value)
    console.log(searchedString)
    //e)
  }

  return (
    <form>
      <label htmlFor="search">Search food:</label>
      <input value={searchedString} type="text" name="search" id="search" onChange={handleChange} />
    </form>
  )
}

export default SearchBar;