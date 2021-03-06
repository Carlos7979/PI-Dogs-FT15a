module.exports = function dogToSendFromApi(dog) {
    return {
        id: dog.id,
        name: dog.name,
        height: dog.height.metric,
        weight: dog.weight.metric,
        lifeSpan: dog.life_span,
        urlImage: dog.image.url,
        temperament: dog.temperament
    }
}