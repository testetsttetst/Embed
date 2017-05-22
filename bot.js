const Discord = require("discord.js");
const client = new Discord.Client();
const CONFIG = require('./config.json')
const PREFIX = CONFIG.prefix;

var moment = require('moment');
moment().format();

var now = moment();

client.on('ready', () => {
  console.log(`I am a ${client.user.username} faggot!`);
});

client.on('message', message => {
  if (!message.content.startsWith(PREFIX)) return;

  var args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0].toLowerCase()) {
    case "me":
    let game;
      if (message.author.presence.game == null) {
        game = "Not currently playing"
      } else {
        game = message.author.presence.game.name
      }
    var joinedAt = moment(message.author.createdAt);
    var joinedAtDate = joinedAt.format('llll')
    var joinedServerAt = moment(message.member.joinedAt);
    var joinedServerAtDate = joinedServerAt.format('llll')
    var embed = new Discord.RichEmbed()
      .addField("Name", message.member, true)
      .addField("ID", message.author.id, true)
      .addField("Discord Join Date", joinedAtDate)
      .addField("Server Join Date", joinedServerAtDate)
      .addField("Status", message.author.presence.status, true)
      .addField("Playing", game, true)
      .setColor(0x00FFFF)
      .setThumbnail(message.author.avatarURL)
      message.channel.sendEmbed(embed);
      break;

    case "uptime":
      var embed = new Discord.RichEmbed()
        .setTitle(":hourglass: Uptime: " + client.uptime / 1000 + "Sec")
        .setColor('c91a54')
        message.channel.sendEmbed(embed);
      break;

}});

client.login(CONFIG.token);
