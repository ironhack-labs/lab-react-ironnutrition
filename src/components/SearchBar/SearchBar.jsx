import React from 'react';

const SearchBar = ({ setSearch }) => {
  return (
    <div>
      <form onSubmit={() => {}} className="mt-4 mx-3">
        <div className="field">
          <label className="label">SearchFood</label>
          <div className="control">
            <input name="name" onChange={(e) => setSearch(e.target.value)} className="input" type="text" placeholder="Text input" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;