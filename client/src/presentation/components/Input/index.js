import './index.css';

function Input({type, name, value, handleInputChange, max, units, optional, multiSelectArray, multiSelectedArray}) {
    let nameToShow;
    if (name) {
        const toUpperCase = name.split('');
        toUpperCase[0] = toUpperCase[0].toUpperCase();
        nameToShow = toUpperCase.join('');
        if (nameToShow === 'LifeSpan') nameToShow = 'Life span';
        if (nameToShow === 'UrlImage') nameToShow = 'Url image';
    }
    let maxArray;
    if(max) {
        maxArray = new Array(max + 1).fill(0);
    }
    // const multiSelectUpdated = [];
    if(multiSelectArray && multiSelectArray[0] !== '') {
        multiSelectArray.unshift('');
    }
    return (
        <div className="input-container">
			{(type !== '2-selects' && type !== 'multi-select') && <div>
                <label className="label-form" htmlFor={`${name}-input`}>{!optional && '*'}{nameToShow}:</label>
                <input className="input-form" id={`${name}-input`} type={type} value={value} name={name} onChange={handleInputChange} />
            </div>}
            {type === '2-selects' && <div>
                <label className="label-form" htmlFor={`${name}-input`}>{!optional && '*'}{nameToShow} ({units}):</label>
                <select id={`${name}-input`} value={value[0]} name={`${name}-1`} onChange={handleInputChange}>
                    {maxArray.map((element, index) => {
                        if (index === 0) return <option key={`min-${index}`}></option>
                        return <option key={`min-${index}`}>{index}</option>
                    })}
                </select>
                <span>to</span>
                <select value={value[1]} name={`${name}-2`} onChange={handleInputChange}>
                    {maxArray.map((element, index) => {
                        if (index === 0) return <option key={`max-${index}`}></option>
                        return <option key={`max-${index}`}>{index}</option>
                    })}
                </select>
            </div>}
            {type === 'multi-select' && <div>
                <label className="label-form" htmlFor={`${name}-input`}>{!optional && '*'}{nameToShow}:</label>
                <select id={`${name}-input`} value={multiSelectedArray.length > 0 && multiSelectedArray[multiSelectedArray.length - 1]} name={name} onChange={handleInputChange}>
                    {multiSelectArray.map((element, index) => {
                        if (index === 0) return <option key={`min-${index}`}></option>
                        if (!multiSelectedArray.some(temperament => element === temperament)) {
                            return <option key={`temperament-${index}`}>{element}</option>
                        }
                    })}
                </select>
                {/* <span>{multiSelectedArray.length > 0 && multiSelectedArray.join(', ')}{multiSelectedArray.length > 0 && '.'}</span> */}
            </div>}
        </div>
    )
}

export default Input;
