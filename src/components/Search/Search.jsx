import "./Search.styles.css"

export const Search = (props) => {
  const {placeholder, onChange} = props
  return(
   <div className="search-area">
    <h4>Search</h4>
    <input onChange={onChange} className="input-search" type="text" placeholder={placeholder} />
   </div>
    
  )
}