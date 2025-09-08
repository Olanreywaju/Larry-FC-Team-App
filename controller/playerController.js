const playerModel = require('../model/playerModel')

exports.createPlayer = async (req, res) => {
    try {
       const {playerName, number, country, age} = req.body;

       const data = await playerModel.create({playerName, number, country, age })

       res.status(201).json({
        message: 'New player created successfully',
        data: data
       })
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        })
    }
};




exports.getPlayer = async (req, res) => {
    try {
        const id = req.params.id;
        const player = await playerModel.findById(id);
        
        if (!player) {
            return res.status(404).json ('Player not found')
        }
        return res.status(200).json({
            message: 'Player successfully found',
            data: player
        })
    } catch (error) {
        res.status(500).json({
            error: 'Error getting a player'
        })
    }
};