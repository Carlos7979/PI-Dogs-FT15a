const { axios } = require('common');
const { Temperament } = require('../src/db');

async function fillTemperaments() {
    try {
        const response = await axios.get('https://api.thedogapi.com/v1/breeds');
        const dogs = response.data;
        for (const dog of dogs) {
            if (dog.temperament) {
                const temperaments = dog.temperament.split(', ').map(temperament => temperament.toLowerCase());
                if (temperaments.length > 0) {
                    for (const temperament of temperaments) {
                        await Temperament.findOrCreate({
                            where: {
                                name: temperament
                            }
                        });
                    }
                }
            }
        }
    } catch (error) {
        return console.log('Error: ', error);
    }
}

module.exports = fillTemperaments;