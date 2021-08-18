import './index.css';

function Weight({weight}) {
    return (
        <div  className="isDetail">
			<span className="title">Weight:</span> {weight ? `${weight} Kg` : <span >not registered</span>}.
        </div>
    )
}

export default Weight;
