const Discord = require("discord.js");

var mesColor = "#00ffaa";
var mesTitle = "TITLE";
var mesAuthor = "AUTHOR";
//const myapp = require("./index.js");
//== RichEmbed Blocks

const botsay = new Discord.RichEmbed()
    .setColor(mesColor)
    .setTitle(mesTitle)
    .setURL()
    .setAuthor(mesAuthor)
    .setDescription('Some description here')
    .setThumbnail('https://i.imgur.com/wSTFkRM.png')
    .addField('Regular field title', 'Some value here')
    .addBlankField()
    .addField('Inline field title 1', 'Some value here', true)
    .addField('Inline field title 2', 'Some value here 2', true)
    .setImage('https://i.imgur.com/wSTFkRM.png')
    .setTimestamp()
    .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

    //==