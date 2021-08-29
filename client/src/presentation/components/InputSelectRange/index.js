import './index.css';

function InputSelectRange({name, value, handleInputChange, max, units, optional}) {
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
    return (
        <div className="input-container">
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
        </div>
    )
}

export default InputSelectRange;
