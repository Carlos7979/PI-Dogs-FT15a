import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bodyValidate, bodyConstructor, filterDogs } from '../../../controller';
import { cleanCreate, cleanNew, createDog, setBody, setBreed, setDog, setErrors, setHeight, setLifeSpan, setSelectedTemperaments, setUrlImage, setWeight, updateDogs, updateFiltered } from '../../../logic/actions';
import Errors from '../Errors';
import InputMultiSelect from '../InputMultiSelect';
import InputSelectRange from '../InputSelectRange';
import InputText from '../InputText';
import Selected from '../Selected';
import './index.css';

function Form() {
    const temperamentsToSelect = useSelector(state => state.temperamentsToSelect);
    const selectedTemperaments = useSelector(state => state.selectedTemperaments);
    const height = useSelector(state => state.height);
    const weight = useSelector(state => state.weight);
    const lifeSpan = useSelector(state => state.lifeSpan);
    let breed = useSelector(state => state.breed);
    const urlImage = useSelector(state => state.urlImage);
    const errors = useSelector(state => state.errors);
    const body = useSelector(state => state.body);
    const newDog = useSelector(state => state.new);
    const dispatch = useDispatch();
    const history = useHistory();
    const dogs = useSelector(state => state.dogs);
    const order = useSelector(state => state.order);
    const filtered = useSelector(state => state.filtered);
    const filter = useSelector(state => state.filter);

    useEffect(() => {
        if (newDog.id) {
            dispatch(setDog(newDog.id));
            dispatch(updateDogs(dogs, newDog, order));
            if(filtered.length > 0) {
                filterDogs(dispatch, undefined, undefined, dogs, filter, true, updateFiltered);
            }
            dispatch(cleanNew());
            history.push(`/detail`);
        }
    }, [newDog]);

    const handleChange = event => {
        const target = event.target;
        const actions = { setBreed, setHeight, setLifeSpan, setSelectedTemperaments, setUrlImage, setWeight };
        const bodyInputs = { breed, height, weight, lifeSpan, urlImage, selectedTemperaments }
        const body = bodyConstructor(actions, dispatch, target, bodyInputs);
        dispatch(setErrors(bodyValidate(body, setBody, dispatch)));
    }
    const handleClickCreate = () => {
        dispatch(cleanNew());
        dispatch(createDog(body));
    }
    const handleClickClear = () => {
        dispatch(cleanCreate());
    }

    const handleClickClearTemperament = event => {
        const target = event.target;
        const index = target.id.split('-')[1];
        handleChange({target: {name: "removeTemperament", value: index}});
    }

    const handleClickClearTemperaments = () => {
        handleChange({target: {name: "removeTemperaments"}});
    }

    return (
        <div className="form">
			<InputText error={errors.name && 'warning'} type="text" name="name" value={breed} handleInputChange={handleChange}/>
            <InputSelectRange error={errors.height && 'warning'} name="height" value={height} max={200} units="cm" handleInputChange={handleChange}/>
            <InputSelectRange error={errors.weight && 'warning'} name="weight" value={weight} max={50} units="Kg" handleInputChange={handleChange}/>
            <InputSelectRange error={errors.lifeSpan && 'warning'} name="lifeSpan" value={lifeSpan} optional={true} max={20} units="years" handleInputChange={handleChange}/>
            <InputText type="text" name="urlImage" nameToShow="Url image" value={urlImage} optional={true} handleInputChange={handleChange}/>
            <InputMultiSelect name="selectedTemperaments" nameToShow="Temperaments" optional={true} multiSelectArray={temperamentsToSelect} multiSelectedArray={selectedTemperaments} handleInputChange={handleChange}/>
            {selectedTemperaments.length > 0 && <Selected array={selectedTemperaments} onClickClearTemperament={handleClickClearTemperament} multiSelectedArray={selectedTemperaments} onClickClearTemperaments={handleClickClearTemperaments}/>}
            <div className="requiredMessage">* Required fields</div>
            {(Object.keys(errors).length > 0 && errors.error !== 0) && <Errors errors={Object.values(errors)} />}
            <button disabled={Object.keys(errors).length > 0} onClick={handleClickCreate}>Create</button>
            <button onClick={handleClickClear} >Clear fields</button>
        </div>
    )
}

export default Form;
