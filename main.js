const Discord = require('discord.js');
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]});
const prefix = '!!';

    Client.on('ready', () => {
    console.log("Le bot est connécté ✨")
});

// welcome message

Client.on("guildMemberAdd", member => {
    let embed = new Discord.RichEmbed ()
        .setDescription("OH UN NOUVEAU !" + member.user + "bienvenue à toi !!!")
        .setFooter("Nous sommes maintenant" + member.guild.memberCount + "grace à toi :)")
        .setColor('RANDOM')
        .setImage("https://tenor.com/view/star-wars-baby-yoda-the-mandalorian-welcome-wave-gif-16179355")
        .setTimestamps()
member.guild.channels.get('935944788061093948').sendMessage(embed)
});

// custom status

Client.on("ready", () => [
    function randomStatus() {
        let status = ["le serveur : https://discord.gg/pmAhHZeDQF"]
        let rstatus = Math.floor(Math.random() * status.length);

        clientInformation.user.setActivity(status[rstatus], {type: "WATCHING", url: "https://youtu.be/OV2DhLa9Xxs"})
    }
    
]);


Client.login('OTM1OTI2ODQ0NDg4ODQzMzc0.YfFvzA.EAV0HXxaqCMf_D0pKdD44T2p6IY');