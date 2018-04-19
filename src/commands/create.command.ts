export class CreateCommand {
    public async initialize(program: Caporal) {
        program
            .command("create", "")
            .alias("c")
            .action(this.handle);
    }

    public async handle() {

    }
}