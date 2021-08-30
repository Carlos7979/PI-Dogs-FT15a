import { useDispatch } from 'react-redux';
import './index.css';
import { setPage } from '../../../logic/actions'

function Pages({pages, page}) {
    page = Number(page);
    const dispatch = useDispatch();
    const numbers = new Array(pages).fill(0);
    console.log(pages);
    const handleChange = event => {
        const value = event.target.value;
        dispatch(setPage(value));
    }
    const handleClickNext = () => {
        dispatch(setPage(++page));
    }
    const handleClickPrevious = () => {
        dispatch(setPage(--page));
    }
    const handleKeyDownNext = event => {
        if (event.keyCode === 39) {
            dispatch(setPage(++page));
        }
    }
    const handleKeyDownPrevious = event => {
        if (event.keyCode === 37) {
            dispatch(setPage(--page));
        }
    }
    return (
        <div className="pageChange">
            <button disabled={page === 1} onClick={handleClickPrevious} onKeyDown={handleKeyDownNext}>{"<"}</button>
            <div>
                <span>Page</span>
                <select value={page} onChange={handleChange} ref={input => input && input.focus()}>
                    {numbers.map((element, index) => {
                        return <option key={`page-${index}`}>{index + 1}</option>
                    })}
                </select>
                <span>of {pages}</span>
            </div>
            <button disabled={page === pages} onClick={handleClickNext} onKeyDown={handleKeyDownPrevious}>{">"}</button>
        </div>
    )
}

export default Pages;