const Discord = require('discord.js');
const config = require('./config.json);
const superagent = require('superagent);
const client = new Discord.Client({disableEveryone: true});

client.on('ready', () => {
console.log(`${client.user.tag} is now online!`)
client.user.setActivity("Ivan's Community", {type: "WATCHING"})
});

