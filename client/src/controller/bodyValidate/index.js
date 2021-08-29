function bodyValidate(body, setBody, dispatch) {
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

export default bodyValidate;