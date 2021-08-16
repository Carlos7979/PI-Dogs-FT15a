import './index.css'
import { getDogs } from '../../../logic/actions'
import { useDispatch } from 'react-redux';

function Search() {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(getDogs());
    }
    return (
        <div className="search">
            <label htmlFor="search">Search Dogs by Breed</label>
            <input id="search" type="text"/>
            <button type="submit" onClick={handleClick}>Search</button>
        </div>
    )
}

export default Search;