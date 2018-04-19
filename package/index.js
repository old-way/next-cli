"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const program = require("caporal");
const commands_1 = require("./commands");
const generate_command_1 = require("./commands/generate.command");
async function start() {
    process.title = "Notadd";
    program
        .version("2.0.0")
        .help("Notadd.JS CLI");
    await (new commands_1.CreateCommand()).initialize(program);
    await (new generate_command_1.GenerateCommand()).initialize(program);
    program.parse(process.argv);
}
start();
