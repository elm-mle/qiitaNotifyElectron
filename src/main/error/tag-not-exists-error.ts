import {IMessageCreator} from "./message-creater";
import {TagModel} from "../tag/tag-model";
import {dialog} from "electron";
import {tagIdInfo, tagInfo} from "./message";

export class TagNotExistsError implements IMessageCreator{

    constructor(private tagId: string) {
    }

    showMessage(): void {
        dialog.showErrorBox("対象のタグが存在しません。", tagIdInfo(this.tagId));
    }

}
