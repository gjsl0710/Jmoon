module.exports = {
    name: "초대",
    description: "초대 코드",

    async run (client, message, args) {

    message.channel.send(`https://discord.com/api/oauth2/authorize?client_id=755265826310979625&permissions=8&scope=bot`)

    }
}