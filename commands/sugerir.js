"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const prefix = '!';
exports.default = {
    callback: (message) => {
        var _a, _b, _c;
        if (message.channelId !== '891147915786084352') {
            message.delete();
        }
        else {
            message.delete();
            const error = new discord_js_1.MessageEmbed()
                .setColor('ORANGE')
                .setFields({
                name: 'ERRO!',
                value: 'Use !sugerir <sua-sugestão>'
            }, {
                name: 'Exemplo:',
                value: '!sugerir colocar novo plugin de evento'
            });
            const args = message.content.slice(prefix.length).trim().split(/ +/g);
            const command = (_a = args.shift()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
            const sugest = args.join(' ');
            if (command === 'sugerir' && !sugest) {
                message.channel.send({ embeds: [error] });
            }
            else {
                const playerSugestion = new discord_js_1.MessageEmbed()
                    .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                    .setColor('ORANGE')
                    .setDescription(`${sugest}`);
                const channel = (_b = message.guild) === null || _b === void 0 ? void 0 : _b.channels.cache.get('929135917149614110');
                channel.send({ embeds: [playerSugestion] }).then((message) => {
                    message.react('✅'),
                        message.react('❎');
                });
                const inform = (_c = message.guild) === null || _c === void 0 ? void 0 : _c.channels.cache.get('891147915786084352');
                inform.send(`<@${message.author.id}> sua sugestão foi enviada!`);
            }
        }
    },
};
