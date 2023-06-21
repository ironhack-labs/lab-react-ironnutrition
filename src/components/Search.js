import { Input, Button } from 'antd';
import { useState } from 'react';
export const Search = (props) => {
  const [search, setSearch] = useState('');
const onChange = (event) => {
    const value = event.target.value
    setSearch(prev=>{
        return prev.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
    })
   
}



  <form>
    <Input onChange={onChange} type="search"></Input>
    <Button htmlType="submit" type="primary">
      Search
    </Button>
  </form>;
};
