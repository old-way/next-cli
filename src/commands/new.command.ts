export class NewCommand {
    public async initialize(program: Caporal) {
        program
            .command("new", "Generate a new project from Notadd")
            .alias("n")
            .argument("[name]", "The Notadd.JS application name.")
            .argument("[description]", "The Notadd.JS application description.")
            .argument("[version]", "The Notadd.JS application version.")
            .argument("[author]", "The Notadd.JS application author.")
            .option("--dry-run", "Allow to test changes before execute command.")
            .action(this.handle);
    }

    public async handle() {

    }
}
