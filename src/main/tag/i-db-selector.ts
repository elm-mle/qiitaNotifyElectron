import {TagModel} from "./tag-model";
import {IDatabaseOperator} from "../database/i-tag-database";

export interface IDbSelector{
    select(db: IDatabaseOperator): TagModel[];
}


