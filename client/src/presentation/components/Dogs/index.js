import './index.css';
import Dog from '../Dog';
import { useSelector } from 'react-redux';
import Pages from '../Pages';

function Dogs() {
    const dogs = useSelector(state => state.dogs);
    const page = useSelector(state => state.page);
    const total = dogs.length;
    const pages = Math.ceil(total/9);
    const handlePages = (dogs, page) => {
        const first = (page -1) * 9;
        const last = page * 9;
        return dogs.slice(first, last);
    }
    return (
        <div>
            {pages > 1 && <Pages page={page} pages={pages}/>}
            <div className="dogs">
                {handlePages(dogs, page).map((dog, index) => {
                    return <Dog dog={dog} key={index}/>
                })}
            </div>
        </div>
    )
}

export default Dogs;