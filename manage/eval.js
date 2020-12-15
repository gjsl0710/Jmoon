const Discord = require('discord.js');

module.exports ={
    name: "코드실행",
    description: "eval comands",

    async run (client, message, args) {
        if (message.author.id === '715723109180637184') {
            evalcommand = message.content.substring(9)
            eval(evalcommand)
          }
    }
}