"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moderationEmbed = void 0;
const discord_js_1 = require("discord.js");
const moderationEmbed = new discord_js_1.MessageEmbed()
    .setColor('ORANGE')
    .setTitle('**NÃO MARQUE A STAFF!**')
    .setDescription('Não pingue a staff em nenhum chat\nPara receber ajuda abra um ticket.');
exports.moderationEmbed = moderationEmbed;
