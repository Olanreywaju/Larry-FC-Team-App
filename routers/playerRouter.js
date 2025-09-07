const { createPlayer, getPlayer } = require('../controller/playerController');

const router = require('express').Router();

router.post('/create', createPlayer);

router.get('/player', getPlayer);


module.exports = router