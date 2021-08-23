import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs, isLog } from '../../../../logic/actions'

function Landing(props) {
    const order = useSelector(state => state.order);
    const dispatch = useDispatch();
    const handleClick = () => {
        props.login();
        dispatch(isLog(true));
        dispatch(getDogs(undefined, order));
    }
    return (
        <section className="landing">
            <button className="logginButton" onClick={handleClick}>
                Go
            </button>
        </section>
    )
}

export default Landing