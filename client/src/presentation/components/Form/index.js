import { useDispatch, useSelector } from 'react-redux';
import { cleanCreate, cleanNew, postDog, setBody, setBreed, setErrors, setHeight, setLifeSpan, setSelectedTemperaments, setTemperamentsToSelect, setUrlImage, setWeight } from '../../../logic/actions';
import Errors from '../Errors';
import Input from '../Input';
import Selected from '../Selected';
import './index.css';

function Form() {
    const validate = (body) => {
        const {name, height, weight, lifeSpan} = body;
        const heights = height.split(' - ');
        const weights = weight.split(' - ');
        
        const errors = {}
        if (!name) {
            errors.name = 'name is required';
        }

        if (!heights[0]) {
            errors.height = 'min height value is required';
        } else if (!heights[1]) {
            errors.height = 'max height value is required';
        } else if (parseInt(heights[0]) > parseInt(heights[1])) {
            errors.height = 'max height value must be greater than min height value';
        }

        if (!weights[0]) {
            errors.weight = 'min weight value is required';
        } else if (!weights[1]) {
            errors.weight = 'max weight value is required';
        } else if (parseInt(weights[0]) > parseInt(weights[1])) {
            errors.weight = 'max weight value must be greater than min weight value';
        }

        if (lifeSpan) {
            const lifeSpans = lifeSpan.split(' ');
            if (!lifeSpans[0]) {
                errors.lifeSpan = 'min lifeSpan value is required if you want to set both min and max values';
            } else if (!lifeSpans[2]) {
                errors.lifeSpan = 'max life span value is required if you want to set both min and max values';
            } else if (parseInt(lifeSpans[0]) > parseInt(lifeSpans[2])) {
                errors.lifeSpan = 'max life span value must be greater than min lifeSpan value';
            }
        }
        if (!Object.keys(errors).length > 0) dispatch(setBody(body));
        return errors
    }
    const temperamentsToSelect = useSelector(state => state.temperamentsToSelect);
    const selectedTemperaments = useSelector(state => state.selectedTemperaments);
    const height = useSelector(state => state.height);
    const weight = useSelector(state => state.weight);
    const lifeSpan = useSelector(state => state.lifeSpan);
    let breed = useSelector(state => state.breed);
    const urlImage = useSelector(state => state.urlImage);
    const errors = useSelector(state => state.errors);
    const body = useSelector(state => state.body);
    // const newDog = useSelector(state => state.new);
    const dispatch = useDispatch();
    const handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        switch (name) {
            case 'temperaments':
                if (value) {
                    selectedTemperaments.push(value);
                    dispatch(setSelectedTemperaments([...selectedTemperaments]));
                }
                break;
        
            case 'name':
                dispatch(setBreed(value));
                breed = value
                break;

            case 'urlImage':
                dispatch(setUrlImage(value));
                break;

            case 'height-1':
                height[0] = value;
                dispatch(setHeight([...height]));
                break;

            case 'height-2':
                height[1] = value;
                dispatch(setHeight([...height]));
                break;
    
            case 'weight-1':
                weight[0] = value;
                dispatch(setWeight([...weight]));
                break;
    
            case 'weight-2':
                weight[1] = value;
                dispatch(setWeight([...weight]));
                break;
    
            case 'lifeSpan-1':
                lifeSpan[0] = value;
                dispatch(setLifeSpan([...lifeSpan]));
                break;

            case 'lifeSpan-2':
                lifeSpan[1] = value;
                dispatch(setLifeSpan([...lifeSpan]));
                break;
    
            default:
                break;
        }
        const body = {
            name: breed,
            height: height.join(' - '),
            weight: weight.join(' - '),
        };
        if (lifeSpan[0] || lifeSpan[1]) body.lifeSpan = lifeSpan.join(' - ') + ' years';
        if (urlImage) body.urlImage = urlImage;
        if (selectedTemperaments.length > 0) body.temperaments = selectedTemperaments;
        dispatch(setErrors(validate(body)));
    }
    const handleClick = () => {
        dispatch(cleanNew());
        dispatch(postDog(body));
        
    }
    return (
        <div className="form">
			<Input type="text" name="name" value={breed} handleInputChange={handleChange}/>
            <Input type="2-selects" name="height" value={height} max={200} units="cm" handleInputChange={handleChange}/>
            <Input type="2-selects" name="weight" value={weight} max={50} units="Kg" handleInputChange={handleChange}/>
            <Input type="2-selects" name="lifeSpan" value={lifeSpan} optional={true} max={20} units="years" handleInputChange={handleChange}/>
            <Input type="text" name="urlImage" value={urlImage} optional={true} handleInputChange={handleChange}/>
            <Input type="multi-select" name="temperaments" optional={true} multiSelectArray={temperamentsToSelect} multiSelectedArray={selectedTemperaments} handleInputChange={handleChange}/>
            {selectedTemperaments.length > 0 && <Selected array={selectedTemperaments} />}
            <div className="requiredMessage">* Required fields</div>
            {(Object.keys(errors).length > 0 && errors.error !== 0) && <Errors errors={Object.values(errors)} />}
            <button disabled={Object.keys(errors).length > 0} onClick={handleClick} >Create</button>
        </div>
    )
}

export default Form;
