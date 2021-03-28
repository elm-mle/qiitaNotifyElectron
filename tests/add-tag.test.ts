


import {MockTagDatabase} from "../src/main/database/mock-tag-database";
import {DatabaseFactory} from "../src/main/database/database-factory";
import {AddTag} from "../src/main/tag/add-tag";
import {DuplicateError} from "../src/main/error/duplicate-error";
import {IMessageCreator} from "../src/main/error/message-creater";
import {mocked} from "ts-jest/utils";
jest.mock('../src/main/error/duplicate-error');

describe('タグを追加する', ()=>{
    const db = DatabaseFactory.factoryDataBase('MOCK');

    test('システムに一件のデータを登録が成功する', ()=>{
        const transaction = new AddTag("java");
        transaction.execute(db);

        const model = db.selectById("java");
        expect(model).not.toBeUndefined();
        expect(model?.id).toBe("java");

    });

    test('既に一件のデータが登録されている', ()=>{

        const db =  DatabaseFactory.factoryDataBase('MOCK');
        db.add({id:"java", updateAt:new Date()});
        const transaction = new AddTag("java");
        //@ts-ignore
        const test = jest.spyOn(transaction, "showErrorMessage")
        transaction.execute(db);

        expect(test).toHaveBeenCalled();
    });

});
