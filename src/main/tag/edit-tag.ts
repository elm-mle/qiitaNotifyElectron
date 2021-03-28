import {Command} from "./command";
import {DBResult, IDatabaseOperator} from "../database/i-tag-database";
import {IMessageCreator} from "../error/message-creater";
import {TagModel} from "./tag-model";
import {DuplicateError} from "../error/duplicate-error";
import {TagNotExistsError} from "../error/tag-not-exists-error";




export class EditTag implements Command{

    private readonly _newTag: TagModel;



    constructor(private oldTagId:string,
                newTagId: string
                ) {

        this._newTag = {id: newTagId, updateAt: new Date()};
    }

    execute(db: IDatabaseOperator): void {
        const result = db.update(this.oldTagId, this._newTag);
        this.showErrorMessage(result);
    }


    protected showErrorMessage(errorType: DBResult): void {
        switch (errorType){
            case "SUCCESS":
                return;
            case "DUPLICATE":
                return this.showDuplicateError();
            case "NOT_EXISTS":
                return this.showNotExistsError();
        }
    }

    private showNotExistsError(){
        const notExists = new TagNotExistsError(this.oldTagId);
        notExists.showMessage();

    }

    private showDuplicateError(){
        const duplicate: IMessageCreator = new DuplicateError(this._newTag);
        duplicate.showMessage();
    }


}
