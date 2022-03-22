"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    callback: (message) => {
        const id = message.channel.parentId;
        const closeEmbed = new discord_js_1.MessageEmbed()
            .setColor('ORANGE')
            .setFooter({ text: 'CLIQUE EM ✅ PARA DELETAR O TICKET' });
        if (id === '928083740180234282' ||
            id === '928093454377054288' ||
            id === '928124373422989342' ||
            id === '928032806502801511')
            return;
        else {
            message.reply({ embeds: [closeEmbed] }).then((message) => {
                message.react('✅');
                const closeCollector = message.createReactionCollector({ max: 2 });
                closeCollector.on('end', () => {
                    message.channel.delete();
                });
            });
        }
    },
};
