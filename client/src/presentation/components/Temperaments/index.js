import './index.css';

function Temperaments({id, temperaments, isDetail}) {
    const temperamentClass = isDetail ? 'isDetail' : 'temperaments'
    return (
        <div id={`temperament-${id}`} className={temperamentClass}>
            <span id={`temperamentSpan1-${id}`} className="title">Temperament:</span> {temperaments ? temperaments.toLowerCase() : <span id={`temperamentSpan2-${id}`}>not registered</span>}.
        </div>
    )
}

export default Temperaments