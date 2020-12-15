const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
const {prefix} = require('../config.json')
module.exports = {
    name: "도와줘",
    description: "The help command, what do you expect?",
    usage: "",
    aliases: ["help", "도움말", "명령어"],

    async run (client, message, args){

        const page1 = new Discord.MessageEmbed()
        .setTitle('PAGE 1')
        .addField(`${prefix}킥`, '서버에서 유저를 추방 합니다')
        .addField(`${prefix}밴`, '서버에서 유저를 차단 합니다')
        .addField(`${prefix}청소`, '메시지를 삭제합니다')
        .addField(`${prefix}날씨`, '해당 지역의 날씨를 알려줍니다')
        .setColor('#FFFF')
        .setTimestamp()

        const page2 = new Discord.MessageEmbed()
        .setTitle('PAGE 2')
        .addField(`${prefix}밈`, '랜덤 밈을 보냅니다')
        .addField(`${prefix}글자`, '영어를 문자로 출력합니다')
        .addField(`${prefix}초대`, 'https://discord.com/api/oauth2/authorize?client_id=755265826310979625&permissions=8&scope=bot')
        .setColor('#FFFF')
        .setTimestamp()

        const page3 = new Discord.MessageEmbed()
        .setTitle('PAGE 3')
        .addField(`${prefix}핑`, '서버와의 핑을 출력합니다')
        .addField(`${prefix}계산`, '봇이 대신 계산 해줍니다')
        .addField(`${prefix}코로나`, '해당 지역의 코로나 상황을 알려줍니다')
        .addField(`${prefix}cmm`, 'Change my MIND')
        .setColor('#FFFF')
        .setTimestamp()

        const page4 = new Discord.MessageEmbed()
        .setTitle('PAGE 4')
        .addField(`${prefix}경고`, '유저에게 경고를 줍니다')
        .addField(`${prefix}경고목록`, '유저의 경고 목록을 보여줍니다')
        .addField(`${prefix}경고삭제`, '유저의 경고를 삭제합니다')
        .setColor('#FFFF')
        .setTimestamp()

        const page5 = new Discord.MessageEmbed()
        .setTitle('PAGE 5')
        .addField(`${prefix}프사`, '해당 유저의 프로필 사진을 따옵니다')
        .addField( `${prefix}서버`, '해당 서버의 정보를 불러옵니다')
        .addField(`${prefix}타이머`, '해당 초가 지나면 DM으로 테러를 합니다')
        .addField(`${prefix}코드실행`, '이 코드는 봇제작자인 ! MOON#6974 이/만 사용할 수 있습니다')
        .setColor('#FFFF')
        .setTimestamp()

        const page6 = new Discord.MessageEmbed()
        .setTitle('PAGE 6')
        .addField(`${prefix}투표 " "`, '디스코드 이모지를 이용하여 투표를 엽니다')
        .setColor('#FFFF')
        .setTimestamp()

        const pages = [
                page1,
                page2,
                page3,
                page4,
                page5,
                page6
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '240000';

        pagination(message, pages, emojiList, timeout)
    }
}