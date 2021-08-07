const { axios } = require('common');

async function fillTemperaments() {
    const dogs = await axios.get('https://api.thedogapi.com/v1/breeds');
    console.log(dogs);
}

module.exports = fillTemperaments;