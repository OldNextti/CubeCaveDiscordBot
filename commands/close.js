"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    callback: (message) => {
        const id = message.channel.parentId;
        const closeEmbed = new discord_js_1.MessageEmbed()
            .setColor('ORANGE')
            .setFooter({ text: 'CLIQUE EM ✅ PARA FECHAR O TICKET' });
        if (id === '903980003526602762' ||
            id === '889369640067805194' ||
            id === '910129464665571369' ||
            id === '911763982728167505')
            return;
        else {
            message.reply({ embeds: [closeEmbed] }).then((message) => {
                message.react('✅');
                const closeCollector = message.createReactionCollector({ max: 2 });
                closeCollector.on('end', () => {
                    message.channel.setParent('889516542981701712')
                        .then((message) => {
                        message.permissionOverwrites.set([
                            {
                                id: message.guild.roles.everyone,
                                deny: ['VIEW_CHANNEL']
                            },
                            {
                                id: '931925110175195156',
                                allow: [
                                    'VIEW_CHANNEL',
                                    'SEND_MESSAGES',
                                    'ATTACH_FILES',
                                    'READ_MESSAGE_HISTORY',
                                    'MANAGE_MESSAGES',
                                    'MENTION_EVERYONE'
                                ]
                            }
                        ]);
                        const deleteEmbed = new discord_js_1.MessageEmbed()
                            .setColor('ORANGE')
                            .setFooter({ text: 'Para deletar o ticket use: !delete' });
                        message.send({ embeds: [deleteEmbed] });
                    });
                });
            });
        }
    },
};
