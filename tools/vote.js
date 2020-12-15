// const Discord = require('discord.js')


// module.exports = (client) => {
//     client.on('message', async message => {
//         if (!message.content.startsWith(prefix)) return

//         const args = message.content.substring(prefix.length).split(' ')
//         const command = args[0]

//         if(message.content.startsWith(`${prefix}투표`)) {
//             if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('관리자용 커맨드 입니다')
//             const polls = args.slice(1).join(' ')

//             const regex = polls.match(/"[^"]+"|[\\S]+"[^"]+/g)

//             if(regex.length > 10) {
//                 return message.channel.send('9개까지의 투표만 할 수 있습니다')
//             }

//             let str = ''

//             let emojis = [
//                 '1️⃣',
//                 '2️⃣',
//                 '3️⃣',
//                 '4️⃣',
//                 '5️⃣',
//                 '6️⃣',
//                 '7️⃣',
//                 '8️⃣',
//                 '9️⃣'
//             ]

//             let i = 0

//             for (const poll of regex) {
//                 str = str + `${emojis[i]} ${poll}\n\n`
//                 i++
//             }

//             const embed = new Discord.MessageEmbed()
//             .setDescription(str.replace(/"/g, ''))

//             const msg = await message.channel.send(embed)

//             for (let i = 0; i < regex.length; i++) {
//                 msg.react(emojis[i])
//             }
//             message.delete({timeout: 1});
//         }
//     })
// }