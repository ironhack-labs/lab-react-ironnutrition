import React, {useState} from 'react'

const Search = ({ff}) => {

    // const [search, setSearch] = useState()
    const [foods, setFoods] = useState(ff)

    function handleSearch(e) {
        let val = e.target.value
        if (val === '') {
            setFoods(ff)
        } else {
            const newArr = ff.filter(f => f.name.toUpperCase() == val.toUpperCase())
            setFoods(newArr)
        }
        console.log(foods)
    }

    return (
        <div>
            <form>
                <div className="field">
                    <label className="label">Search</label>
                    <div className="control">
                        <input onChange={handleSearch} name="search" className="input" type="text" placeholder="Search for your favorite dish" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search
