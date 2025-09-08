const { createPlayer, getPlayer } = require('../controller/playerController');

const router = require('express').Router();

router.post('/player', createPlayer);

router.get('/player/:id', getPlayer);


module.exports = router