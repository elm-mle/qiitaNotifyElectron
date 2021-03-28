
import { IDatabaseOperator} from "../database/i-tag-database";

export interface Command{
    execute(db: IDatabaseOperator): void;
}
