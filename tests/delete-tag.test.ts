import {TagNotExistsError} from "../src/main/error/tag-not-exists-error";
import {DatabaseFactory} from "../src/main/database/database-factory";
import {Command} from "../src/main/tag/command";
import {IDatabaseOperator} from "../src/main/database/i-tag-database";
import {DeleteTag} from "../src/main/tag/delete-tag";

import {mocked} from "ts-jest/utils";


jest.mock('../src/main/error/tag-not-exists-error');

describe('タグ削除', ()=>{


    let db: IDatabaseOperator;
    beforeEach(()=>{
        db = DatabaseFactory.factoryDataBase('MOCK');
    })
    test('タグ削除', ()=>{
        const deleteTag: Command = new DeleteTag("java");
        deleteTag.execute(db);

        const java = db.selectById("java");
        expect(java).toBeUndefined();
    });
    test('存在しないタグを削除する', ()=>{
        const deleteTag: Command = new DeleteTag("undefined");
        //@ts-ignore
        const showMessageFn = jest.spyOn(deleteTag, "showErrorMessage")
        deleteTag.execute(db);

        expect(showMessageFn).toHaveBeenCalled();
    });
});
