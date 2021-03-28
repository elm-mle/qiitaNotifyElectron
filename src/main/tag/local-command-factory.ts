import {ICommandFactory} from "./i-command-factory";
import {Command} from "./command";
import {AddTag} from "./add-tag";
import {DeleteTag} from "./delete-tag";
import {EditTag} from "./edit-tag";

export class LocalCommandFactory implements ICommandFactory{
    constructor(private _tagId: string) {
    }
    createAdd(): Command {
        return new AddTag(this._tagId);
    }

    createDelete(): Command {
        return new DeleteTag(this._tagId);
    }

    createEdit(newTagId: string): Command {
        return new EditTag(this._tagId, newTagId);
    }

}
