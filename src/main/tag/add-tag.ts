import {Command} from "./command";
import {DBResult, IDatabaseOperator} from "../database/i-tag-database";
import {TagModel} from "./tag-model";
import {IMessageCreator} from "../error/message-creater";
import {DuplicateError} from "../error/duplicate-error";

export class AddTag implements Command{

    private readonly tag: TagModel;
    constructor(tagId: string) {
        this.tag = {id: tagId, updateAt: new Date()};
    }


    private showErrorMessage(): void {
        const duplicate: IMessageCreator = new DuplicateError(this.tag);
        duplicate.showMessage();
    }

    execute(db: IDatabaseOperator): void {
        const result = db.add(this.tag);
        if(result === 'DUPLICATE') this.showErrorMessage();
    }

}
