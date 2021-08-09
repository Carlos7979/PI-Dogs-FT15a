const { axios } = require('common');
const { Router } = require('express');
const { dogToSendFromApi, dogToSendFromDB, temperamentToSend, middleware: { bodyValidator } } = require('../../utils');
const { Dog, Temperament } = require('../db');

const router = Router();

router.post('/', bodyValidator, async (req, res) => {
    try {
        const { name, height, weight, lifeSpan, urlImage, temperaments } = req.body;
        const dog = await Dog.create({
            name, height, weight, lifeSpan, urlImage
        });
        if (temperaments) {
            const temperamentsId = [];
            for (const temperament of temperaments) {
                await Temperament.findOrCreate({
                    where: {
                        name: temperament
                    }
                });
            }
            const temperamentsInDB = await Temperament.findAll({
                where: {
                    name: temperaments
                }
            });
            for (const temperament of temperamentsInDB) {
                temperamentsId.push(temperament.dataValues.id);
            }

            await dog.setTemperaments(temperamentsId);
            const response = await Dog.findByPk(dog.dataValues.id, {
                include: Temperament
            });
            return res.status(200).json(dogToSendFromDB(response.dataValues));
        }

        if (!dog) return res.status(404).json({error: 'Dog is not created'});
        res.status(200).json(dogToSendFromDB(dog));
    } catch (error) {
        res.status(404).json({error});
        return console.log('Error: ', error);
    }
})

router.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.thedogapi.com/v1/breeds');
        const dogs = response.data;
        const localDbDogs = await Dog.findAll({
            include: Temperament
        });
        const dogsToSend = [];
        const { name } = req.query;
        if (name) {
            for (const dog of dogs) {
                if (dog.name.includes(name)) {
                    dogsToSend.push(dogToSendFromApi(dog));
                }
            }
            if (localDbDogs) {
                for (const dog of localDbDogs) {
                    if (dog.dataValues.name.includes(name)) {
                        dogsToSend.push(dogToSendFromDB(dog.dataValues));
                    }
                }
            }
            return res.json(dogsToSend);
        }
        for (const dog of dogs) {
            dogsToSend.push(dogToSendFromApi(dog));
        }
        if (localDbDogs) {
            for (const dog of localDbDogs) {
                dogsToSend.push(dogToSendFromDB(dog.dataValues));
            }
            return res.json(dogsToSend);
        }
        res.json(dogsToSend);
    } catch (error) {
        res.status(404).json({error});
        return console.log('Error: ', error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!Number.isNaN(id)) {
            const response = await Dog.findByPk(id, {
                include: Temperament
            });
            if (response) return res.json(dogToSendFromDB(response.dataValues));
        }
        const response = await axios.get('https://api.thedogapi.com/v1/breeds');
        const dogs = response.data;
        const dog = dogs.filter(dog => {
            return dog.id == id;
        });
        return dog.length > 0 ? res.json(dogToSendFromApi(dog[0])) : 
            res.status(404).json({error: "There isn't any dog with the indicated id"});
    } catch (error) {
        res.status(404).json({error});
        return console.log('Error: ', error);
    }
});

module.exports = router;