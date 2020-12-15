const Discord = require('discord.js');

module.exports = {
    name: "인증",
    description: "verify user",
    
    async run (client, message, args) {
        await message.member.roles.add("753109035292557312");
        await message.member.roles.remove("759580049703305226");

        message.author.send('인증에 성공 하셨습니다!')
    }
}