import { Message, MessageEmbed, TextChannel } from "discord.js";

const prefix = '!';

export default {

    callback: (message: Message) => {

        if (message.channelId !== '891147915786084352') { message.delete(); }

        else {
        message.delete();

        const error = new MessageEmbed()
        .setColor('ORANGE')
        .setFields(
            {
                name: 'ERRO!',
                value: 'Use !sugerir <sua-sugestão>'
            },
            {
                name: 'Exemplo:',
                value: '!sugerir colocar novo plugin de evento'
            }
        )

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift()?.toLowerCase();

        const sugest = args.join(' ');

        if (command === 'sugerir' && !sugest) {
            message.channel.send({ embeds: [error] })
        }

        else {

            const playerSugestion = new MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({dynamic: true}) })
            .setColor('ORANGE')
            .setDescription(`${sugest}`)
            
            const channel = message.guild?.channels.cache.get('929135917149614110') as TextChannel
            channel.send({ embeds: [playerSugestion] }).then((message) => {
                message.react('✅'),
                message.react('❎');
            })
            const inform = message.guild?.channels.cache.get('891147915786084352') as TextChannel
            inform.send(`<@${message.author.id}> sua sugestão foi enviada!`);
        }
    }
    },
}