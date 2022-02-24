import React, {useState} from 'react'


export default function Searchbar({placeholder, data}) {

    const[filteredData, setFiltereData] = useState([])
    const[wordEntered, setWordEntered] = useState("")

    const handleFilter = (event) => {
        const searchWord = event.target.value
        setWordEntered(searchWord)
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase);
        });
        setFiltereData(newFilter);
    }
// i Am wondering if i am filtering correctly.
// have i done the correct chain of data is the data displayed in the correct way?
// 24/02/2022 i am starting to see i am not using the right source to build what i need :( 


  return (
    <div className='search'>

    <div className="searchInputs"> 
    <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
    <button type="submit"> submit</button>
    </div>
    {filteredData.length !== 0 && (
    <div className='dataResults'>
        {filteredData.map((value, key) => {
            return <p> {value.name} </p>
        })}
    </div>
     ) }
    </div>
  )
}
