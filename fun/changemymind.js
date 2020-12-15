const canva = require('canvacord');
const Discord = require('discord.js');
const { changemymind } = require('canvacord');

module.exports = {
    name: "cmm",
    description: "Change my mind yourself",


    async run (client, message, args) {

        let text = args.join(" ");

        const noArgs = new Discord.MessageEmbed()
        .setTitle(':x: Missing arguments')
        .setColor(0xFF0000)
        .setDescription('변환할 올바른 영어나 기호를 입력 해주세요')
        .setTimestamp()

        if(!args[0]) return message.channel.send(noArgs);

        let image = await canva.changemymind(text);

        let changeMyMind = new Discord.MessageAttachment(image, "cmm.png")

        message.channel.send(changeMyMind);
    }
}