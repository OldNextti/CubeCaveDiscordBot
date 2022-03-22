"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    callback: (message) => {
        if (message.channelId !== '891147915786084352') {
            message.delete();
        }
        else {
            const ipEmbed = new discord_js_1.MessageEmbed()
                .setTitle('IP DO SERVIDOR')
                .setURL('https://cubec.tebex.io/')
                .setColor('ORANGE')
                .setFooter({ text: 'Precisa de ajuda? Entre em contato com !ticket', iconURL: 'https://i.imgur.com/aLxBo8H.png' })
                .setDescription('🔥 cubecave.net');
            message.reply({ embeds: [ipEmbed] });
        }
    },
};
