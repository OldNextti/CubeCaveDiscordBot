import { Message } from "discord.js";

export default {
  callback: (message: Message) => {

    if (message.channelId !== '891147915786084352') { message.delete(); }

    else {
      message.delete(),
        message.guild?.channels
          .create(`${message.author.username} ticket`, {
            type: "GUILD_TEXT",
            position: 1,
          })
          .then((channel) => {
            channel.setParent("889516479396065340"),
              channel.permissionOverwrites.set([
                {
                  id: channel.guild.roles.everyone,
                  deny: ["VIEW_CHANNEL"],
                },
                {
                  id: message.author.id,
                  allow: [
                    "VIEW_CHANNEL",
                    "SEND_MESSAGES",
                    "ATTACH_FILES",
                    "READ_MESSAGE_HISTORY",
                  ],
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
              ]),
              channel.send({ content: `**Olá <@${message.author.id}>!**` }),
              channel.send({ content: `**Nosso <@&889362409389686814> lhe atenderá em breve.**` });
              channel.send({ content: `**Enquanto isso pedimos que descreva seu problema com detalhes.**` })
          });
        }
    },
};
