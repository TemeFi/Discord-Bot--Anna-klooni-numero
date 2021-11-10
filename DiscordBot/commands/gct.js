const getSing = require ('../getSingleCT.js')

module.exports = {
    name: 'gct',
    description: "Get CT of single character",
    execute: async (message, client, Discord) => {
        
        const target =  message.mentions.users.first() ||  message.author
        const targetId = target.id

        const cT = await getSing.getCTSingle(targetId);

        let text = '';
        text += cT.ctNumber;

        const embed = new Discord.MessageEmbed()
        .setColor('#9DB574')
        .setTitle(cT.playerName + "'s current Clone")
        .setDescription(text)
        .setThumbnail('https://i.imgur.com/JDqpBW9.jpg')

        message.channel.send(embed);

    }
}