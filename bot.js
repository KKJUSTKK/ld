const Discord = require("discord.js"); // We Call The Packages.
// const PREFIX = "<"; // You can change this Prefix to whatever you want.
const PREFIX = process.env.PREFIX;

var bot = new Discord.Client();



// Events.
bot.on("ready", function() {
    bot.user.setActivity(`still on testing`);
    console.log(`${bot.user.username} is Ready!`);
});

// Bot Login.
// bot.login('YourAwesomeBotToken');
bot.login(process.env.BOT_TOKEN);
