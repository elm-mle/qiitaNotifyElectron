import {FC} from "react";

interface Props{
    onClick: ()=> void;
    btnText: string;
    onChange: (text: string)=> void;
}


export const Input: FC<Props> = ({onClick, btnText, onChange})=> {
    return (
        <div>
            <input type = "text" onChange={(e)=>onChange(e.target.value)}/>
            <button onClick={onClick}>
                {btnText}
            </button>
        </div>
    );
};
