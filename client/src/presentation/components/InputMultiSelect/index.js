import './index.css';

function InputMultiSelect({name, handleInputChange, optional, multiSelectArray, multiSelectedArray}) {
    let nameToShow;
    if (name) {
        const toUpperCase = name.split('');
        toUpperCase[0] = toUpperCase[0].toUpperCase();
        nameToShow = toUpperCase.join('');
        if (nameToShow === 'LifeSpan') nameToShow = 'Life span';
        if (nameToShow === 'UrlImage') nameToShow = 'Url image';
    }
    if(multiSelectArray && multiSelectArray[0] !== '') {
        multiSelectArray.unshift('');
    }
    return (
        <div className="input-container">
            <label className="label-form" htmlFor={`${name}-input`}>{!optional && '*'}{nameToShow}:</label>
                <select id={`${name}-input`} value={multiSelectedArray.length > 0 && multiSelectedArray[multiSelectedArray.length - 1]} name={name} onChange={handleInputChange}>
                    {multiSelectArray.map((element, index) => {
                        if (index === 0) return <option key={`min-${index}`}></option>
                        if (!multiSelectedArray.some(temperament => element === temperament)) {
                            return <option key={`temperament-${index}`}>{element}</option>
                        }
                    })}
                </select>
        </div>
    )
}

export default InputMultiSelect;
