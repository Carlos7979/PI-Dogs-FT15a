import { useDispatch } from 'react-redux';
import { isLog, resetState } from '../../../logic/actions'
import './index.css';

function ButtonLogout(props) {
    const dispatch = useDispatch();
    const handleClick = () => {
        props.logout();
        dispatch(isLog(''));
    }
    return (
        <button onClick={handleClick}>
            Log out
        </button>
    )
}

export default ButtonLogout;