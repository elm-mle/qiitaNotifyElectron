import {TagModel} from "../tag/tag-model";

export const tagInfo = (tag: TagModel) => `タグ名: ${tag.id} 登録日時: ${tag.updateAt}`;

export const tagIdInfo = (tagId: string) => `タグ名: ${tagId}`;
