import {IDatabaseOperator} from "./i-tag-database";
import {MockTagDatabase} from "./mock-tag-database";

export type DBType = 'MOCK' | 'Default';

export class DatabaseFactory{
    static factoryDataBase(dbType: DBType): IDatabaseOperator{
        switch (dbType){
            case 'MOCK':
                return MockTagDatabase.instance;
        }
        throw new Error("定義されていません");
    }
}
