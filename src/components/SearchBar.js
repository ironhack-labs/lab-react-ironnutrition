import React, {useState} from 'react'

export default function SearchBar({searchFood}){
    const [input, setInput] = useState('')

    const handleInput = e => {
        setInput(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        searchFood(input)
    }

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Search for food"
            onChange={handleInput}
          />
        </div>
        <div>
          <button>Search</button>
        </div>
      </form>
    );
}
