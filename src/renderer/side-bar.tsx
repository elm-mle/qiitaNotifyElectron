import {FC} from "react";
import './side-bar.scss';
import {IconButton} from "./icon-button";
import {useRecoilState} from "recoil";
import {switchTagListAtomState} from "./store";
export const SideBar: FC = () => {
    const [listType, setType] = useRecoilState(switchTagListAtomState);


    return(
        <div id={"side-bar"}>
            <IconButton id={"DB"} onClick={() => {
                   if(listType !== 'DB') setType('DB');
            }}/>
            <IconButton id={"NET"} onClick={()=>{
                   if(listType !== 'NET') setType('NET');
            }}/>
        </div>
    );
}
