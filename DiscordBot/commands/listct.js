const { DiscordAPIError } = require('discord.js');
const cloneList = require ('../cloneList')


module.exports = {
    name: 'listct',
    description: "Get all CT's",
    
    execute: async (message, client, Discord) => {
        
        let guild = client.guilds.cache.get(message.guild.id);

        const target =  /*guild.member(message.mentions.users.first()) ||*/  guild.member(message.author)
        const targetId = target.id
        //const user = target.displayName
        const guildId = message.guild.id


        const cT = await cloneList.getClone(guildId);
        
        //console.log(cT);

        const embed = new Discord.MessageEmbed()
        .setColor('#9DB574')
        .setTitle('Clone Database')
        .setDescription(cT)
        .setThumbnail('https://i.imgur.com/EHsL7mx.jpg')

        message.channel.send(embed);

        //console.log(`This is ${cT}`)
        //message.reply(`This user is ${user}`)
        //message.reply(cT)

    }
}