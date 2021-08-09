const { Router } = require('express');
const { Temperament } = require('../db');
const { temperamentToSend } = require('../../utils')

const router = Router();

router.get('/', async (req, res) => {
    try {
        const temperaments = await Temperament.findAll();
        const temperamentsToSend = [];
        for (const temperament of temperaments) {
            temperamentsToSend.push(temperamentToSend(temperament));
        }
        res.json(temperamentsToSend);
    } catch (error) {
        return console.log('Error: ', error);
    }
});

module.exports = router;