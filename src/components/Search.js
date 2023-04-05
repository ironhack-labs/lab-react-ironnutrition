import { Input } from 'antd';

function SearchForm(props) {
  const handleQueryChange = (e) => {
    props.setQuery(e.target.value);
  };

  return (
    <div>
      Search :
      <Input onChange={handleQueryChange} type="search" />
    </div>
  );
}

export default SearchForm;
