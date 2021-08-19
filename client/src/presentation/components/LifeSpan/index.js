import './index.css';

function LifeSpan({lifeSpan}) {
    return (
        <div className="isDetail">
			<span className="sub-title">Life span:</span> {lifeSpan ? `${lifeSpan}` : <span >not registered</span>}.
        </div>
    )
}

export default LifeSpan;
