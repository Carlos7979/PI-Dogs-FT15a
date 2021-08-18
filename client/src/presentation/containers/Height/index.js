import './index.css';

function Height({ height }) {
    return (
        <div className="isDetail">
			<span className="title">Height:</span> {height ? `${height} cm` : <span >not registered</span>}.
        </div>
    )
}

export default Height;
