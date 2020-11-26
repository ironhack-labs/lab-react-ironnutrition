import React, {useState} from 'react'

export default function SearchBar({searchItem}){

  const [input, setInput] = useState('')

  const handleInput = el => {
    setInput(el.target.value)
  }

  const handleChange = el => {
    el.preventDefault()
    searchItem(input)
  }

  return (
    <form onChange={handleChange}>
      <div>
        <input 
          style={{marginBottom: '20px'}} 
          className='input search-bar'
          type='text' 
          placeholder='Search' 
          onChange={handleInput}
        />
      </div>
    </form>
  )
}