import './index.css';
import Dog from '../Dog';
import { useSelector } from 'react-redux';
import Pages from '../Pages';
import Filter from '../Filter';
import Order from '../Order';

function Dogs() {
    const dogs = useSelector(state => state.dogs);
    const page = useSelector(state => state.page);
    const showOrder = useSelector(state => state.showOrder);
    const showFilter = useSelector(state => state.showFilter);
    const filter = useSelector(state => state.filter);
    const filtered = useSelector(state => state.filtered);
    const order = useSelector(state => state.order);

    const pages = Math.ceil(dogs.length/9);
    const filteredPages = Math.ceil(filtered.length/9);

    const handlePages = (dogs, page, filtered) => {
        const first = (page -1) * 9;
        const last = page * 9;
        if (filtered.length > 0) {
            return filtered.slice(first, last);
        }
        return dogs.slice(first, last);
    }
    return (
        <div>
            {((!filteredPages && pages > 1) || filteredPages > 1) && <Pages page={page} pages={filteredPages || pages}/>}
            {showOrder && <Order dogs={dogs} filtered={filtered} order={order}/>}
            {showFilter && <Filter dogs={dogs} filter={filter}/>}
            <div className="dogs">
                {handlePages(dogs, page, filtered).map((dog, index) => {
                    return <Dog dog={dog} key={index}/>
                })}
            </div>
        </div>
    )
}

export default Dogs;