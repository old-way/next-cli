import * as program from "caporal";
import { GenerateCommand, NewCommand } from "./commands";

async function start() {
    process.title = "Notadd";

    program
        .version("2.0.0")
        .help("Notadd.JS CLI");

    await (new GenerateCommand()).initialize(program);
    await (new NewCommand()).initialize(program);

    program.parse(process.argv);
}

start();
