"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GenerateCommand {
    async initialize(program) {
        program
            .command("generate", "Create a injection project for Notadd, which may be a addon, a extension, or a module")
            .alias("g")
            .argument("<schematic>", "Notadd.JS framework asset type", this.validate)
            .argument("<name>", "Asset name or path")
            .argument("[path]", "Path to generate the asset")
            .action(this.handle);
    }
    async handle() {
    }
    validate() {
    }
}
exports.GenerateCommand = GenerateCommand;
