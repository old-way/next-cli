"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCommand {
    async initialize(program) {
        program
            .command("create", "")
            .alias("c")
            .action(this.handle);
    }
    async handle() {
    }
}
exports.CreateCommand = CreateCommand;
