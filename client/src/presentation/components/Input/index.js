import './index.css';

function Input({type, name, value, handleInputChange, max, units, optional, multiSelectArray, multiSelectedArray}) {
    if (name) {
        const toUpperCase = name.split('');
        toUpperCase[0] = toUpperCase[0].toUpperCase();
        name = toUpperCase.join('');
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
                <label className="label-form" for={`${name}-input`}>{!optional && '*'}{name}:</label>
                <input className="input-form" id={`${name}-input`} type={type} value={value} onChange={handleInputChange} />
            </div>}
            {type === '2-selects' && <div>
                <label className="label-form" for={`${name}-input`}>{!optional && '*'}{name} ({units}):</label>
                <select id={`${name}-input`} value={value} onChange={handleInputChange}>
                    {maxArray.map((element, index) => {
                        if (index === 0) return <option key={`min-${index}`}></option>
                        return <option key={`min-${index}`}>{index}</option>
                    })}
                </select>
                <span>to</span>
                <select value={value} onChange={handleInputChange}>
                    {maxArray.map((element, index) => {
                        if (index === 0) return <option key={`max-${index}`}></option>
                        return <option key={`max-${index}`}>{index}</option>
                    })}
                </select>
            </div>}
            {type === 'multi-select' && <div>
                <label className="label-form" for={`${name}-input`}>{!optional && '*'}{name}:</label>
                <select id={`${name}-input`} value={value} onChange={handleInputChange}>
                    {multiSelectArray.map((element, index) => {
                        if (index === 0) return <option key={`min-${index}`}></option>
                        if (!multiSelectedArray.some(temperament => element === temperament)) {
                            return <option key={`temperament-${index}`}>{element}</option>
                        }
                    })}
                </select>
                <span>{multiSelectedArray.join(', ')}.</span>
            </div>}
        </div>
    )
}

export default Input;
