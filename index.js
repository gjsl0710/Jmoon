const Discord = require('discord.js');
const client = new Discord.Client();
const { token, prefix } = require('./config.json')
const { readdirSync } = require('fs');
const { join } = require('path');
client.commands= new Discord.Collection();
require('dotenv').config();

const sleep = (ms) => {return new Promise(resolve=>{setTimeout(resolve,ms)})}
client.on('ready', async() => {  
    console.log('모든커멘드파일이 정상적으로 로딩되었습니다.')
    console.log('봇이 정상적으로 Online. 되었습니다.') 
    console.log(`${client.user.username} 준비완료.`);
    while(1) {
      client.user.setActivity(`6387명의 사용자와 함께`)
      await sleep(4000)
      client.user.setActivity(`${client.guilds.cache.size}개의 서버안에서`)
      await sleep(4000)
      client.user.setActivity(`자살아 도와줘`)
      await sleep(4000)
      client.user.setActivity(`Run with 6387 People`)
      await sleep(4000)
      client.user.setActivity(`Run with ${client.guilds.cache.size} Server`)
      await sleep(4000)
    } 
  })

const toolFiles = readdirSync(join(__dirname, "tools")).filter(file => file.endsWith(".js"));

for (const file of toolFiles) {
    const command = require(join(__dirname, "tools", `${file}`));
    client.commands.set(command.name, command);
    let commandName = file.split(".")[0];
    console.log('도구 커멘드파일 불러오는중.. 커멘드네임 : '+commandName)
}

const funFiles = readdirSync(join(__dirname, "fun")).filter(file => file.endsWith(".js"));

for (const file of funFiles) {
    const command = require(join(__dirname, "fun", `${file}`));
    client.commands.set(command.name, command);
    let commandName = file.split(".")[0];
    console.log('재미 커멘드파일 불러오는중.. 커멘드네임 : '+commandName)
}

const manageFiles = readdirSync(join(__dirname, "manage")).filter(file => file.endsWith(".js"));

for (const file of manageFiles) {
    const command = require(join(__dirname, "manage", `${file}`));
    client.commands.set(command.name, command);
    let commandName = file.split(".")[0];
    console.log('관리도구 커멘드 불러오는중.. 커멘드네임 : '+commandName)
}

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return;


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})

client.login(token);
