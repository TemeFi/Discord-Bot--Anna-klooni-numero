const guildModel = require ('./models/guild');
    
module.exports.getCTSingle = async (playerId) => {

    const all = await guildModel.findOne({
        playerId
    })
    .sort({
        timeStamp: -1
    })

    return all;
}