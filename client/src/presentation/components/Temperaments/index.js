import './index.css';

function Temperaments({temperaments}) {
    return (
        <div className="temperaments">
            <span className="title">Temperaments:</span> {temperaments ? temperaments.toLowerCase() : <span>not registered</span>}.
        </div>
    )
}

export default Temperaments