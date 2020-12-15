const Discord = require('discord.js');

module.exports = {
    name: "밴",
    description: "Kicks a member from the server",

    async run (client, message, args) {

        const permission = new Discord.MessageEmbed()
        .setTitle(':x: Missing arguments')
        .setColor(0xFF0000)
        .setDescription('관리자용 커맨드 입니다')
        .setTimestamp()

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(permission)
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(permission)

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        const noArgs = new Discord.MessageEmbed()
        .setTitle(':x: Missing arguments')
        .setColor(0xFF0000)
        .setDescription('명령어 뒤에 해당 커맨드를 실행할 유저를 맨션 해주세요')
        .setTimestamp()

        if(!args[0]) return message.channel.send(noArgs);

        if(!member) return message.channel.send('유저를 찾을 수 없습니다');
        if(!member.bannable) return message.channel.send('이 유저는 밴할 수 없습니다');

        if(member.id === message.author.id) return message.channel.send('밴 실패');

        let reason = args.slice(1).join(" ");

        if(reason === undefined) reason = '사유 없음';

        member.ban(reason)
        .catch(err => {
            if(err) return message.channel.send('**오류 발생**')
        })

        const banembed = new Discord.MessageEmbed()
        .setTitle('밴 목록')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('User Banned', member)
        .addField('밴한 사람', message.author)
        .addField('이유', reason)
        .setFooter('밴당한 시간', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(banembed);


    }
}