import * as program from "caporal";
import { CreateCommand } from "./commands";
import { GenerateCommand } from "./commands/generate.command";

async function start() {
    process.title = "Notadd";

    program
        .version("2.0.0")
        .help("Notadd.JS CLI");

    await (new CreateCommand()).initialize(program);
    await (new GenerateCommand()).initialize(program);

    program.parse(process.argv);
}

start();
