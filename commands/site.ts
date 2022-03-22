import { Message, MessageEmbed } from "discord.js";

export default {
    callback: (message: Message) => {
        
        if (message.channelId !== '928103306260250664') { message.delete(); }

        else {
        const siteEmbed = new MessageEmbed()
        .setTitle('LOJA DO SERVIDOR')
        .setURL('https://cubec.tebex.io/')
        .setColor('ORANGE')
        .setFooter({ text: 'Precisa de ajuda? Entre em contato com !ticket', iconURL: 'https://i.imgur.com/aLxBo8H.png'})
        .setDescription(
            '📋 Clique no link abaixo para ir até o site.\n\n' +
            'https://cubec.tebex.io/'
        )

        message.reply({ embeds: [siteEmbed] })
        }
    },
}