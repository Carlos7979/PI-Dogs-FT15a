import './index.css';

function Selected({array, onClick}) {
    return (
        <div className="selected-container" onClick={onClick}>
			{/* {array.length > 0 && array.join(', ')}{array.length > 0 && '.'} */}
            {array.map((temperament, index) => <span className="selected-temperaments" key={index} id={`temperament-${index}`} title={`remove ${temperament}`}>{temperament}</span>)}
        </div>
    )
}

export default Selected;
