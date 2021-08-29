function bodyConstructor(actions, dispatch, target, bodyInputs) {
    const { setBreed, setHeight, setLifeSpan, setSelectedTemperaments, setUrlImage, setWeight } = actions;
    const { height, weight, lifeSpan, urlImage, selectedTemperaments } = bodyInputs;
    let breed = bodyInputs.breed;
    const name = target.name;
    const value = target.value;
    switch (name) {
        case 'selectedTemperaments':
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
    return body;
}

export default bodyConstructor;