const db = require('quick.db');
const warnings = require('./warnings');

module.exports = {
    name: "경고삭제",
    description: "Delete a member's warns",


    async run (client, message, args){

        const permission = new Discord.MessageEmbed()
        .setTitle('Missing arguments')
        .setColor(0xFF0000)
        .setDescription('관리자용 커맨드 입니다')
        .setTimestamp()

        if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send(permission);

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

        if(!user) return message.channel.send('대상을 지정 해주세요');

        if(user.bot) return message.channel.send('봇은 삭제할 수 없습니다');

        if(user.id === message.author.id) return message.channel.send('자기 자신은 없앨 수 없습니다');

        if(warnings === null) return message.channel.send(`**${user.username} 은 경고가 없습니다**`);


        db.delete(`warnings_${message.guild.id}_${user.id}`);

        message.channel.send(`${user.username}의 경고를 지웠습니다`)
    }
}