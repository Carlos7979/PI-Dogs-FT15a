import './index.css';
import { useDispatch, useSelector } from 'react-redux'
import { hideOptions, toggleFilter, toggleOrder } from '../../../logic/actions';

function SearchButtons({handleClickSearch}) {
    const dogs = useSelector(state => state.dogs);
    const dispatch = useDispatch();
    if (dogs.length < 2) dispatch(hideOptions());
    const handleClickOrder = () => {
        dispatch(toggleOrder());    
    }
    const handleClickFilter = () => {
        dispatch(toggleFilter());
    }
    return (
        <div className="searchButtons">
            <button type="submit" onClick={handleClickSearch}>Search</button>
            {dogs.length > 1 && <button className="center" onClick={handleClickOrder}>Order</button>}
            {dogs.length > 1 && <button onClick={handleClickFilter}>Filter</button>}
        </div>
    )
}

export default SearchButtons;
