import {FC} from "react";
import Modal from "react-modal";
import {Button, createStyles, makeStyles, Theme} from "@material-ui/core";
import './modal-dialog.scss';

interface Props{
    isOpen: boolean;
    onCancelClick: ()=> void;
    onOkClick: () => void;
    okText: string;
    description: string;
}

export const ModalDialog: FC<Props > = (props) => {

    return(
            <Modal isOpen={props.isOpen} className={"modal"} ariaHideApp={false}>
                <div className={"frame"}>
                    <div className={"dcp"}>
                        <p className={"dcp-txt"}>{props.description}</p>
                    </div>

                    <div className={"dcp-btm"}>
                        <button className={"btn ok"} onClick={props.onOkClick}> {props.okText}</button>
                        <button className={"btn cancel"} onClick={props.onCancelClick}>キャンセル</button>
                    </div>

                </div>
            </Modal>
    );

}
