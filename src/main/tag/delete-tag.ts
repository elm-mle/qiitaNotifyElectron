import {Command} from "./command";
import {DBResult, IDatabaseOperator} from "../database/i-tag-database";
import {IMessageCreator} from "../error/message-creater";
import {TagNotExistsError} from "../error/tag-not-exists-error";
import {TagModel} from "./tag-model";

export class DeleteTag implements Command{

    private readonly tag: TagModel;
    constructor(tagId: string,
                ) {
        this.tag = {id: tagId, updateAt: new Date()};
    }

    execute(db: IDatabaseOperator): void {
        const result = db.delete(this.tag.id);
        if(result === 'NOT_EXISTS') this.showErrorMessage();
    }

    private showErrorMessage(): void {
        const error: IMessageCreator = new TagNotExistsError(this.tag.id);
        error.showMessage();
    }
}
