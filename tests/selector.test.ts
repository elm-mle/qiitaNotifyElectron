import {DatabaseFactory} from "../src/main/database/database-factory";
import {TagModel} from "../src/main/tag/tag-model";
import {IDatabaseOperator} from "../src/main/database/i-tag-database";
import {IDbSelector} from "../src/main/tag/i-db-selector";
import {DbAllSelector} from "../src/main/tag/db-all-selector";

describe('ローカルのタグ確認', ()=>{

    let db: IDatabaseOperator;
    beforeEach( ()=>{
        db = DatabaseFactory.factoryDataBase('MOCK');
    });

    test('１件のタグが正常に確認できる', ()=>{

       const data = {id:"java", updateAt: new Date()}
       db.add(data);

        const selector : IDbSelector = new DbAllSelector();
        const tags: TagModel[] = selector.select(db);
        expect(tags).toStrictEqual([data]);

    });

    test('3件のデータが確認できる', ()=>{
        const data1 = {id:"java", updateAt: new Date()};
        const data2 = {id:"Python", updateAt: new Date()};
        const data3 = {id: 'Kotlin', updateAt: new Date()};

        const db = DatabaseFactory.factoryDataBase('MOCK');
        db.add(data1);
        db.add(data2);
        db.add(data3);

        const actual = new DbAllSelector().select(db);
        expect(actual).toStrictEqual([data1,data2,data3]);
    });

    test('一件もデータが存在しない', ()=>{
        const actual = new DbAllSelector().select(db);
        expect(actual).toStrictEqual([]);
    });
});
