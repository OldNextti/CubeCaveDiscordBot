import { Message, MessageEmbed } from "discord.js";

export default {
    callback: (message: Message) => {

        const unbanEmbed = new MessageEmbed()
        .setTitle('Unban:')
        .setURL('https://cubec.tebex.io/')
        .setColor('ORANGE')
        .setFooter({ text: 'Precisa de ajuda? Entre em contato com !ticket', iconURL: 'https://i.imgur.com/aLxBo8H.png'})
        .setDescription(
            '📋 Siga as instruções abaixo para ser desbanido:'
        )
        .setImage('https://i.imgur.com/BkWCMlp.png')

        message.reply({ embeds: [unbanEmbed] })
    },
}