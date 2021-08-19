import Input from '../Input';
import './index.css';

function Form() {
    return (
        <div className="form">
			<Input type="text" name="breed" handleInputChange={e=>{console.log(e.target.value)}}/>
            <Input type="2-selects" name="height" max={200} units="cm" handleInputChange={e=>{console.log(e.target.value)}}/>
            <Input type="2-selects" name="weight" max={50} units="Kg" handleInputChange={e=>{console.log(e.target.value)}}/>
            <Input type="2-selects" name="life span" optional={true} max={20} units="years" handleInputChange={e=>{console.log(e.target.value)}}/>
            <Input type="text" name="url image" optional={true} handleInputChange={e=>{console.log(e.target.value)}}/>
            <Input type="multi-select" name="temperament" optional={true} multiSelectArray={['uno', 'dos', 'tres']} multiSelectedArray={['dos', 'tres']}  handleInputChange={e=>{console.log(e.target.value)}}/>
            <div className="requiredMessage">* Required fields</div>
            <button>Create</button>
        </div>
    )
}

export default Form;
