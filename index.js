//
//
//

//REQUIRE section
    const allkeys = require("./keys.json");
    const url = require("./url.json");
    const Discord = require("discord.js");
    const WebSocket = require("ws");
    //const RiEm = require("./richembed.js");
    var request = require('request');

//GLOBAL section

const drobot = new Discord.Client();
const adrobot = new Discord.RichEmbed();
const ws = new WebSocket(url.wzkb);
var evestvar = "";
var stvar = "";
var mesColor = "#00ffaa";
var mesTitle = "TITLE";
var mesAuthor = "AUTHOR";

//== RichEmbed Blocks
const botsay = new Discord.RichEmbed()
const botsay2 = new Discord.RichEmbed()
//==
drobot.login(allkeys.bkey);

/*request(url.esil+'status/?datasource=tranquility', function(e, r, data) {
    result =  JSON.parse(data);
    evestvar = (result.players);
    console.log(JSON.parse(data));
}); */

function setStatus(stvar) {
    console.log(stvar);
}

function parseBotCommand(text) {
    const [command, ...params] = text.replace(/\s+/g, ' ').trim().split(' ');
    //console.log(command);
    //console.log(params);
    if (params[0] == undefined){params[0] = "no params"};
    return  (command[0] === '!'  ? [command, params] : null);
}

ws.onopen = () => setStatus("ONLINE");
ws.onclose = () => setStatus("DISCONNECTED");

//BOT section (code)
drobot.on("message",(message)=>{

    var botCommand = parseBotCommand(message.content);
if(!botCommand) {
  return;
} else {
  var [command, params] = botCommand;
}
console.log(botCommand);
    if(message.content == "!tort"){
        var u2er =  message.author.username;
        var u2ername =  message.author.tag;
        var u2ersub = message.author.discriminator;
        console.log('u2er ' + u2er);
        console.log('u2ername ' + u2ername);
        console.log('u2ersub ' + u2ersub);
        var u5er = message.member.displayName;
        message.reply(message.content + " is cool." + stvar);
        message.channel.send(u5er + " сказал ");
        message.channel.send(botsay);
        message.channel.send(message.member + " сказал ");
    }
    if(message.content == "!zkb"){
        message.reply(" WebSocket zkillboard ");
    
    }
    if(botCommand[0] === "!ric"){
        var u5er = message.member.displayName;
        botsay.setColor("GREY");
        botsay.setAuthor(u5er + " says:");
        botsay.addField("This command: ", botCommand[0]);
        botsay.addField("Command's parametr: ", botCommand[1]);
        botsay.setTimestamp();
        message.channel.send(botsay);
    
    }
    if(botCommand[0] === "!stat"){
        request(url.esil+'status/?datasource=tranquility', function(e, r, data) {
            result =  JSON.parse(data);
            evestvar = (result.players);
            console.log(JSON.parse(data));
        });
       // botsay.setAuthor("TQ online:");
       // botsay.setColor("BLUE");
       // botsay.addField(":busts_in_silhouette: ","pilots: " + evestvar);
        message.channel.send(botsay2 .setColor("BLUE") .setAuthor("TQ online:") .addField(":busts_in_silhouette: ","pilots: " + evestvar) .setTimestamp());
        //message.reply(" EVE: "+ evestvar+" :busts_in_silhouette:");
        //mesAuthor = "EVE Online status";
        //mesTitle = ":busts_in_silhouette: :"+evestvar;
        //message.channel.send(botsay .setAuthor(mesAuthor) .setTitle(mesTitle) .setTimestamp());

    }
    if(message.content == "!test"){
        //message.reply(" EV "+ adrobot.addField("Footer", "Body",true)+" :bust_in_silhouette:");
        message.reply(" EV "+ adrobot.addBlankField(true)+" :bust_in_silhouette:");
        
    }

});