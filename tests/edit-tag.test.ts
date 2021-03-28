import {TagNotExistsError} from "../src/main/error/tag-not-exists-error";
import {IDatabaseOperator} from "../src/main/database/i-tag-database";
import {DatabaseFactory} from "../src/main/database/database-factory";
import {Command} from "../src/main/tag/command";
import {EditTag} from "../src/main/tag/edit-tag";
jest.mock("")
describe('タグ編集', ()=>{


    let db: IDatabaseOperator;
    beforeEach(()=>{
        db = DatabaseFactory.factoryDataBase('MOCK');
    });

    test('タグ編集成功', ()=>{
        const now = new Date();


        const edit: Command = new EditTag("java", "ts");
        db.add({id:"java", updateAt: new Date()});
        edit.execute(db);

        const java = db.selectById("java");
        expect(java).toBeUndefined();

        const ts = db.selectById("ts");
        expect(ts).toStrictEqual({id:"ts", updateAt: now})
    });

    test('存在しないタグを書き換えようとした', ()=> {
        const edit = new EditTag("undefin", "ts");
        //@ts-ignore
        const notExists = jest.spyOn(edit, "showNotExistsError");
        edit.execute(db);

        expect(db.selectById("ts")).toBeUndefined();
        expect(notExists).toHaveBeenCalled();
    });

    test('既に存在するタグに変更しようとした', ()=> {
        const edit = new EditTag("java", "ts");
        db.add({id: "java", updateAt: new Date()});
        db.add({id: "ts", updateAt: new Date()});
        //@ts-ignore
        const duplicate = jest.spyOn(edit, "showDuplicateError");
        edit.execute(db);

        expect(db.selectById("ts")).not.toBeUndefined();
        expect(db.selectById("java")).not.toBeUndefined();
        expect(duplicate).toHaveBeenCalled();
    });

});
