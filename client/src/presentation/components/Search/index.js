import './index.css'
import { setDogs, searchDogs } from '../../../logic/actions'
import { useDispatch, useSelector } from 'react-redux';
import SearchButtons from '../SearchButtons';

function Search() {
    const dispatch = useDispatch();
    const search = useSelector(state => state.search);
    const order = useSelector(state => state.order);

    const handleClickSearch = () => {
        dispatch(setDogs(search, order));
    }
    const handleKeyDown = event => {
        if (event.keyCode === 13) {
            dispatch(setDogs(search, order));
        }
    }
    const handleChange = event => {
        dispatch(searchDogs(event.target.value));
    }
    return (
        <div className="search">
            <label htmlFor="search">Search Dogs by Breed</label>
            <input id="search" onKeyDown={handleKeyDown} type="text" onChange={handleChange} value={search}/>
            <SearchButtons handleClickSearch={handleClickSearch}/>
        </div>
    )
}

export default Search;