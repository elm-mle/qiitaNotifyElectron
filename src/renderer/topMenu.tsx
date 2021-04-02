import {FC} from "react";
import './top-menu.scss';
import {appQuit, windowMax, windowMin} from "./store";
import cross from '../img/cross.png';
import mini from '../img/mini.png';
import max from '../img/max.png';
import {IconButtonTopMenu} from "./icon-btn/icon-btn";


//TODO メニューボタン追加
export const TopMenu: FC = ()=> {

    return (
        <div id={"top"}>
            <IconButtonTopMenu icon={mini} onClick={() => windowMin()} />
            <IconButtonTopMenu icon={max} onClick={() => windowMax()} />
            <IconButtonTopMenu icon={cross} onClick={() => appQuit()} />
        </div>
    );
}
