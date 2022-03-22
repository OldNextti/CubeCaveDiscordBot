"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_files_1 = __importDefault(require("./get-files"));
exports.default = (client) => {
    const commands = {};
    const suffix = ".js";
    const commandFiles = (0, get_files_1.default)("./commands", suffix);
    console.log(commandFiles);
    for (const command of commandFiles) {
        let commandFile = require(command);
        if (commandFile.default)
            commandFile = commandFile.default;
        const split = command.replace(/\\/g, "/").split("/");
        const commandName = split[split.length - 1].replace(suffix, "");
        commands[commandName.toLowerCase()] = commandFile;
    }
    console.log(commands);
    client.on("messageCreate", (message) => {
        if (message.author.bot || !message.content.startsWith("!")) {
            return;
        }
        const args = message.content.slice(1).split(/ +/);
        const commandName = args.shift().toLowerCase();
        if (!commands[commandName]) {
            return;
        }
        try {
            commands[commandName].callback(message, ...args);
        }
        catch (error) {
            console.error(error);
        }
    });
};
