import { Input } from 'antd';

const { Search } = Input;

const SearchBar = (props) => {
    return(
        <Search placeholder="search" onChange={(e) => props.onSearch(e.target.value)} style={{width: '95%'}} />
    );
};

export default SearchBar