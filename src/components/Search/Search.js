import React from 'react';


const Search = ({ setSearch }) => {

  return (
    <div>
      <form onSubmit={() => {}} className="mt-4 mx-3">
        <div className="field">
          <label className="label"></label>
          <div className="control">
            <input name="name" onChange={(event) => setSearch(event.target.value)} 
              className="input" type="text" placeholder="search food" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Search;
