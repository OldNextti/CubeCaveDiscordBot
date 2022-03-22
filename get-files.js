"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const getFiles = (dir, suffix) => {
    const files = fs_1.default.readdirSync(dir, {
        withFileTypes: true,
    });
    let commandFiles = [];
    for (const file of files) {
        if (file.isDirectory()) {
            commandFiles = [
                ...commandFiles,
                ...getFiles(`${dir}/${file.name}`, suffix)
            ];
        }
        else if (file.name.endsWith(suffix)) {
            commandFiles.push(`${dir}/${file.name}`);
        }
    }
    return commandFiles;
};
exports.default = getFiles;
