import {FC} from "react";
import './icon-button.scss';

export const IconButtonSideBar: FC<{id:string, onClick: ()=>void}> = ({id,onClick}) => {

    return (
        <div className={"button"} onClick={onClick}>
            {id}
        </div>
    );
}
