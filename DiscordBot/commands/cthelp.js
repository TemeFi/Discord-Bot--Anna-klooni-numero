module.exports = {
    name: 'cthelp',
    description: "Get commands",
    run: async (message, client, Discord) => {

        console.log ('HELP');

        const embed = new Discord.MessageEmbed()
        .setColor('#9DB574')
        .setTitle('Bot Commands')
        .setDescription("List of bot's commands")
        .addField ('-ct',  'Get and set current Clone Trooper Number')
        .addField('-gct/-gct@',"Get a player's current CT number, @mention the player you wish to know the number of (default: own)")
        .addField('-gcta/-gcta@', "Get all of a player's CT numbers, @mention the player you wish to know the numbers of (default: own)" )
        .addField('-listct','Get list of every single CT' )
        .addField('-hello', ':)')
        .setThumbnail('https://i.imgur.com/QhFzPhf.png')

        message.reply(embed)
    }
}