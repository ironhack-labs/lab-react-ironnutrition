export const SearchBar = ({ onChange, searchString }) => {
  return (
    <div>
      <input value={searchString} onChange={onChange} />
    </div>
  );
};
