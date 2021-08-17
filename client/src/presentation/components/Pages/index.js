import { useDispatch } from 'react-redux';
import './index.css';
import { setPage } from '../../../logic/actions'

function Pages({pages, page}) {
    const dispatch = useDispatch();
    const numbers = new Array(pages).fill(0);
    const handleChange = event=> {
        const value = event.target.value;
        dispatch(setPage(value));
    }
    return (
        <div className="pageChange">
            <span>Page</span>
            <select value={page} onChange={handleChange}>
                {numbers.map((element, index) => {
                    return <option key={`page-${index}`}>{index + 1}</option>
                })}
            </select>
            <span>of {pages}</span>
        </div>
    )
}

export default Pages;