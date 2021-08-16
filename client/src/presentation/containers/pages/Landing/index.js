import './index.css';

function Landing(props) {
    const handleClick = () => {
        props.login();
    }
    return (
        <section className="landing">
            <div className="landing-title">
                Landing page
            </div>
            <button onClick={() => handleClick()}>
                Entrar
            </button>
        </section>
    )
}

export default Landing