const { axios } = require('common');
const { Router } = require('express');
const { dogToSend } = require('../../utils')

const router = Router();

router.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.thedogapi.com/v1/breeds');
        const dogs = response.data;
        const dogsToSend = [];
        const { name } = req.query;
        if (name) {
            for (const dog of dogs) {
                if (dog.name.includes(name)) {
                    dogsToSend.push(dogToSend(dog));
                }
            }
        } else {
            for (const dog of dogs) {
                dogsToSend.push(dogToSend(dog));
            }
        }
        res.json(dogsToSend);
    } catch (error) {
        return console.log('Error: ', error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const response = await axios.get('https://api.thedogapi.com/v1/breeds');
        const dogs = response.data;
        const { id } = req.params;
        const dog = dogs.filter(dog => {
            return dog.id == id;
        });
        return dog.length > 0 ? res.json(dogToSend(dog[0])) : 
            res.status(404).json({error: "There isn't any dog with the indicated id"});
    } catch (error) {
        return console.log('Error: ', error);
    }
});

module.exports = router;