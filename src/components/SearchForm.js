import { Input } from 'antd';
import { useState } from 'react';

function Search(props) {

    
    const [searchWord, setSearchWord] = useState("")  


    return (
    <form>
        <Input value={searchWord} type="text" onChange={(e) => {setSearchWord(e.target.value);
        props.callbackToSearchFood(e.target.value)}} />
    </form>
  );
}

export default Search;