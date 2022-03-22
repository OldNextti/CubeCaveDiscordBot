"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    callback: (message) => {
        const unbanEmbed = new discord_js_1.MessageEmbed()
            .setTitle('Unban:')
            .setURL('https://cubec.tebex.io/')
            .setColor('ORANGE')
            .setFooter({ text: 'Precisa de ajuda? Entre em contato com !ticket', iconURL: 'https://i.imgur.com/aLxBo8H.png' })
            .setDescription('📋 Siga as instruções abaixo para ser desbanido:')
            .setImage('https://i.imgur.com/BkWCMlp.png');
        message.reply({ embeds: [unbanEmbed] });
    },
};
