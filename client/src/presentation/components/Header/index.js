import Nav from '../Nav';
import RouteTitle from '../RouteTitle';
import Search from '../Search';
import './index.css';

function Header({logout, location}) {
    let title = location.pathname.split('/')[1];
    title = title[0]?.toUpperCase() + title.slice(1);
    // const headerStyle = {
    //     Home: {color:'chocolate', background: 'mediumseagreen'},
    //     Create: {color:'chocolate', background: 'khaki'},
    //     Detail: {color:'whitesmoke', background: 'slateblue'}
    // }
    return (
        <div className="header">
            <h1 className="headerAppTitle">Henry Dogs</h1>
            {/* <RouteTitle title={title} color={headerStyle[title].color} background={headerStyle[title].background}/> */}
            {title === 'Home' && <Search/>}
            <Nav logout={logout}/>
        </div>
    )
}

export default Header;