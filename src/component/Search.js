

export default function Search(props){
    
    
    return(
        <div>
            <form>
                <label>Search
                    <input 
                      type="search" 
                      name="searchQuery"
                      placeholder="search by name"
                      value={props.searchQuery}
                      onChange={(e) => {props.setSearchQuery(e.target.value)}}  />
                </label>
            </form>
        </div>
    )
}