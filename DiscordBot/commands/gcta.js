const getSing = require ('../getSingleAllCT.js')

module.exports = {
    name: 'gcta',
    description: "Get all CT's of single character",
    execute: async (message, client, Discord) => {
        
        const target =  message.mentions.users.first() ||  message.author
        const targetId = target.id

        const cT = await getSing.getCTSingleAll(targetId);

        let text = '';

        for (let counter = 0; counter < cT.length; ++counter) {
            
            if (counter == (cT.length-1)) {
                text += '-> ' + cT[counter].ctNumber + "\n";
            } else {
                text += cT[counter].ctNumber + "\n";
            }
        }

        const embed = new Discord.MessageEmbed()
        .setColor('#9DB574')
        .setTitle(cT[0].playerName + "'s Clones")
        .setDescription(text)
        .setThumbnail('https://i.imgur.com/JDqpBW9.jpg')

        message.channel.send(embed);

    }
}