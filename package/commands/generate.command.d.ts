export declare class GenerateCommand {
    protected schematics: {
        alias: string;
        value: string;
    }[];
    initialize(program: Caporal): Promise<void>;
    handle(): Promise<void>;
    protected validate(arg: any): number;
}
