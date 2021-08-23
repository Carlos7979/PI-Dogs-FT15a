import './index.css';

function Height({ height }) {
    return (
        <div className="isDetail">
			<span className="sub-title">Height:</span> {height ? `${height} cm` : <span >not registered</span>}.
        </div>
    )
}

export default Height;
