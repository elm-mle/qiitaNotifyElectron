import {IDatabaseOperator} from "../database/i-tag-database";
import {TagModel} from "./tag-model";
import {DuplicateError} from "../error/duplicate-error";
import {IMessenger} from "../error/messenger";
import {TagNotExistsError} from "../error/tag-not-exists-error";

export class TagRepository{
    constructor(private _db: IDatabaseOperator) {
    }
    addTag(tagId: string): void{
        const tag: TagModel = {id: tagId, updateAt: new Date()};
        const result = this._db.add(tag);
        if(result === 'DUPLICATE'){
            TagRepository.showDuplicateError(tagId);
        }
    }
    deleteTag(tagId: string): void{
        const result = this._db.delete(tagId);
        if(result === 'NOT_EXISTS'){
            TagRepository.showNotExistsError(tagId);
        }
    }
    ediTag(tagId: string, newTagId: string): void{
        const result = this._db.update(tagId, TagRepository.createTag(newTagId));
        if(result === 'NOT_EXISTS'){
            TagRepository.showDuplicateError(tagId)
        }
    }

    selectAll(): TagModel[]{
        return this._db.select() || [];
    }

    private static showDuplicateError(tagId: string){
        const error: IMessenger = new DuplicateError(tagId);
        error.showMessage();
    }
    private static showNotExistsError(tagId: string){
        const error: IMessenger = new TagNotExistsError(tagId);
        error.showMessage();
    }

    private static createTag(tagId: string): TagModel{
        return {id: tagId, updateAt: new Date()};
    }
}
