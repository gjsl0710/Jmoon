const Discord = require('discord.js');

module.exports = {
    name: "죽어",
    description: "ToT",
    usage: "",
    alises: ['자살'],

    async run (client, message, args) {
        const jasal = new Discord.MessageEmbed()
        .setTitle('자살예방상담전화 1393')
        .setColor(0xFF0000)
        .addField('정신건강삼당전화', '1577-0199')
        .addField('중앙자살예방센터', 'http://www.spckorea.or.kr/')

        message.channel.send(jasal)
    }

}