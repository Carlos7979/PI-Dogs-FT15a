import './index.css';

function InputText({type, name, value, handleInputChange, optional}) {
    let nameToShow;
    if (name) {
        const toUpperCase = name.split('');
        toUpperCase[0] = toUpperCase[0].toUpperCase();
        nameToShow = toUpperCase.join('');
        if (nameToShow === 'LifeSpan') nameToShow = 'Life span';
        if (nameToShow === 'UrlImage') nameToShow = 'Url image';
    }
    return (
        <div className="input-container">
			<label className="label-form" htmlFor={`${name}-input`}>{!optional && '*'}{nameToShow}:</label>
            <input className="input-form" id={`${name}-input`} type={type} value={value} name={name} onChange={handleInputChange} />
        </div>
    )
}

export default InputText;
