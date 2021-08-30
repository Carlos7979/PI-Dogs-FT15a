import './index.css';

function InputText({type, name, value, handleInputChange, optional, nameToShow, error}) {
    if (name && !nameToShow) {
        const toUpperCase = name.split('');
        toUpperCase[0] = toUpperCase[0].toUpperCase();
        nameToShow = toUpperCase.join('');
    }
    return (
        <div className="input-container">
			<label className={"label-form " + error} htmlFor={`${name}-input`}>{!optional && '*'}{nameToShow}:</label>
            <input className="input-form" id={`${name}-input`} type={type} value={value} name={name} onChange={handleInputChange} />
        </div>
    )
}

export default InputText;
