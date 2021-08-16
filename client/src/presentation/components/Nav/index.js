import './index.css';
import ButtonLogout from '../ButtonLogout';
import { NavLink } from 'react-router-dom';

function Nav(props) {

    return (
        <div className="nav">
            <NavLink to="./home" activeClassName="selected" className="navElements">Home</NavLink>
            <NavLink to="./create" activeClassName="selected" className="navElements">Create</NavLink>
            <NavLink to="./detail" activeClassName="selected" className="navElements">Detail</NavLink>
            <ButtonLogout logout={props.logout}/>
        </div>
    )
}

export default Nav