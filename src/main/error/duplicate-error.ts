import {IMessageCreator} from "./message-creater";
import {dialog} from "electron";
import {TagModel} from "../tag/tag-model";
import {tagInfo} from "./message";

export class DuplicateError implements IMessageCreator{

    constructor(private tag: TagModel) {
    }
    showMessage(): void {
        dialog.showErrorBox("このタグは既に存在します。", tagInfo(this.tag));
    }

}
