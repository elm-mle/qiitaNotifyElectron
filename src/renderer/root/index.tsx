import {FC} from "react";
import ReactDOM from "react-dom";
import './index.scss';
import {DbTagList} from "../tag-list/db-tag-list";
import {RecoilRoot, useRecoilValue} from "recoil";
import {SideBar} from "../side-bar";
import {TopMenu} from "../topMenu";
import {NetTagList} from "../tag-list/net-tag-list";
import {SWITCH_TAG_LIST_TYPE, switchTagListAtomState} from "../store";

const Root: FC = () => {
    const tagListType = useRecoilValue(switchTagListAtomState);

    return(
        <>
            <TopMenu/>
            <div id={"main"}>
                <SideBar />
                <div id={"main-component"}>
                    {switchTagListComponent(tagListType)}
                </div>
            </div>
        </>
    );

};
const switchTagListComponent = (type: SWITCH_TAG_LIST_TYPE) => {
    switch (type){
        case "DB" :
            return <DbTagList />
        case "NET":
            return <NetTagList />
    }
}

ReactDOM.render(
    <RecoilRoot>
        <Root />
    </RecoilRoot>
   ,document.getElementById('root'))
