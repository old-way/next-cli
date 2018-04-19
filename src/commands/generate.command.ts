export class GenerateCommand {
    public async initialize(program: Caporal) {
        program
            .command("generate", "")
            .alias("g")
            .action(this.handle);
    }

    public async handle() {

    }
}
