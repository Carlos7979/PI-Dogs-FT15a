import { useDispatch } from 'react-redux';
import { filterDogs, temperamentsInDogs } from '../../../controller';
import { setFilter, setFiltered } from '../../../logic/actions';
import './index.css';

function Filter({dogs, filter}) {
    const dispatch = useDispatch();
    const temperaments = temperamentsInDogs(dogs);
    const handleChange = event => {
        const value = event.target.value;
        filterDogs(dispatch, setFilter, setFiltered, dogs, value);
    }
    return (
        <div className="filter">
            <span>Filter by temperament</span>
            <select value={filter} onChange={handleChange} ref={input => input && input.blur()}>
                {temperaments.map((temperament, index) => {
                    return <option key={`filter-${index}`}>{temperament}</option>
                })}
            </select>
        </div>
    )
}

export default Filter;