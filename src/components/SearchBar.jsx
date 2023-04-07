
function SearchBar({ searchTerm, handleSearch }) {

  return (
    <div>
      <div className="mb-3">
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          className=" w-96 relative m-0 block min-w-0 flex-auto rounded-full border border-solid bg-transparent bg-clip-padding px-5 py-2 text-base font-normal outline-none transition duration-300 ease-in-out   border-neutral-600 text-neutral-200 placeholder:text-white placeholder:opacity-30 placeholder:font-light focus:border-yellow-500 focus:shadow-md focus:shadow-yellow-900"
          id="SearchBar"
          placeholder="🔍 Look for a food..." />
      </div>
    </div>
  )
}

export default SearchBar