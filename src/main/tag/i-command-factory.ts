import {Command} from "./command";

export interface ICommandFactory {
    createAdd(): Command;
    createDelete(): Command;
    createEdit(newTagId: string): Command;
}
