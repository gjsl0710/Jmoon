const Discord = require('discord.js');
const sleep = (ms) => {return new Promise(resolve=>{setTimeout(resolve,ms)})}

module.exports ={
    name: "타이머",
    description: "eval comands",

    async run (client, message, args) {

        const noArgs = new Discord.MessageEmbed()
        .setTitle(':x: Missing arguments')
        .setColor(0xFF0000)
        .setDescription('초를 입력 해주세요')
        .setTimestamp()

        if(!args[0]) return message.channel.send(noArgs);
        
        const timer = message.content.split(/자살아 타이머/)
        const embed = new Discord.MessageEmbed()
        .setTitle(`타이머를 가동합니다`)
        .setDescription(`타이머 시간 : **${timer[1]}**초 `)
        .setFooter(`${message.author.username}`, message.author.displayAvatarURL())
        .setColor('#ffffff')
        message.channel.send(embed)
        await sleep(`${timer[1]*1000}`)
        message.channel.send(`<@${message.author.id}>, ${timer}초의 타이머가 종료 되었습니다`)
        message.author.send(`<@${message.author.id}>타이머가 종료 되었습니다!`)
        await sleep('1000')
        message.author.send(`<@${message.author.id}>타이머가 종료 되었습니다!`)
        await sleep('1000')
        message.author.send(`<@${message.author.id}>타이머가 종료 되었습니다!`)
        await sleep('1000')
        message.author.send(`<@${message.author.id}>타이머가 종료 되었습니다!`)
        await sleep('1000')
        message.author.send(`<@${message.author.id}>타이머가 종료 되었습니다!`)
        await sleep('1000')
        message.author.send(`<@${message.author.id}>타이머가 종료 되었습니다!`)
        await sleep('1000')
    }
}