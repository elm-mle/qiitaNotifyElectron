import {IDatabaseOperator} from "./i-tag-database";
import {MockTagDatabase} from "./mock-tag-database";
import {NodeRuntime} from "inspector";

export type DBType = 'MOCK' | 'Default';

export class DatabaseFactory{
    static factoryDataBase(dbType: DBType): IDatabaseOperator{
        switch (dbType){
            case 'MOCK':
                return new MockTagDatabase();
        }
        throw new Error("定義されていません");
    }
}
