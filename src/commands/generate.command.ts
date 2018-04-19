export class GenerateCommand {
    public async initialize(program: Caporal) {
        program
            .command("generate", "Create a injection project for Notadd, which may be a addon, a extension, or a module")
            .alias("g")
            .argument("<schematic>", "Notadd.JS framework asset type", this.validate)
            .argument("<name>", "Asset name or path")
            .argument("[path]", "Path to generate the asset")
            .action(this.handle);
    }

    public async handle() {

    }

    protected validate() {

    }
}
