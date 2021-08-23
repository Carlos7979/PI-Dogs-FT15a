import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs, isLog } from '../../../../logic/actions'

function Landing({login}) {
    const order = useSelector(state => state.order);
    const dispatch = useDispatch();
    const handleClick = () => {
        login();
        dispatch(isLog(true));
        dispatch(getDogs(undefined, order));
    }
    const handleKeyDown = event => {
        if (event.keyCode === 13) {
            login();
            dispatch(isLog(true));
            dispatch(getDogs(undefined, order));
        }
    }
    return (
        <section className="landing" onKeyDown={handleKeyDown}>
            <button id="go" className="logginButton" onClick={handleClick} ref={input => input && input.focus()}>
                Go
            </button>

        </section>
    )
}

export default Landing