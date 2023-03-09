import { Divider, Input } from 'antd';

function SearchBar(props) {
  const handleChange = (e) => {
    props.searchFood(e.target.value);
  };
  return (
    <div>
      <Divider>Search</Divider>
      <Input value={undefined} type="text" onChange={handleChange} />
    </div>
  );
}

export default SearchBar;
