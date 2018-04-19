export class CreateCommand {
    public async initialize(program: Caporal) {
        program
            .command("create", "Create a injection project for Notadd, which may be a addon, a extension, or a module.")
            .alias("c")
            .action(this.handle);
    }

    public async handle() {

    }
}
