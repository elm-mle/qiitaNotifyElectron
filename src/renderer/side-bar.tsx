import {FC} from "react";
import './side-bar.scss';
import {IconButtonSideBar} from "./icon-button-side-bar";
import {useRecoilState} from "recoil";
import {switchTagListAtomState} from "./store";
export const SideBar: FC = () => {
    const [listType, setType] = useRecoilState(switchTagListAtomState);


    return(
        <div id={"side-bar"}>
            <IconButtonSideBar id={"DB"} onClick={() => {
                   if(listType !== 'DB') setType('DB');
            }}/>
            <IconButtonSideBar id={"NET"} onClick={()=>{
                   if(listType !== 'NET') setType('NET');
            }}/>
        </div>
    );
}
