"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    callback: (message) => {
        if (message.channelId === '891147915786084352' ||
            message.channel.parentId === '889516479396065340') {
            const voteEmbed = new discord_js_1.MessageEmbed()
                .setTitle('LINKS DE VOTOS:')
                .setURL('https://cubec.tebex.io/')
                .setColor('ORANGE')
                .setFooter({ text: 'Precisa de ajuda? Entre em contato com !ticket', iconURL: 'https://i.imgur.com/aLxBo8H.png' })
                .setDescription('📋 Clique nos links abaixo para ser redirecionado.\n\n' +
                '1. https://cutt.ly/nncv7zC\n2. https://cutt.ly/wncv3N8\n3. https://cutt.ly/cncv0Ar\n4. https://cutt.ly/6ncv1zT\n5. https://cutt.ly/PIctHol')
                .addFields({
                name: "Votei e não contou:",
                value: "Raramente os votos não são contabilizados. Isso é um problema com o site de votos e não há nada que possamos fazer." +
                    ' Também pode ser um problema do seu lado, por ter inserido seu nick errado, ficado offline na hora do voto ou não aguardado a confirmação do site antes de fecha-lo.'
            });
            message.reply({ embeds: [voteEmbed] });
        }
        else {
            message.delete();
        }
    },
};
