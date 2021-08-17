import './index.css';
import { useSelector } from 'react-redux'

function SearchButtons({handleClick}) {
    const dogs = useSelector(state => state.dogs);
    return (
        <div className="searchButtons">
            <button type="submit" onClick={handleClick}>Search</button>
            {dogs.length > 1 && <button id="filter">Filter</button>}
            {dogs.length > 1 && <button>Order</button>}
        </div>
    )
}

export default SearchButtons;
