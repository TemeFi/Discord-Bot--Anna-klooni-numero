const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '-';
const fs = require('fs');

client.commands = new Discord.Collection();
client.mongoose = require('./mongoose');

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('message', message =>{
if(!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();

if(command === 'ping')
{
    client.commands.get('ping').execute(message, args);
} else if (command === 'hello') {
    client.commands.get('hello').execute(message, args);;
} else if (command === 'ct') {
    client.commands.get('ct').execute(message, args);;
}else if (command === 'lct') {
    client.commands.get('listct').execute(message, client, Discord);;
}else if (command === 'gct') {
    client.commands.get('gct').execute(message, client, Discord);;
}else if (command === 'gcta') {
    client.commands.get('gcta').execute(message, client, Discord);;
}else if (command === 'help') {
    client.commands.get('cthelp').run(message, client, Discord);
}
});

client.mongoose.init();
    
client.login("-----");
