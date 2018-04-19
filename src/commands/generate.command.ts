export class GenerateCommand {
    public async initialize(program: Caporal) {
        program
            .command("generate", "Generate a new project from Notadd.")
            .alias("g")
            .action(this.handle);
    }

    public async handle() {

    }
}
