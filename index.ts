import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
import { moderationEmbed } from './moderation/noMention'
dotenv.config()

const client = new DiscordJS.Client({
    intents:
    [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
})

client.on('ready', () => {
    let handler = require('./command-handler')
    if (handler.default) handler = handler.default

    handler(client)
})

client.on('messageCreate', (message) => {

    if (message.content.includes(`<@847637326204764202>`)) {
        message.reply({ embeds: [moderationEmbed] });
    }

})

client.login(process.env.TOKEN)