function bodyValidator(req, res, next) {
    const { name, height, weight, lifeSpan, urlImage, temperaments } = req.body;
    if (typeof name !== 'string' || typeof height !== 'string' || typeof weight !== 'string') {
        throw new Error ('name, height and weight are required and must be strings');
    }
    if(lifeSpan && typeof lifeSpan !== 'string') {
        throw new Error ('lifeSpan must be string');
    }
    if(urlImage && typeof urlImage !== 'string') {
        throw new Error ('urlImage must be string');
    }
    if(req.body.hasOwnProperty('temperaments') && !Array.isArray(temperaments)) {
        throw new Error ('temperaments must be an array');
    }
    next();
}

module.exports = {
    bodyValidator
}