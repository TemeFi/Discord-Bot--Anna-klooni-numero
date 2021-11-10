const { finished } = require('stream');
const mongoose = require('mongoose');
const Guild = require('../models/guild');
const double = require ('../checkDouble')


module.exports = {
    name: 'ct',
    description: "Creates a clone number",
    execute: async (message, args) => {

        const mention = message.member.id;
        const targetNick = message.member.displayName;
        const target = message.author.username;
        const guild = message.guild.id;


        //if (mention) console.log(mention);
        var number = 'CT-' + Math.floor(Math.random() * 100) + '-' + Math.floor(Math.random() * 10000);

        number = await double.checkDouble(guild, number);


       if (!message.member.roles.cache.has('798241826355544104')) {
        message.member.setNickname(target + ' (' + number +')');
    }

       if (message.member.roles.cache.has('798974419648118825')){

            const newguild = new Guild ({
                _id: mongoose.Types.ObjectId(),
                guildId: guild,
                playerId: mention,
                playerNick: targetNick,
                playerName: target,
                ctNumber: number, 
                timeStamp: new Date()
            });
            newguild.save()
            .then(result => console.log(result))
            .catch (err => console.error(err));
            console.log ('Clone Saved!');

            message.channel.send('Number: '+ number);
        } else {
            message.channel.send('Could not find a "Clone" role');
    
        }           
    }
}