const Discord = require("discord.js");
const client = new Discord.Client();
const YTDL = require("ytdl-core");
const CONFIG = require('./config.json')
const PREFIX = CONFIG.prefix;

client.on('ready', () => {
  console.log(`I am a ${client.user.username} faggot!`);
});


client.login(CONFIG.token);
