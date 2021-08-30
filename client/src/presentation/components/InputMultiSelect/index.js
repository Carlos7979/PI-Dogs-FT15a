import './index.css';

function InputMultiSelect({name, handleInputChange, optional, multiSelectArray, multiSelectedArray, nameToShow, error}) {
    if (name && !nameToShow) {
        const toUpperCase = name.split('');
        toUpperCase[0] = toUpperCase[0].toUpperCase();
        nameToShow = toUpperCase.join('');
    }
    if(multiSelectArray && multiSelectArray[0] !== '') {
        multiSelectArray.unshift('');
    }
    return (
        <div className="input-container">
            <label className={"label-form " + error} htmlFor={`${name}-input`}>{!optional && '*'}{nameToShow}:</label>
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
