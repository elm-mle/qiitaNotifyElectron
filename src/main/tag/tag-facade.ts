import {TagModel} from "./tag-model";
import {ICommandFactory} from "./i-command-factory";
import {IDatabaseOperator} from "../database/i-tag-database";
import {DbAllSelector} from "./db-all-selector";

export class TagFacade{

    constructor(private _commandFactory: ICommandFactory,
                private _db: IDatabaseOperator) {
    }

    addTag(){
        const add = this._commandFactory.createAdd();
        add.execute(this._db);
    }

    deleteTag(){
        const del = this._commandFactory.createDelete();
        del.execute(this._db);
    }

    editTag(newTagId: string){
        const edit = this._commandFactory.createEdit(newTagId);
        edit.execute(this._db);
    }

    fetchAllTag(): TagModel[]{
        const allSelect = new DbAllSelector();
        return allSelect.select(this._db);
    }
}
