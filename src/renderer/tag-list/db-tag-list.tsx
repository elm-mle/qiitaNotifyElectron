import {FC, useEffect} from "react";
import {Tag} from "../tag/tag";
import {TagModel} from "../../main/tag/tag-model";
import {useRecoilState} from "recoil";
import {dbTagListAtomState, selectDbTag} from "../store";

export const DbTagList: FC = () => {
    const [list, setList] = useRecoilState<TagModel[]>(dbTagListAtomState);

    useEffect(()=>{
        (async ()=>{
            const tagList = await selectDbTag();
            setList(_ => tagList);
        })();
    },[]);

    return (
        <div className={"tag-list"}>
            {list.map(tag => <Tag key={tag.id} id={tag.id} updateAt={tag.updateAt}/>)}
        </div>
    );
};
