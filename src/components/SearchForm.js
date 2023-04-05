import { Input } from "antd";


function SearchForm({ setQuery }) {
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <Input placeholder="Search for a food..."
        onChange={handleInputChange}
        style={{ width: 300 }}
      />
    </div>
  );
}

export default SearchForm;
