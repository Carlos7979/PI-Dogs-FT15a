module.exports = function temperamentToSend(temperament) {
    return {
        id: temperament.id,
        temperament: temperament.name
    }
}