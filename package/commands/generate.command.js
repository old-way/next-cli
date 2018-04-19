"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GenerateCommand {
    async initialize(program) {
        program
            .command("generate", "")
            .alias("g")
            .action(this.handle);
    }
    async handle() {
    }
}
exports.GenerateCommand = GenerateCommand;
