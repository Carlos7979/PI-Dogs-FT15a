import './index.css';

function Errors({errors}) {
    return (
        <div className="errors">
			{errors?.map( (error, index) => <li key={`error-${index}`}>{error}</li>)}
        </div>
    )
}

export default Errors;
