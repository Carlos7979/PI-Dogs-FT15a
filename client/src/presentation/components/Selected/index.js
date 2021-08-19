import './index.css';

function Selected({array}) {
    return (
        <div className="selected-container">
			{array.length > 0 && array.join(', ')}{array.length > 0 && '.'}
        </div>
    )
}

export default Selected;
