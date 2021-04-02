import {FC} from "react";
import './icon-btn.scss';

interface Props{
    icon: any;
    onClick: ()=>void;
}

export const IconButtonTopMenu: FC<Props> = ({icon, onClick})=>{
    return(
        <div className={"icon-div"} onClick={onClick}>
            <img src={icon} className={"icon"} />
        </div>
    );
}
