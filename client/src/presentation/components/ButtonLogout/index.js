import './index.css';

function ButtonLogout(props) {
    return (
        <button onClick={props.logout}>
            Salir
        </button>
    )
}

export default ButtonLogout;