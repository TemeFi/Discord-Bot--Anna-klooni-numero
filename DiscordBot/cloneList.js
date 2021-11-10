const guildModel = require ('./models/guild');

module.exports.getClone = async (guildId) => {

    console.log('Running findOne()')

    const result = await guildModel.findOne({
        guildId
    })
    .sort({
        playerName: -1
    })

    //console.log('RESULT: ', all)
    let cT = '';
    let text ='';
    //const reasons = all.map(all => all.Reason);
            
    /*if(result) {
        cT = result.ctNumber
    }*/

    const all = await guildModel.find({
        guildId
    }).sort({
        playerName: -1
    })

    for (let counter = 0; counter < all.length; ++counter) {
        text += all[counter].playerName + "'s Clone: " + all[counter].ctNumber + "\n";
        //console.log(all[counter].playerNick)
    }

    //console.log(text)
    return text;
}
