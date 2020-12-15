const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name: "밈",
    description: "Gives you a meme",
    async run (client, message, args){
        const subReddits = ["dankmeme", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random);

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`심심할때 보는 밈 r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)

        message.channel.send(embed);
    }
}