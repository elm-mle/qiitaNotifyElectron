import {FC, useState} from "react";
import {TagModel} from "../../main/tag/tag-model";
import './tag.scss';
import {useSetDb} from "../custom/customs";
import Modal from 'react-modal';
import {ModalDialog} from "../modal/modal-dialog";

export interface Props{

}

export const Tag: FC<TagModel> = ({id})=> {
    const setDb = useSetDb();
    const [isOpen, setOpen] = useState<boolean>(false);


    return (
        <>
            <ModalDialog
                description={"タグを登録しますか？"}
                isOpen={isOpen}
                onOkClick={()=>{
                    setDb(id)
                    setOpen(false);
                }}
                onCancelClick={() => {setOpen(false)}}
                okText={"登録する"}/>

            <div className={"tag"} onClick={() => {setOpen(true)}}>
                {id}
            </div>
        </>

    );
}
