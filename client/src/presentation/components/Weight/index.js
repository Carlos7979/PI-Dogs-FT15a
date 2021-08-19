import './index.css';

function Weight({weight}) {
    return (
        <div  className="isDetail">
			<span className="sub-title">Weight:</span> {weight ? `${weight} Kg` : <span >not registered</span>}.
        </div>
    )
}

export default Weight;
