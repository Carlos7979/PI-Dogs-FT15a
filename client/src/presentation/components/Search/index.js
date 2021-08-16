import './index.css'

function Search() {
    return (
        <div className="search">
            <label htmlFor="search">Search Dogs by Breed</label>
            <input id="search" type="text"/>
            <button type="submit">Search</button>
        </div>
    )
}

export default Search;