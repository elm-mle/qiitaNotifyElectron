import {IMessenger} from "./messenger";
import {dialog} from "electron";
import {tagIdInfo} from "./message";

export class TagNotExistsError implements IMessenger{

    constructor(private tagId: string) {
    }

    showMessage(): void {
        dialog.showErrorBox("対象のタグが存在しません。", tagIdInfo(this.tagId));
    }

}
