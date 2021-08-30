import './index.css';

function Selected({array, onClickClearTemperament, onClickClearTemperaments, multiSelectedArray}) {
    return (
        <div>
            {multiSelectedArray.length > 0 && <button onClick={onClickClearTemperaments}>Clear all selected temperaments</button>}
            {multiSelectedArray.length > 0 && <span className="instruction">Or remove each one by clicking it</span>}
            <div className="selected-container" onClick={onClickClearTemperament}>
			    {/* {array.length > 0 && array.join(', ')}{array.length > 0 && '.'} */}
                {array.map((temperament, index) => <span className="selected-temperaments" key={index} id={`temperament-${index}`} title={`remove ${temperament}`}>{temperament}</span>)}
            </div>
        </div>
    )
}

export default Selected;
