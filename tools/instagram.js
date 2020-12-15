const Discord = require("discord.js");
const { stripIndents } = require("common-tags");

const fetch = require("node-fetch");

module.exports = {
    name: "인스타",
    description: "Find out some nice instagram statistics",

    async run (client, message, args)  {
        const name = args.join(" ");

        if (!name) {
            return message.reply("유저 이름을 입력 해주세요!")
                .then(m => m.delete(5000));
        }

        const url = `https://instagram.com/${name}/?__a=1`;
        
        let res; 

        try {
            res = await fetch(url).then(url => url.json());
        } catch (e) {
            return message.reply("계정을 찾을 수 없어요.. :(")
                .then(m => m.delete(5000));
        }

        const account = res.graphql.user;

        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(account.full_name)
            .setURL(`https://instagram.com/${name}`)
            .setThumbnail(account.profile_pic_url_hd)
            .addField("프로필 정보", stripIndents`**유저 이름:** ${account.username}
            **전체 이름:** ${account.full_name}
            **정보:** ${account.biography.length == 0 ? "none" : account.biography}
            **포스트:** ${account.edge_owner_to_timeline_media.count}
            **팔로워:** ${account.edge_followed_by.count}
            **팔로잉:** ${account.edge_follow.count}
            **계정 상태:** ${account.is_private ? "활성화 🔐" : "비활성화 🔓"}`);

        message.channel.send(embed);
    }
}