"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCommand {
    async initialize(program) {
        program
            .command("create", "Create a injection project for Notadd, which may be a addon, a extension, or a module.")
            .alias("c")
            .action(this.handle);
    }
    async handle() {
    }
}
exports.CreateCommand = CreateCommand;
