import './index.css';
import { useDispatch } from 'react-redux';
import { isLog } from '../../../../logic/actions'

function Landing(props) {
    const dispatch = useDispatch();
    const handleClick = () => {
        props.login();
        dispatch(isLog(true));
    }
    return (
        <section className="landing">
            {/* <div className="landing-title">
                Landing page
            </div> */}
            <button className="logginButton" onClick={handleClick}>
                Log in
            </button>
        </section>
    )
}

export default Landing