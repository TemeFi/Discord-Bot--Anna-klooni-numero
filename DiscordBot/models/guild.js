const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildId: String,
    playerId: String,
    playerNick: String,
    playerName: String,
    ctNumber: String,
    timeStamp: Date
});

module.exports = mongoose.model('Guild', guildSchema);