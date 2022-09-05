import { Divider, Input } from 'antd';

function SearFood({ search, setSearch }) {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <Divider>Search</Divider>
      <Input value={search} type="text" onChange={handleSearch} />
    </div>
  );
}

export default SearFood;
