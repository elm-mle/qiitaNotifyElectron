import {useRecoilState} from "recoil";
import {addTag, dbTagListAtomState, selectDbTag} from "../store";

export const useSetDb =  () => {
    const [_, setDb] = useRecoilState(dbTagListAtomState);
    return (tagId: string) => {
        (async ()=>{
            await addTag(tagId);
            const tags = await selectDbTag();
            tags.forEach(t => console.log(t))
            setDb(tags);
        })();
    };
}
