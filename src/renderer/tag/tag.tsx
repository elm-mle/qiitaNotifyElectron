import {FC} from "react";
import {TagModel} from "../../main/tag/tag-model";
import './tag.scss';
import {useSetDb} from "../custom/customs";

export const Tag: FC<TagModel> = ({id})=> {
    const setDb = useSetDb();

    return (
        <div className={"tag"} onClick={() => {setDb(id)}}>

            {id}
        </div>
    );

};
