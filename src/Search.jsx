import { Divider, Input } from 'antd';

function Search(props) {

  const handleInputChange = event => {
    props.setQuery(event.target.value)
  }

  return (
    <div>
      <Divider>Search</Divider>
      <Input type="text" onChange={handleInputChange} />
    </div>
  )
}

export default Search
