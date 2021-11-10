const guildModel = require ('./models/guild');
    
module.exports.getCTSingleAll = async (playerId) => {

    const all = await guildModel.find({
        playerId
    })
    .sort({
        timeStamp: +1
    })

    return all;
}