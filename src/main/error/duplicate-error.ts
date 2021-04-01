import {IMessenger} from "./messenger";
import {dialog} from "electron";
import {tagIdInfo} from "./message";

export class DuplicateError implements IMessenger{

    constructor(private tagId: string) {
    }
    showMessage(): void {
        dialog.showErrorBox("このタグは既に存在します。", tagIdInfo(this.tagId));
    }

}
