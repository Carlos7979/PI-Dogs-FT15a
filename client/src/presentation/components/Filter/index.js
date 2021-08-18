import { useDispatch } from 'react-redux';
import { setFilter, setFiltered } from '../../../logic/actions';
import './index.css';

function Filter({dogs, filter}) {
    const dispatch = useDispatch();
    const temperamentsInDogs = []
    for (const dog of dogs) {
        if (dog.temperament) {
            const temperamentsInDog = dog.temperament.toLowerCase().split(', ');
            for (const temperament of temperamentsInDog) {
                if (!temperamentsInDogs.some(e => e === temperament)){
                    temperamentsInDogs.push(temperament);
                }
            }
        }
    }
    temperamentsInDogs.sort().unshift('All');
    const handleChange = event => {
        const value = event.target.value;
        const filtered = [];
        dispatch(setFilter(value));
        for (const dog of dogs) {
            if (dog.temperament && dog.temperament.toLowerCase().includes(value)) {
                filtered.push(dog);
            }
        }
        dispatch(setFiltered(filtered));
    }
    return (
        <div className="filter">
            <span>Filter by temperament</span>
            <select value={filter} onChange={handleChange}>
                {temperamentsInDogs.map((temperament, index) => {
                    return <option key={`filter-${index}`}>{temperament}</option>
                })}
            </select>
        </div>
    )
}

export default Filter;