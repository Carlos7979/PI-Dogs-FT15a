module.exports = function dogToSendFromDB(dog) {
    if (dog.temperaments) {
        const temperaments = dog.temperaments;
        const temperamentStrings = [];
        for (const temperament of temperaments) {
            temperamentStrings.push(temperament.name);
        }
        dog.temperament = temperamentStrings.join(', ');
    }
    const response = {
        id: dog.id,
        name: dog.name,
        height: dog.height,
        weight: dog.weight
    }
    if(dog.lifeSpan) response.lifeSpan = dog.lifeSpan;
    if(dog.urlImage) response.urlImage = dog.urlImage;
    if(dog.temperament) response.temperament = dog.temperament;
    return response;
}