import {IDbSelector} from "./i-db-selector";
import {TagModel} from "./tag-model";
import {IDatabaseOperator} from "../database/i-tag-database";

export class DbAllSelector implements IDbSelector{
    select(db: IDatabaseOperator): TagModel[] {
        const tags = db.select();
        return tags?? [];
    }
}
