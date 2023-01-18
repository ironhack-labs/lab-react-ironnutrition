

export default function Search(props) {

const {searchQuery,setSearchQuery}=props

  return (
    <div className="search-container">
      <form>
        <label>
            <input
            type="text"
            value={searchQuery}
            placeholder="Search by title"
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
        </label>
      </form>
    </div>
  );
}
