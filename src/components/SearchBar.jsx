export const SearchBar = ({ handleSearchChange, searchString }) => {
  return <input value={searchString} onChange={handleSearchChange} />;
};
